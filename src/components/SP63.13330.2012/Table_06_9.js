import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

const HEAVY_CONCRETE_Rbt = {
    'Bt0,8': 0.62,
    'Bt1,2': 0.93,
    'Bt1,6': 1.25,
    'Bt2,0': 1.55,
    'Bt2,4': 1.85,
    'Bt2,8': 2.15,
    'Bt3,2': 2.45
};

let defaultValidationProperties = {"type": "number", "minimum": 0};
let defaultProperties = {};

let schema = {
    "type": "object",
    "properties": {
        [CONST.VAR_CONCRETE_TYPE]: {
            "oneOf": [
                {"const": CONST.HEAVY_CONCRETE},
                {"const": CONST.PRESTRESSED_CONCRETE},
                {"const": CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A},
                {"const": CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A},
                {"const": CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B},
                {"const": CONST.LIGHT_CONCRETE},
            ]
        },
        [CONST.VAR_CONCRETE_TENSION_CLASS]: {"type": "string"},
    },
    "required": [
        CONST.VAR_CONCRETE_TYPE,
        CONST.VAR_CONCRETE_TENSION_CLASS,
    ]
};

function calculate(obj) {

    if (HEAVY_CONCRETE_Rbt.hasOwnProperty(obj[CONST.VAR_CONCRETE_TENSION_CLASS])) {
        return HEAVY_CONCRETE_Rbt[obj[CONST.VAR_CONCRETE_TENSION_CLASS]];
    }
    return null;
}

export default function (json) {

    Object.keys(defaultProperties).map(function (key, index) {
        if (!(key in json)) json[key] = defaultProperties[key];
    });

    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}