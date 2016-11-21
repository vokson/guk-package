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

// sorted Array must be with [0,0] point
function getValueFromDiagram(search, sortedArray, nameIndex, valueIndex) {

    var zeroIndex = sortedArray.indexOfPoint([0, 0]);
    if (zeroIndex === -1) {
        return undefined;
    }

    if (search === 0) {
        return 0;
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

            console.log('i = ', i);
            console.log('[i-1] = [', searchArray[i - 1][nameIndex], ',', searchArray[i - 1][valueIndex], ']');
            console.log('[i] = [', searchArray[i][nameIndex], ',', searchArray[i][valueIndex], ']');

            return multiplier * (searchArray[i - 1][valueIndex] +
                (search - searchArray[i - 1][nameIndex]) / (searchArray[i][nameIndex] - searchArray[i - 1][nameIndex])
                * (searchArray[i][valueIndex] - searchArray[i - 1][valueIndex]));
        }
    }

    return undefined;
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

var testArray = [
    [-50, -25],
    [-40, -5],
    [-30, -15],
    [-20, -5],
    [-10, -3],
    [0, 0],
    [10, 1.5],
    [20, 10],
    [30, 5],
    [40, 20],
    [50, 1],

];

// console.log(getValueFromDiagram(-16, testArray, 1, 0));
console.log(getUniqueArray([9, 5, 3.000001, 7, 4, 3.0000021, 9, 7, 8]));