var NORM = require('./lib/SP63.13330.2012');
var test_function = NORM.get2LinearDiagramForConcrete;

var test = test_function({
    "type": NORM.HEAVY_CONCRETE,
    "classname": 'B25',
    "Ybi": 1.0,
    "Ybti": 1.0,
    "loadCondition": NORM.SHORT_TERM_LOAD,
});

console.log("TEST IS FINISHED");
console.log(test);
