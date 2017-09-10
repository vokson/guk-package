var NORM = require('./lib/SP63.13330.2012');
var test_function = NORM.get2LinearDiagramForRebar;

var test = test_function({
    "classname": 'A500',
    "Ysi": 1.0,
    "loadType": NORM.SHORT_TERM_LOAD
});

console.log("TEST IS FINISHED");
console.log(test);
