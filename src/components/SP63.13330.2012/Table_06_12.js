import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

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

let defaultValidationProperties = {"type": "number", "minimum": 0};

let schema = {
    "type": "object",
    "properties": {
        [CONST.VAR_HUMIDITY_GROUP]: {
            "oneOf": [
                {"const": CONST.HIGH_HUMIDITY},
                {"const": CONST.MIDDLE_HUMIDITY},
                {"const": CONST.LOW_HUMIDITY},
            ]
        },
        [CONST.VAR_CONCRETE_CLASS]: {
            "oneOf": [
                {"const": 'B10'},
                {"const": 'B15'},
                {"const": 'B20'},
                {"const": 'B25'},
                {"const": 'B30'},
                {"const": 'B35'},
                {"const": 'B40'},
                {"const": 'B45'},
                {"const": 'B50'},
                {"const": 'B55'},
                {"const": 'B60'},
                {"const": 'B70'},
                {"const": 'B80'},
                {"const": 'B90'},
                {"const": 'B100'},
            ]
        },

    },
    "required": [
        CONST.VAR_HUMIDITY_GROUP,
        CONST.VAR_CONCRETE_CLASS
    ]
};


function calculate(obj) {

    switch (obj[CONST.VAR_HUMIDITY_GROUP]) {
        case CONST.HIGH_HUMIDITY :
            return HIGH_HUMIDITY_VALUES[obj[CONST.VAR_CONCRETE_CLASS]];
            break;
        case CONST.MIDDLE_HUMIDITY :
            return MIDDLE_HUMIDITY_VALUES[obj[CONST.VAR_CONCRETE_CLASS]];
            break;
        case CONST.LOW_HUMIDITY :
            return LOW_HUMIDITY_VALUES[obj[CONST.VAR_CONCRETE_CLASS]];
            break;
        default:
            return null;
    }
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}