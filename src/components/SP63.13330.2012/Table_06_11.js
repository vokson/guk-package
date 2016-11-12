import * as CONST from './Constants';
import * as FUNC from './Common_Functions';
import {default as class_function} from './Table_06_1';

const MULTIPLIER = 1000;

const HEAVY_CONCRETE_Eb = {
    'B3,5': 9.5,
    'B5': 13,
    'B7,5': 16,
    'B10': 19,
    'B12,5': 21.5,
    'B15': 24,
    'B20': 27.5,
    'B25': 30,
    'B30': 32.5,
    'B35': 34.5,
    'B40': 36,
    'B45': 37,
    'B50': 38,
    'B55': 39,
    'B60': 39.5,
    'B70': 41,
    'B80': 42,
    'B90': 42.5,
    'B100': 43
};

const FINE_GRADE_A_CONCRETE_Eb = {
    'B3,5': 7,
    'B5': 10,
    'B7,5': 13.5,
    'B10': 15.5,
    'B12,5': 17.5,
    'B15': 19.5,
    'B20': 22,
    'B25': 24,
    'B30': 26,
    'B35': 27.5,
    'B40': 28.5
};

const FINE_GRADE_B_CONCRETE_Eb = {
    'B15': 16.5,
    'B20': 18,
    'B25': 19.5,
    'B30': 21,
    'B35': 22,
    'B40': 23,
    'B45': 23.5,
    'B50': 24,
    'B55': 24.5,
    'B60': 25
};


const LIGHT_CONCRETE_Eb = {
    'D800': {'B2,5': 4, 'B3,5': 4.5, 'B5': 5, 'B7,5': 5.5},
    'D1000': {'B2,5': 5.0, 'B3,5': 5.5, 'B5': 6.3, 'B7,5': 7.2, 'B10': 8.0, 'B12,5': 8.4},
    'D1200': {'B2,5': 6.0, 'B3,5': 6.7, 'B5': 7.6, 'B7,5': 8.7, 'B10': 9.5, 'B12,5': 10.0, 'B15': 10.5},
    'D1400': {
        'B2,5': 7.0,
        'B3,5': 7.8,
        'B5': 8.8,
        'B7,5': 10.0,
        'B10': 11.0,
        'B12,5': 11.7,
        'B15': 12.5,
        'B20': 13.5,
        'B25': 14.5,
        'B30': 15.5
    },
    'D1600': {
        'B3,5': 9.0,
        'B5': 10.,
        'B7,5': 11.5,
        'B10': 12.5,
        'B12,5': 13.2,
        'B15': 14.0,
        'B20': 15.5,
        'B25': 16.5,
        'B30': 17.5,
        'B35': 18
    },
    'D1800': {
        'B5': 11.2,
        'B7,5': 13,
        'B10': 14.0,
        'B12,5': 14.7,
        'B15': 15.5,
        'B20': 17.0,
        'B25': 18.5,
        'B30': 19.5,
        'B35': 20.5,
        'B40': 21
    },
    'D2000': {
        'B7,5': 14.5,
        'B10': 16.0,
        'B12,5': 17.0,
        'B15': 18.0,
        'B20': 19.5,
        'B25': 21.0,
        'B30': 22.0,
        'B35': 23.0,
        'B40': 23.5
    },
};

const CELL_CONCRETE_Eb = {
    'D500': {'B1,5': 1.4},
    'D600': {'B1,5': 1.7, 'B2': 1.8, 'B2,5': 2.1},
    'D700': {'B1,5': 1.9, 'B2': 2.2, 'B2,5': 2.5, 'B3,5': 2.9},
    'D800': {'B2,5': 2.9, 'B3,5': 3.4, 'B5': 4},
    'D900': {'B3,5': 3.8, 'B5': 4.5, 'B7,5': 5.5},
    'D1000': {'B5': 5, 'B7,5': 6, 'B10': 7},
    'D1100': {'B7,5': 6.8, 'B10': 7.9, 'B12,5': 8.3, 'B15': 8.6},
    'D1200': {'B10': 8.4, 'B12,5': 8.8, 'B15': 9.3}
};

function isInputCorrect(type, classname, density = null) {
    if (
        type === CONST.HEAVY_CONCRETE ||
        type === CONST.PRESTRESSED_CONCRETE ||
        type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B ||
        type === CONST.LIGHT_CONCRETE ||
        type === CONST.POROUS_CONCRETE ||
        type === CONST.CELL_CONCRETE ||
        type === CONST.CELL_AUTOCLAVE_CONCRETE
    ) {
        return !(class_function(type, density).indexOf(classname) === -1);
    }

    return false;
}

function isValueInObject(object, classname, density) {
    if (object.hasOwnProperty(density) && object[density].hasOwnProperty(classname)) {
        return true;
    }

    return false;
}

function getUpDownDensities(density) {
    let density_number = FUNC.getGradeNumberValue(density);
    return ['D' + (density_number + 100), 'D' + (density_number - 100)];

}

export default function (type = null, classname = null, density = null) {

    if (!isInputCorrect(type, classname, density)) {
        return null;
    }

    if (type === CONST.HEAVY_CONCRETE) {
        return HEAVY_CONCRETE_Eb[classname] * MULTIPLIER;
    }

    if (type === CONST.PRESTRESSED_CONCRETE) {
        return HEAVY_CONCRETE_Eb[classname] * (0.56 + 0.006 * FUNC.getGradeNumberValue(classname, 1)) * MULTIPLIER;
    }

    if (type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A) {
        return FINE_GRADE_A_CONCRETE_Eb[classname] * MULTIPLIER;
    }

    if (type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A) {
        return FINE_GRADE_A_CONCRETE_Eb[classname] * 0.89 * MULTIPLIER;
    }

    if (type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B) {
        return FINE_GRADE_B_CONCRETE_Eb[classname] * MULTIPLIER;
    }

    // *******************


    if (type === CONST.CELL_AUTOCLAVE_CONCRETE && isValueInObject(CELL_CONCRETE_Eb, classname, density)) {
        return CELL_CONCRETE_Eb[density][classname] * MULTIPLIER;
    }

    if (type === CONST.CELL_CONCRETE && isValueInObject(CELL_CONCRETE_Eb, classname, density)) {
        return CELL_CONCRETE_Eb[density][classname] * 0.8 * MULTIPLIER;
    }

    // ******************* INTERPOLATION OF DENSITY FOR LIGHT CONCRETE **************************

    if (type === CONST.LIGHT_CONCRETE || type === CONST.POROUS_CONCRETE) {

        if (isValueInObject(LIGHT_CONCRETE_Eb, classname, density)) {
            return LIGHT_CONCRETE_Eb[density][classname] * MULTIPLIER;
        }

        let [density_up, density_down] = getUpDownDensities(density);

        if (isValueInObject(LIGHT_CONCRETE_Eb, classname, density_up) && isValueInObject(LIGHT_CONCRETE_Eb, classname, density_down)) {

            return (LIGHT_CONCRETE_Eb[density_down][classname] + LIGHT_CONCRETE_Eb[density_up][classname]) / 2 * MULTIPLIER;
        }
    }

    return null;

}