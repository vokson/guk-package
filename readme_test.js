var NORM = require('./lib/SP63.13330.2012');

console.log(NORM.table_06_1(1));
// ['B20', 'B25', 'B30', 'B35', 'B40', 'B45', 'B50', 'B55', 'B60', 'B70']

console.log(NORM.table_06_1(NORM.LIGHT_CONCRETE, 'D900'));
// ['B2,5', 'B3,5', 'B5', 'B7,5']

console.log(NORM.table_06_2(NORM.LIGHT_CONCRETE));
// ['Bt0,8', 'Bt1,2', 'Bt1,6', 'Bt2,0', 'Bt2,4', 'Bt2,8', 'Bt3,2']

console.log(NORM.table_06_3(NORM.LIGHT_CONCRETE));
// ['F25', 'F35', 'F50', 'F75', 'F100', 'F150', 'F200', 'F300', 'F400', 'F500']

console.log(NORM.table_06_4(NORM.LIGHT_CONCRETE));
// ['W2', 'W4', 'W6', 'W8', 'W10', 'W12']

console.log(NORM.table_06_5(NORM.POROUS_CONCRETE));
// ['D800', 'D900', 'D1000', 'D1100', 'D1200', 'D1300', 'D1400']

console.log(NORM.table_06_6(NORM.PRESTRESSED_CONCRETE));
// ['Sp0,6','Sp0,8', 'Sp1', 'Sp1,2', 'Sp1,5', 'Sp2', 'Sp3', 'Sp4']

console.log(NORM.table_06_7(NORM.HEAVY_CONCRETE, 'B25'));
// [18.5, 1.55]
console.log(NORM.table_06_7(NORM.LIGHT_CONCRETE, 'B15', 1.0, 1.0, true));
// [11.0, 0.88]

console.log(NORM.table_06_8(NORM.HEAVY_CONCRETE, 'B25'));
// [14.5, 1.05]
console.log(NORM.table_06_8(NORM.LIGHT_CONCRETE, 'B15', 1.0, 1.0, true));
// [8.5, 0.60]

console.log(NORM.table_06_9(NORM.PRESTRESSED_CONCRETE, 'Bt2,4'));
// 1.85

console.log(NORM.table_06_9(NORM.CELL_CONCRETE, 'Bt2,4'));
// null

console.log(NORM.table_06_10(NORM.HEAVY_CONCRETE, 'B80', NORM.HIGH_HUMIDITY, NORM.COMPRESSION));
// [0.003, 0.0038, 0.0024]
console.log(NORM.table_06_10(NORM.PRESTRESSED_CONCRETE, 'B20', NORM.LOW_HUMIDITY, NORM.TENSION));
// [0.00028, 0.00036, 0.00026]

console.log(NORM.table_06_11(NORM.HEAVY_CONCRETE, 'B15'));
// 24000
console.log(NORM.table_06_11(NORM.LIGHT_CONCRETE, 'B2,5', 'D900'));
// 4500

console.log(NORM.table_06_12('B15', NORM.HIGH_HUMIDITY));
// 2.4


var Eb = NORM.table_06_11(NORM.HEAVY_CONCRETE, 'B15');
console.log(Eb);
// 24000
var Fi = NORM.table_06_12('B15', NORM.HIGH_HUMIDITY);
console.log((Fi));
// 2.4
console.log(NORM.formula_06_3(Eb, Fi));
// 7058.8235

console.log(NORM.get3LinearDiagramForConcrete(NORM.HEAVY_CONCRETE, 'B15', 1.0, 1.0, NORM.SHORT_TERM_LOAD));
// [
// [ -0.0035, -8.5 ],
// [ -0.002, -8.5 ],
// [ -0.0002125, -5.1 ],
// [ 0, 0 ],
// [ 0.00001875, 0.45],
// [ 0.0001, 0.75 ],
// [ 0.00015, 0.75 ]
// ]
console.log(NORM.get3LinearDiagramForConcrete(NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A, 'B15', 1.0, 1.0, NORM.LONG_TERM_LOAD, NORM.LOW_HUMIDITY, true));
// [
// [ -0.0056, -8.5 ],
// [ -0.004, -8.5 ],
// [ -0.0015169230769230767, -5.1 ],
// [ 0, 0 ],
// [ 0.00010707692307692309, 0.36 ],
// [ 0.00028, 0.6 ],
// [ 0.00036, 0.6 ]
// ]

