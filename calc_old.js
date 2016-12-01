Array.prototype.indexOfPoint = function (item) {
    var i = 0, j = this.length, k;

    while (i < j) {
        k = Math.floor((i + j) / 2);

        if (item[0] <= this[k][0]) j = k;
        else i = k + 1;
    }

    if (this[i][0] === item[0] && this[i][1] === item[1]) return i;     // На выходе индекс искомого элемента.
    else return -1;                 // Если искомого элемента нет в массиве, то -1.
}

var NORM = require('./lib/SP63.13330.2012');

// Подготовка массива элементов
// Прямоугольник 400 х 600(h)
const width = 0.4; // метрах
const height = 0.6; // метрах

const width_count = 10;
const height_count = 10;

const N = 0 / 1000; //MN
const Mx = 0 / 1000 // MN*m
const My = -10 / 1000 // MN*m

const concreteType = NORM.HEAVY_CONCRETE;
const concreteClass = 'B25';
const rebarClass = 'A500';
const loadType = NORM.SHORT_TERM_LOAD;
const humidity = NORM.LOW_HUMIDITY;

const Ybi = 1.0, Ybti = 1.0, Ysi = 1.0;

var RC_diagram = NORM.get3LinearDiagramForConcrete(concreteType, concreteClass, Ybi, Ybti, loadType);
var REBAR_diagram = NORM.get2LinearDiagramForRebar(rebarClass, Ysi, loadType);

console.log('RC_diagram');
console.log(RC_diagram);
console.log('REBAR_diagram');
console.log(REBAR_diagram);

var REBAR_X_OriginalCoordinates = [0.2, 0.2];
var REBAR_Y_OriginalCoordinates = [0.05, 0.55];
var REBAR_Squares = [314.2 / 1000000, 314.2 / 1000000];

var width_pitch = width / width_count;
var height_pitch = height / height_count;

var RC_X_OriginalCoordinates = [];
var RC_Y_OriginalCoordinates = [];
var RC_Squares = [];

for (var i = 0; i < width_count; i++) {
    for (var j = 0; j < height_count; j++) {

        var x = (i + 0.5) * width_pitch;
        var y = (j + 0.5) * height_pitch;

        RC_X_OriginalCoordinates.push(x);
        RC_Y_OriginalCoordinates.push(y);
        RC_Squares.push(width_pitch * height_pitch);

    }
}

var totalSquare = RC_Squares.reduce(function (previousValue, currentValue, index, array) {
    return previousValue + currentValue;
}, 0);
console.log('Total square = ', totalSquare, 'm2');

var Sx = 0, Sy = 0;

for (var i = 0; i < RC_Squares.length; i++) {
    Sx = Sx + RC_Squares[i] * RC_X_OriginalCoordinates[i];
    Sy = Sy + RC_Squares[i] * RC_Y_OriginalCoordinates[i];
}

console.log('Sx = ', Sx, 'm3');
console.log('Sy = ', Sy, 'm3');


var xGravityCenter = Sx / totalSquare;
var yGravityCenter = Sy / totalSquare;
console.log('Center of gravity in meters: (', xGravityCenter, ';', yGravityCenter, ')');

var RC_X_CenterCoordinates = [];
var RC_Y_CenterCoordinates = [];
var REBAR_X_CenterCoordinates = [];
var REBAR_Y_CenterCoordinates = [];

RC_X_OriginalCoordinates.map(function (value) {
    RC_X_CenterCoordinates.push(value - xGravityCenter);
});

RC_Y_OriginalCoordinates.map(function (value) {
    RC_Y_CenterCoordinates.push(value - yGravityCenter);
});

REBAR_X_OriginalCoordinates.map(function (value) {
    REBAR_X_CenterCoordinates.push(value - xGravityCenter);
});

REBAR_Y_OriginalCoordinates.map(function (value) {
    REBAR_Y_CenterCoordinates.push(value - yGravityCenter);
});

// console.log(REBAR_X_CenterCoordinates);
// console.log(REBAR_Y_CenterCoordinates);

function make_N_diagram(diagram, square) {
    return diagram.map(function (item) {
        return [item[0], item[1] * square];
    });
}

function make_M_diagram(diagram, square, coordinate) {
    return diagram.map(function (item) {
        return [item[0] / coordinate, item[1] * coordinate * square];
    });
}

var totalDiagram_N = [];
var totalDiagram_Mx = [];
var totalDiagram_My = [];


