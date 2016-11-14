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

console.log(NORM.table_06_7(NORM.LIGHT_CONCRETE, 'B15', true));
// [11.0, 0.88]

console.log(NORM.table_06_8(NORM.HEAVY_CONCRETE, 'B25'));
// [14.5, 1.05]

console.log(NORM.table_06_8(NORM.LIGHT_CONCRETE, 'B15', true));
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

console.log(NORM.get3LinearDiagram(NORM.HEAVY_CONCRETE, 'B15', NORM.SHORT_TERM_LOAD));
// [
// [ -0.0035, -8.5 ],
// [ -0.002, -8.5 ],
// [ -0.0002125, -5.1 ],
// [ 0, 0 ],
// [ 0.00001875, 0.45],
// [ 0.0001, 0.75 ],
// [ 0.00015, 0.75 ]
// ]
console.log(NORM.get3LinearDiagram(NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A, 'B15', NORM.LONG_TERM_LOAD, NORM.LOW_HUMIDITY, true));
// [
// [ -0.0056, -8.5 ],
// [ -0.004, -8.5 ],
// [ -0.0015169230769230767, -5.1 ],
// [ 0, 0 ],
// [ 0.00010707692307692309, 0.36 ],
// [ 0.00028, 0.6 ],
// [ 0.00036, 0.6 ]
// ]

console.log(NORM.get2LinearDiagram(NORM.HEAVY_CONCRETE, 'B15', NORM.SHORT_TERM_LOAD));
// [
// [ -0.0035, -8.5 ],
// [ -0.0015, -8.5 ],
// [ 0, 0 ],
// [ 0.00008, 0.75 ],
// [ 0.00015, 0.75 ]
// ]
console.log(NORM.get2LinearDiagram(NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A, 'B15', NORM.LONG_TERM_LOAD, NORM.LOW_HUMIDITY, true));
// [ 
// [ -0.0056, -8.5 ],
// [ -0.0034, -8.5 ],
// [ 0, 0 ],
// [ 0.00026, 0.6 ],
// [ 0.00036, 0.6 ] 
// ]