console.log(NORM.get2LinearDiagramForConcrete(NORM.HEAVY_CONCRETE, 'B15', 1.0, 1.0, NORM.SHORT_TERM_LOAD));
// [
// [ -0.0035, -8.5 ],
// [ -0.0015, -8.5 ],
// [ 0, 0 ],
// [ 0.00008, 0.75 ],
// [ 0.00015, 0.75 ]
// ]
console.log(NORM.get2LinearDiagramForConcrete(NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A, 'B15', 1.0, 1.0, NORM.LONG_TERM_LOAD, NORM.LOW_HUMIDITY, true));
// [ 
// [ -0.0056, -8.5 ],
// [ -0.0034, -8.5 ],
// [ 0, 0 ],
// [ 0.00026, 0.6 ],
// [ 0.00036, 0.6 ] 
// ]

console.log(NORM.getYb1(NORM.LONG_TERM_LOAD, NORM.CELL_CONCRETE));
// 0.85

console.log(NORM.getYb2(true));
// 0.9

console.log(NORM.getYb3(true));
// 0.85

console.log(NORM.getYb4(NORM.CELL_CONCRETE, 15));
// 0.95

console.log(NORM.getYb5(true));
// 1.0

console.log(NORM.table_06_13('A500', 1.0));
// 500

console.log(NORM.table_06_14('A500', 1.0, NORM.SHORT_TERM_LOAD));
// [ 435, 400 ]

console.log(NORM.table_06_15('A500', 1.0));
// 300

console.log(NORM.formula_06_11(500, 200000));
// 0.0025

console.log(NORM.formula_06_12(500, 200000));
// 0.0045

console.log(NORM.clause_06_2_12('A400'));
// 200000

console.log(NORM.get2LinearDiagramForRebar('A500', 1.0, NORM.SHORT_TERM_LOAD));
// [
// [ -0.0025, -400 ],
// [ -0.002,  -400 ],
// [ 0, 0 ],
// [ 0.002175, 435 ],
// [ 0.025, 435 ]
// ]

console.log(NORM.get3LinearDiagramForRebar('A500', 1.0, NORM.SHORT_TERM_LOAD));
// [
// [ -0.015, -440 ],
// [ -0.0022, -440 ],
// [ -0.0018, -360 ],
// [ 0, 0 ],
// [ 0.0019575, 391.5 ],
// [ 0.0023925, 478.5 ],
// [ 0.015, 478.5 ]
// ]

console.log(NORM.formula_07_1(100, 20));
// 2000

console.log(NORM.formula_07_2(10, 20, 0.1, 0.2));
// 199.6

console.log(NORM.table_07_1(15.0, NORM.SHORT_TERM_LOAD));
// 0.875
console.log(NORM.table_07_1(15.0, NORM.LONG_TERM_LOAD));
// 0.8

console.log(NORM.formula_07_3(0.9, 100, 20));
// 1800

console.log(NORM.formula_07_4(10, 20, 30, 0.5, 1.5, 2.5));
// 800

console.log(NORM.formula_07_5(10, 20, 20, 2, 5));
// 2000
console.log(NORM.formula_07_5(10, 20, 6, 1, 1));
// null

console.log(NORM.formula_07_6(100, 200));
// 2

console.log(NORM.formula_07_7(100, 2));
// 246.74

console.log(NORM.formula_07_9(100, 20));
// 2000

console.log(NORM.formula_08_1(NORM.HEAVY_CONCRETE, 'B80', 0.01, 0.01));
// 0.35

console.log(NORM.formula_08_2(10, 200));
// 0.05

console.log(NORM.formula_08_4(100, 200, 5, 20, 45, 25, 5));
// 1665000

console.log(NORM.formula_08_5(100, 10, 100, 5, 10, 3));
// 16.6666..