for (i = 0; i < RC_Squares.length; i++) {
    totalDiagram_N = totalDiagram_N.concat(make_N_diagram(RC_diagram, RC_Squares[i]).map(function (item) {
        return item[0];
    }));
    totalDiagram_Mx = totalDiagram_Mx.concat(make_M_diagram(RC_diagram, RC_Squares[i], RC_Y_CenterCoordinates[i]).map(function (item) {
        return item[0];
    }));
    totalDiagram_My = totalDiagram_My.concat(make_M_diagram(RC_diagram, RC_Squares[i], RC_X_CenterCoordinates[i]).map(function (item) {
        return item[0];
    }));
}

for (i = 0; i < REBAR_Squares.length; i++) {
    totalDiagram_N = totalDiagram_N.concat(make_N_diagram(REBAR_diagram, REBAR_Squares[i]).map(function (item) {
        return item[0];
    }));
    totalDiagram_Mx = totalDiagram_Mx.concat(make_M_diagram(REBAR_diagram, REBAR_Squares[i], REBAR_Y_CenterCoordinates[i]).map(function (item) {
        return item[0];
    }));
    totalDiagram_My = totalDiagram_My.concat(make_M_diagram(REBAR_diagram, REBAR_Squares[i], REBAR_X_CenterCoordinates[i]).map(function (item) {
        return item[0];
    }));
}

totalDiagram_N = getUniqueArray(totalDiagram_N).sort(compareNumbers).map(function (value) {
    return [value, 0];
});

totalDiagram_Mx = getUniqueArray(totalDiagram_Mx).sort(compareNumbers).map(function (value) {
    return [value, 0];
});

totalDiagram_My = getUniqueArray(totalDiagram_My).sort(compareNumbers).map(function (value) {
    return [value, 0];
});

function addDiagram(baseDiagram, addDiagram) {
    return baseDiagram.map(function (item) {

        var pos = item[0], value = item[1];
        var additive = getValueFromDiagram(pos, addDiagram, 0, 1);

        if (additive === null) {
            return item;
        } else {
            return [pos, value + additive];
        }
    });
}

for (i = 0; i < RC_Squares.length; i++) {

    var N_diagram = make_N_diagram(RC_diagram, RC_Squares[i]).sort(compareTwoPointsByName);
    var Mx_diagram = make_M_diagram(RC_diagram, RC_Squares[i], RC_Y_CenterCoordinates[i]).sort(compareTwoPointsByName);
    var My_diagram = make_M_diagram(RC_diagram, RC_Squares[i], RC_X_CenterCoordinates[i]).sort(compareTwoPointsByName);

    totalDiagram_N = addDiagram(totalDiagram_N, N_diagram);
    totalDiagram_Mx = addDiagram(totalDiagram_Mx, Mx_diagram);
    totalDiagram_My = addDiagram(totalDiagram_My, My_diagram);
}

for (i = 0; i < REBAR_Squares.length; i++) {

    var N_diagram = make_N_diagram(REBAR_diagram, REBAR_Squares[i]).sort(compareTwoPointsByName);
    var Mx_diagram = make_M_diagram(REBAR_diagram, REBAR_Squares[i], REBAR_Y_CenterCoordinates[i]).sort(compareTwoPointsByName);
    var My_diagram = make_M_diagram(REBAR_diagram, REBAR_Squares[i], REBAR_X_CenterCoordinates[i]).sort(compareTwoPointsByName);

    totalDiagram_N = addDiagram(totalDiagram_N, N_diagram);
    totalDiagram_Mx = addDiagram(totalDiagram_Mx, Mx_diagram);
    totalDiagram_My = addDiagram(totalDiagram_My, My_diagram);
}


