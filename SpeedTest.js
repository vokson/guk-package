var MECH = require('./lib/MechanicModule');

const COUNT = 10000, TIMES = 1;
var test_array = [];

for (var i = 0; i < COUNT; i++) {
    test_array.push([i, i * 10]);
}

console.time("getOrdinateByAbsciss");
for (var j = 0; j < TIMES; j++) {
    for (var i = 0; i < COUNT - 1; i++) {
        // console.log(MECH.getOrdinateByAbsciss(i + 0.5, test_array));
        MECH.getOrdinateByAbsciss(i + 0.5, test_array, true);

    }
}
console.timeEnd("getOrdinateByAbsciss");

console.time("getValueFromDiagram");
for (var j = 0; j < TIMES; j++) {
    for (var i = 0; i < COUNT - 1; i++) {
        // console.log(getValueFromDiagram(i + 0.5, test_array, 0, 1));
        getValueFromDiagram(i + 0.5, test_array);
    }
}
console.timeEnd("getValueFromDiagram");

function getValueFromDiagram(x, arr) {

    for (var i = 1; i < arr.length; i++) {
        if (arr[i][0] > x) {
            let y0 = arr[i - 1][1];
            let deltaX = arr[i][0] - arr[i - 1][0];
            let deltaY = arr[i][1] - arr[i - 1][1];

            return y0 + (x - arr[i - 1][0]) / deltaX * deltaY;
        }
    }
}