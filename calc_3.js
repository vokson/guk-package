var NORM = require('./lib/SP63.13330.2012');
var MECH = require('./lib/MechanicModule');

const maxPercentTolerance = 0.1; // in %
const maxValueTolerance = 0.1 / 1000; // in mN, mN*m

// Подготовка массива элементов
// Прямоугольник 400 х 600(h)
const width = 0.4; // метрах
const height = 0.6; // метрах

const width_count = 10;
const height_count = 10;
const rebar_count = 0;


const N = 0 / 1000; //MN
const Mx = 0 / 1000  // MN*m
const My = -30 / 1000  // MN*m

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

var RC_diagram = NORM.get3LinearDiagramForConcrete(concreteType, concreteClass, Ybi, Ybti, loadType);//.map(function (item) {
// return [item[0], item[1] * 1000];
// });
var REBAR_diagram = NORM.get2LinearDiagramForRebar(rebarClass, Ysi, loadType);//.map(function (item) {
// return [item[0], item[1] * 1000];
// });

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

// objectCollection.push({
//     'xBasePoint': 0.1,
//     'yBasePoint': 0.55,
//     'square': 314.2 / 1000000,
//     'E': Es,
//     'youngModulusRatio': Es / Eb1,
//     'isAlive': true,
//     'diagram': REBAR_diagram
// });
//
// objectCollection.push({
//     'xBasePoint': 0.3,
//     'yBasePoint': 0.55,
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

var deadObjectsCount = -1, count = 0;
var xGravityCenter, yGravityCenter;
var actual_N = N, actual_Mx = Mx, actual_My = My;
var e0 = -0.5, rx = 0.5, ry = -0.5;
var D11, D12, D13, D22, D23, D33;
var loop = 0;

while (deadObjectsCount != count) {

    loop++;

    console.log('');
    console.log('LOOP ', loop);

    deadObjectsCount = count;

    [xGravityCenter, yGravityCenter] = MECH.getCenterOfGravity(objectCollection);
    objectCollection = MECH.calculateCoordinatesAgainstCenter(objectCollection, xGravityCenter, yGravityCenter);

    console.log('Gravity Center: [', xGravityCenter.toFixed(3), ',', yGravityCenter.toFixed(3), ']');


    var iteration = 0;
    var maxIteration = 1000;

    while (
    (
        (
            !isWithinTolerance(N, actual_N, maxValueTolerance, maxPercentTolerance) || !isWithinTolerance(Mx, actual_Mx, maxValueTolerance, maxPercentTolerance) || !isWithinTolerance(My, actual_My, maxValueTolerance, maxPercentTolerance)
        )
        && (Math.abs(e0) < 1) && (Math.abs(rx) < 1) && (Math.abs(ry) < 1) && (iteration < maxIteration)
    ) || (iteration === 0)
        ) {

        iteration++;
        // console.log('');
        console.log('ITERATION ', iteration);

        objectCollection = MECH.calculateStrainAndStress(objectCollection, e0, rx, ry);

        // objectCollection = MECH.calculateD(objectCollection);
        [D11, D12, D13, D22, D23, D33] = MECH.calculateD(objectCollection);

        // console.log('D11 = ', D11);
        // console.log('D12 = ', D12);
        // console.log('D13 = ', D13);
        // console.log('D22 = ', D22);
        // console.log('D23 = ', D23);
        // console.log('D33 = ', D33);

        let det = D11 * (D22 * D33 - D23 * D23) + D12 * (D12 * D33 - D13 * D23) + D13 * (D12 * D23 - D13 * D22);
        // console.log('Matrix determinant = ', det);

        [e0, rx, ry] = MECH.calculateStrainComponents(N, Mx, My, D11, D12, D13, D22, D23, D33);
        [actual_N, actual_Mx, actual_My] = MECH.calculateActualForces(objectCollection);

        console.log('N = ', actual_N * 1000, 'kN  e0 = ', e0);
        console.log('Mx = ', actual_Mx * 1000, 'kN*m  1/rx = ', rx);
        console.log('My = ', actual_My * 1000, 'kN*m  1/ry = ', ry);

        // console.log(isWithinTolerance(N, actual_N, maxValueTolerance, maxPercentTolerance));
        // console.log(isWithinTolerance(Mx, actual_Mx, maxValueTolerance, maxPercentTolerance));
        // console.log(isWithinTolerance(My, actual_My, maxValueTolerance, maxPercentTolerance));
        //
        // let e0_flag = (Math.abs(e0) < 1);
        // let rx_flag = (Math.abs(rx) < 1);
        // let ry_flag = (Math.abs(ry) < 1);
        //
        // console.log(e0_flag);
        // console.log(rx_flag);
        // console.log(ry_flag);
//
    }

    if (e0 >= 1 || rx >= 1 || ry >= 1) {
        console.log('CAPACITY IS NOT ENOUGH');
        return;
    }

    objectCollection = MECH.calculateStrainAndStress(objectCollection, e0, rx, ry);

    console.log('');
    console.log('LOOP ', loop, ', ITERATION ', iteration);
    console.log('Rebar Stress: ', objectCollection.slice(0, rebar_count).map(function (item) {
            return item['stress'].toFixed(1);
        })
    );
    console.log('RC Bottom Stress: ', objectCollection[rebar_count + Math.floor(width_count / 2)]['stress']);
    console.log('RC Top Stress: ', objectCollection[objectCollection.length - Math.floor(width_count / 2)]['stress']);

    console.log('CHECK N: ', N * 1000, ' = ', (actual_N * 1000 ).toFixed(2), ' kN  e0 = ', e0);
    console.log('CHECK Mx: ', Mx * 1000, ' = ', (actual_Mx * 1000 ).toFixed(2), 'kN*m  1/rx = ', rx);
    console.log('CHECK My: ', My * 1000, ' = ', (actual_My * 1000 ).toFixed(2), 'kN*m  1/ry = ', ry);

    objectCollection = MECH.checkObjectsDeadOrAlive(objectCollection);
    count = MECH.countOfDeadObjects(objectCollection);
    console.log('Count of dead objects: ', count);
}

console.log('');
console.log('STRAIN MAP');
for (var j = height_count - 1; j >= 0; j--) {

    var s = '';
    for (var i = 0; i < width_count; i++) {
        var strain = objectCollection[rebar_count + j * width_count + i]['strain'];
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
for (var j = height_count - 1; j >= 0; j--) {

    var s = '';
    for (var i = 0; i < width_count; i++) {
        var stress = objectCollection[rebar_count + j * width_count + i]['stress'];
        var isAlive = objectCollection[rebar_count + j * width_count + i]['isAlive'];

        if (!isAlive) {
            s += ' #';
        } else {
            s += ' ' + stress.toFixed(2);
        }
    }
    console.log(s);
}


function isWithinTolerance(value1, value2, valueTolerance, percentTolerance) {
    let delta = Math.abs(value1 - value2);
    // console.log('deltaValue = ', delta);

    if (delta <= valueTolerance) {
        return true;
    }

    let max = Math.max(Math.abs(value1), Math.abs(value2));
    // console.log('deltaPercent = ',(delta / max) * 100);

    if (max !== 0) {

        if ((delta / max) * 100 <= percentTolerance) {
            console.log('byPercent');
            return true;
        }
    }

    return false;
}