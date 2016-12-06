var NORM = require('./lib/SP63.13330.2012');
var MECH = require('./lib/MechanicModule');

// Подготовка массива элементов
// Прямоугольник 400 х 600(h)
const width = 0.4; // метрах
const height = 0.6; // метрах

const width_count = 10;
const height_count = 10;
const rebar_count = 0;

const N = 0 / 1000; //MN
const Mx = 0 / 1000 // MN*m
const My = -30 / 1000 // MN*m

const concreteType = NORM.HEAVY_CONCRETE;
const concreteClass = 'B25';
const rebarClass = 'A500';
const loadType = NORM.SHORT_TERM_LOAD;
const humidity = NORM.LOW_HUMIDITY;

const Ybi = 1.0, Ybti = 1.0, Ysi = 1.0;

var Es = NORM.clause_06_2_12(rebarClass);
var Eb = NORM.table_06_11(concreteType, concreteClass);
var Eb1;

if (loadType === NORM.SHORT_TERM_LOAD) {
    Eb1 = 0.85 * Eb;
} else {
    var Fib_cr = NORM.table_06_12(concreteClass, humidity);
    Eb1 = NORM.formula_06_3(Eb, Fib_cr);
}

var RC_diagram = NORM.get3LinearDiagramForConcrete(concreteType, concreteClass, Ybi, Ybti, loadType);
var REBAR_diagram = NORM.get2LinearDiagramForRebar(rebarClass, Ysi, loadType);

console.log('RC_diagram');
console.log(RC_diagram);
console.log('REBAR_diagram');
console.log(REBAR_diagram);

// ##############################################

var objectCollection = [];

// objectCollection.push({
//     'xBasePoint': 0.1,
//     'yBasePoint': 0.05,
//     'square': 314.2 / 1000000,
//     'E': Es,
//     'youngModulusRatio': Es / Eb1,
//     'isAlive': true,
//     'diagram': REBAR_diagram
// });
//
// objectCollection.push({
//     'xBasePoint': 0.3,
//     'yBasePoint': 0.05,
//     'square': 314.2 / 1000000,
//     'E': Es,
//     'youngModulusRatio': Es / Eb1,
//     'isAlive': true,
//     'diagram': REBAR_diagram
// });

var width_pitch = width / width_count;
var height_pitch = height / height_count;


for (var j = 0; j < height_count; j++) {
    for (var i = 0; i < width_count; i++) {


        var x = (i + 0.5) * width_pitch;
        var y = (j + 0.5) * height_pitch;

        objectCollection.push({
            'xBasePoint': x,
            'yBasePoint': y,
            'square': width_pitch * height_pitch,
            'E': Eb,
            'youngModulusRatio': 1.0,
            'isAlive': true,
            'diagram': RC_diagram
        });
    }
}

// ##############################################

var [xGravityCenter, yGravityCenter] = MECH.getCenterOfGravity(objectCollection);
objectCollection = MECH.calculateCoordinatesAgainstCenter(objectCollection, xGravityCenter, yGravityCenter);

console.log('Gravity Center: [', xGravityCenter.toFixed(3), ',', yGravityCenter.toFixed(3), ']');

var e0_min = RC_diagram[0][0], e0_max = RC_diagram[RC_diagram.length - 1][0];
var rx_min = e0_min / (width / 2), rx_max = -rx_min;
var ry_min = e0_min / (height / 2), ry_max = -ry_min;

var e0_count = 1000;
rx_count = 100;
ry_count = 1000;

var e0_pitch = (e0_max - e0_min) / e0_count;
var rx_pitch = (rx_max - rx_min) / rx_count;
var ry_pitch = (ry_max - ry_min) / ry_count;

var actual_N, actual_Mx, actual_My;
var tolerance = 10000;
var forces = [], components = [];

var i = 0;
var rx =0;
for (var e0 = e0_min; e0 <= e0_max; e0 += e0_pitch) {
    // for (var rx = rx_min; rx <= rx_max; rx += rx_pitch) {
        for (var ry = ry_min; ry <= ry_max; ry += ry_pitch) {
            objectCollection = MECH.calculateStrainAndStress(objectCollection, e0, rx, ry);
            [actual_N, actual_Mx, actual_My] = MECH.calculateActualForces(objectCollection);

            var delta = Math.abs(actual_N - N) + Math.abs(actual_Mx - Mx) + Math.abs(actual_My - My);
            if (delta < tolerance) {
                forces = [actual_N, actual_Mx, actual_My];
                components = [e0, rx, ry];
                tolerance = delta;
                
                console.log("CLOSEST FORCES")
                console.log('N = ', (forces[0] * 1000).toFixed(2), 'kN  e0 = ', e0);
                console.log('Mx = ', (forces[1] * 1000).toFixed(2), 'kN*m  1/rx = ', rx);
                console.log('My = ', (forces[2] * 1000).toFixed(2), 'kN*m  1/ry = ', ry);
            }

            i++;


        }
    // }
    console.log ('DONE: ', (i*100/(e0_count*rx_count*ry_count)).toFixed(1), '%');

}


