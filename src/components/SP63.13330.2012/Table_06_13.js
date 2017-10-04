import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

const Rsn = {
    'A240': 240,
    'A400': 400,
    'A500': 500,
    'A600': 600,
    'A800': 800,
    'A1000': 1000,
    'B500': 500,
    'Bp500': 500,
    'Bp1200': 1200,
    'Bp1300': 1300,
    'Bp1400': 1400,
    'Bp1500': 1500,
    'Bp1600': 1600,
    'K1400': 1400,
    'K1500': 1500,
    'K1600': 1600,
    'K1700': 1700
};

let defaultValidationProperties = {"type": "number", "minimum": 0};
let defaultProperties = {
    [CONST.VAR_Ysi]: 1.0
};

let schema = {
    "type": "object",
    "properties": {
        [CONST.VAR_REBAR_CLASS]: {"type": "string"},
    },
    "required": [
        CONST.VAR_Ysi,
        CONST.VAR_CONCRETE_CLASS
    ]
};

function calculate(obj) {

    if (Rsn.hasOwnProperty(obj[CONST.VAR_REBAR_CLASS])) {
        return Rsn[obj[CONST.VAR_REBAR_CLASS]] * obj[CONST.VAR_Ysi];
    }

    return null;
}

export default function (json) {

    Object.keys(defaultProperties).map(function (key, index) {
        if (!(key in json)) json[key] = defaultProperties[key];
    });

    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}