import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

const Rsw = {
    'A240': 170,
    'A400': 280,
    'A500': 300,
    'B500': 300
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
        CONST.VAR_REBAR_CLASS
    ]
};

function calculate(obj) {

    if (!Rsw.hasOwnProperty(obj[CONST.VAR_REBAR_CLASS])) return null;

    return Rsw[obj[CONST.VAR_REBAR_CLASS]] * obj[CONST.VAR_Ysi];
}

export default function (json) {

    Object.keys(defaultProperties).map(function (key, index) {
        if (!(key in json)) json[key] = defaultProperties[key];
    });

    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}