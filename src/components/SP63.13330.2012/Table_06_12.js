import * as CONST from './Constants';

const HIGH_HUMIDITY_VALUES = {
    'B10': 2.8,
    'B15': 2.4,
    'B20': 2,
    'B25': 1.8,
    'B30': 1.6,
    'B35': 1.5,
    'B40': 1.4,
    'B45': 1.3,
    'B50': 1.2,
    'B55': 1.1,
    'B60': 1,
    'B70': 1,
    'B80': 1,
    'B90': 1,
    'B100': 1
};

const MIDDLE_HUMIDITY_VALUES = {
    'B10': 3.9,
    'B15': 3.4,
    'B20': 2.8,
    'B25': 2.5,
    'B30': 2.3,
    'B35': 2.1,
    'B40': 1.9,
    'B45': 1.8,
    'B50': 1.6,
    'B55': 1.5,
    'B60': 1.4,
    'B70': 1.4,
    'B80': 1.4,
    'B90': 1.4,
    'B100': 1.4
};

const LOW_HUMIDITY_VALUES = {
    'B10': 5.6,
    'B15': 4.8,
    'B20': 4.0,
    'B25': 3.6,
    'B30': 3.2,
    'B35': 3.0,
    'B40': 2.8,
    'B45': 2.6,
    'B50': 2.4,
    'B55': 2.2,
    'B60': 2,
    'B70': 2,
    'B80': 2,
    'B90': 2,
    'B100': 2
};


export default function (classname = null, humidity = null) {

    let humidity_array = {};

    switch (humidity) {
        case CONST.HIGH_HUMIDITY :
            humidity_array = HIGH_HUMIDITY_VALUES;
            break;
        case CONST.MIDDLE_HUMIDITY :
            humidity_array = MIDDLE_HUMIDITY_VALUES;
            break;
        case CONST.LOW_HUMIDITY :
            humidity_array = LOW_HUMIDITY_VALUES;
            break;
        default:
            return null;
    }

    if (humidity_array.hasOwnProperty(classname)) {
        return humidity_array[classname];
    }

    return null;
}