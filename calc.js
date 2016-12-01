var NORM = require('./lib/SP63.13330.2012');
var MECH = require('./lib/MechanicModule');

// Подготовка массива элементов
// Прямоугольник 400 х 600(h)
const width = 0.4; // метрах
const height = 0.6; // метрах

const width_count = 10;
const height_count = 10;

const N = 0 / 1000; //MN
const Mx = 0 / 1000 // MN*m
const My = 50 / 1000 // MN*m

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

objectCollection.push({
    'xBasePoint': 0.1,
    'yBasePoint': 0.05,
    'square': 314.2 / 1000000,
    'youngModulusRatio': Es / Eb1,
    'isAlive': true,
    'diagram': REBAR_diagram
});

objectCollection.push({
    'xBasePoint': 0.3,
    'yBasePoint': 0.05,
    'square': 314.2 / 1000000,
    'youngModulusRatio': Es / Eb1,
    'isAlive': true,
    'diagram': REBAR_diagram
});

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
            'youngModulusRatio': 1.0,
            'isAlive': true,
            'diagram': RC_diagram
        });
    }
}

// ##############################################

var deadObjectsCount = -1, count = 0;
var xGravityCenter, yGravityCenter, total_N_diagram, total_Mx_diagram, total_My_diagram;
var e0, rx, ry;

while (deadObjectsCount != count) {

    console.log('');

    deadObjectsCount = count;

    [xGravityCenter, yGravityCenter] = MECH.getCenterOfGravity(objectCollection);
    objectCollection = MECH.calculateCoordinatesAgainstCenter(objectCollection, xGravityCenter, yGravityCenter);
    objectCollection = MECH.addDiagrams(objectCollection);

// console.log(objectCollection[0]);
    console.log('Gravity Center: [', xGravityCenter.toFixed(3), ',', yGravityCenter.toFixed(3), ']');

    total_N_diagram = MECH.makeTotalDiagram(objectCollection, MECH.DIAGRAM_N);
    // console.log('N DIAGRAM:')
    // console.log(total_N_diagram);

    total_Mx_diagram = MECH.makeTotalDiagram(objectCollection, MECH.DIAGRAM_Mx);
    // console.log('Mx DIAGRAM:')
    // console.log(total_Mx_diagram);

    total_My_diagram = MECH.makeTotalDiagram(objectCollection, MECH.DIAGRAM_My);
    // console.log('My DIAGRAM:')
    // console.log(total_My_diagram);


    e0 = MECH.getAbscissByOrdinate(N, total_N_diagram);
    ry = MECH.getAbscissByOrdinate(Mx, total_Mx_diagram);
    rx = MECH.getAbscissByOrdinate(My, total_My_diagram);

    console.log('N = ', N * 1000, 'kN  e0 = ', e0);
    console.log('Mx = ', Mx * 1000, 'kN*m  1/ry = ', ry);
    console.log('My = ', My * 1000, 'kN*m  1/rx = ', rx);


    if (e0 === null || rx === null || ry === null) {
        console.log('CAPACITY IS NOT ENOUGH');
        return;
    }

    objectCollection = MECH.calculateStrainAndStress(objectCollection, e0, rx, ry);
    var [actual_N, actual_Mx, actual_My] = MECH.calculateActualForces(objectCollection);

    console.log('Rebar Stress: ', objectCollection[0]['stress'], ', ', objectCollection[1]['stress']);
    console.log('RC Bottom Stress: ', objectCollection[2]['stress']);
    console.log('RC Top Stress: ', objectCollection[1 + height_count]['stress']);

    console.log('CHECK N: ', N * 1000, ' = ', (actual_N * 1000).toFixed(2));
    console.log('CHECK Mx: ', Mx * 1000, ' = ', (actual_Mx * 1000).toFixed(2));
    console.log('CHECK My: ', My * 1000, ' = ', (actual_My * 1000).toFixed(2));

    count = MECH.countOfDeadObjects(objectCollection);
    console.log('Count of dead objects: ', count);


}

console.log('');
console.log('STRAIN MAP');
for (var j = height_count-1; j >=0; j--) {

    var s = '';
    for (var i = 0; i < width_count; i++) {
        var strain = objectCollection[2 + j * width_count + i]['strain'];
        // console.log(objectCollection[2 + j * width_count + i][MECH.BASE_DIAGRAM]);

        if (strain === null) {
            s += ' #';
        } else {
            s += ' ' + strain.toFixed(6);
        }
    }
    console.log(s);
}

console.log('');
console.log('STRESS MAP');
for (var j = height_count-1; j >=0; j--) {

    var s = '';
    for (var i = 0; i < width_count; i++) {
        var stress = objectCollection[2 + j * width_count + i]['stress'];

        if (stress === null) {
            s += ' #';
        } else {
            s += ' ' + stress.toFixed(2);
        }
    }
    console.log(s);
}
