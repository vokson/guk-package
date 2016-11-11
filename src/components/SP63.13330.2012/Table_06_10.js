import * as CONST from './Constants';
import {default as class_function} from './Table_06_1';

const VALUES = [
    [
        [0.003, 0.0042, 0.0024],
        [0.0034, 0.0048, 0.0028],
        [0.004, 0.0056, 0.0034]
    ],
    [
        [0.00021, 0.00027, 0.00019],
        [0.00024, 0.00031, 0.00022],
        [0.00028, 0.00036, 0.00026]
    ]
];

var highStrengthFactor = function (classname) {
    var s = classname.substr(1).replace(',', '.');
    var value = parseFloat(s);

    if (value >= 70) {
        return (270 - value) / 210;
    }

    return 1.0;
}

function isClassCorrect(type, classname) {
    if (
        type === CONST.HEAVY_CONCRETE ||
        type === CONST.PRESTRESSED_CONCRETE ||
        type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
    ) {
        return !(class_function(type).indexOf(classname) === -1);
    }

    return false;
}

function isHumidityCorrect(humidity) {
    if (
        humidity === CONST.HIGH_HUMIDITY ||
        humidity === CONST.MIDDLE_HUMIDITY ||
        humidity === CONST.LOW_HUMIDITY
    ) {
        return true;
    }

    return false;
}

function isStressConditionCorrect(stress) {
    if (
        stress === CONST.COMPRESSION ||
        stress === CONST.TENSION
    ) {
        return true;
    }

    return false;
}

export default function (type = null, classname = null, humidity = null, stress = null) {

    if (
        !isClassCorrect(type, classname) ||
        !isHumidityCorrect(humidity) ||
        !isStressConditionCorrect(stress)
    ) {
        return null;
    }

    let result = Array.from(VALUES[stress][humidity]);

    if (stress === CONST.COMPRESSION) {
        result[1] = result[1] * highStrengthFactor(classname);;
    }

    return result;

}