function compareTwoPointsByName(a, b) {
    if (a[0] === b[0]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
}

console.log('totalDiagram_N');
console.log(totalDiagram_N);
console.log('totalDiagram_Mx');
console.log(totalDiagram_Mx);
console.log('totalDiagram_My');
console.log(totalDiagram_My);

var e0 = getValueFromDiagram(N, totalDiagram_N, 1, 0);
var ry = getValueFromDiagram(Mx, totalDiagram_Mx, 1, 0);
var rx = getValueFromDiagram(My, totalDiagram_My, 1, 0);

console.log('N = ', N, '  e0 = ', e0);
console.log('Mx = ', Mx, '  1/ry = ', ry);
console.log('My = ', My, '  1/rx = ', rx);

if (e0 === null || rx === null || ry === null) {
    console.log('CAPACITY IS NOT ENOUGH');
    return;
}

var RC_Strains = [];
var RC_Stresses = [];

for (var i = 0; i < RC_Squares.length; i++) {
    var e = e0 + rx * RC_X_CenterCoordinates[i] + ry * RC_Y_CenterCoordinates[i];
    RC_Strains[i] = e;


    var sigma = getValueFromDiagram(e, RC_diagram, 0, 1)
    RC_Stresses[i] = sigma;

    // console.log('RC ', i, ': ', e.toFixed(6), ' => ', (sigma/1000).toFixed(2), 'MPa');
}

var REBAR_Strains = [];
var REBAR_Stresses = [];

for (var i = 0; i < REBAR_Squares.length; i++) {
    var e = e0 + rx * REBAR_X_CenterCoordinates[i] + ry * REBAR_Y_CenterCoordinates[i];
    REBAR_Strains[i] = e;


    var sigma = getValueFromDiagram(e, REBAR_diagram, 0, 1)
    REBAR_Stresses[i] = sigma;

    // console.log('REBAR ', i, ': ', e.toFixed(6), ' => ', (sigma/1000).toFixed(2), 'MPa');
}

console.log('FINISH');

// console.log(REBAR_diagram);
// console.log(REBAR_Squares);
// console.log(REBAR_X_CenterCoordinates);
// console.log(make_M_diagram(REBAR_diagram, REBAR_Squares[0], REBAR_X_CenterCoordinates[0]));


function intersectTargetArrayWithBase(baseArrayOfPoints, targetArray) {
    var min = baseArrayOfPoints[0][0];
    var max = baseArrayOfPoints[baseArrayOfPoints.length - 1][0];

    var resultArray = [];

    for (var i = 0; i < targetArray.length; i++) {
        if (targetArray[i] > min && targetArray[i] < max) {
            resultArray.push(targetArray[i]);
        }
    }

    return resultArray;
}


function addOwnPoint(xArray, sortedArrayOfPoints) {

    var newArray = sortedArrayOfPoints.slice();
    var newX = intersectTargetArrayWithBase(sortedArrayOfPoints, xArray);

    if (newX.length === 0 || newArray.length <= 1) {
        return newArray;
    }

    var i = 1;
    while (i < newArray.length && newX.length > 0) {

        // console.log('');
        // console.log('i = ', i);
        // console.log(newArray);
        // console.log(newX);

        var x = newX[0];

        if (isSame(newArray[i][0], x)) {
            newX.shift();

        } else if (newArray[i][0] > x) {
            var y = newArray[i - 1][1] +
                (x - newArray[i - 1][0]) / (newArray[i][0] - newArray[i - 1][0])
                * (newArray[i][1] - newArray[i - 1][1]);


            newArray.splice(i, 0, [x, y]);
            newX.shift();

        } else {
            i++;
        }

    }

    // console.log('FINISH');
    return newArray;
}

function isSame(a, b, precision = 0.000001) {
    if (Math.abs(a - b) < precision) {
        // console.log(a, ' = ', b);
        return true;
    }

    // console.log(a, ' <> ', b);

    return false;
}

function getUniqueArray(arr) {

    if (arr.length < 2) {
        return arr;
    }

    var sortedArray = arr.slice().sort(compareNumbers);
    var unique = sortedArray.slice(0, 1);

    // console.log(sortedArray);
    // console.log(unique);

    for (var i = 1; i < sortedArray.length; i++) {
        if (!isSame(sortedArray[i], sortedArray[i - 1])) {
            unique.push(sortedArray[i]);
            // console.log('i = ', i, '   ', unique);
        }

    }

    return unique;
};

function compareNumbers(a, b) {
    return a - b;
};

// sorted Array must be with [0,0] point
function getValueFromDiagram(search, sortedArray, nameIndex, valueIndex) {

    if (search === 0) {
        return 0;
    }

    var zeroIndex = sortedArray.indexOfPoint([0, 0]);
    if (zeroIndex === -1) {
        return undefined;
    }

    var multiplier = 1;
    var searchArray = [];

    if (search > 0) {
        searchArray = sortedArray.slice(zeroIndex);
    } else {
        multiplier = -1;
        search *= multiplier;

        sortedArray.slice(0, zeroIndex + 1).map(function (item) {
            searchArray.unshift([item[0] * multiplier, item[1] * multiplier]);
        });
    }

    // return searchArray;

    if (searchArray.length < 2) {
        return null;
    }

    for (var i = 1; i < searchArray.length; i++) {
        if (searchArray[i][nameIndex] >= search) {

            // console.log('i = ', i);
            // console.log('[i-1] = [', searchArray[i - 1][nameIndex], ',', searchArray[i - 1][valueIndex], ']');
            // console.log('[i] = [', searchArray[i][nameIndex], ',', searchArray[i][valueIndex], ']');

            return multiplier * (searchArray[i - 1][valueIndex] +
                (search - searchArray[i - 1][nameIndex]) / (searchArray[i][nameIndex] - searchArray[i - 1][nameIndex])
                * (searchArray[i][valueIndex] - searchArray[i - 1][valueIndex]));
        }
    }

    return null;
}