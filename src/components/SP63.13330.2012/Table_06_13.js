import * as FUNC from './Common_Functions';

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
let defaultProperties = {"Ysi": 1.0};

let schema = {
    "type": "object",
    "properties": {
        "classname": {"type": "string"},
    },
    "required": [
        "Ysi",
        "classname",
    ]
};

function calculate(obj) {

    if (Rsn.hasOwnProperty(obj.classname)) {
        return Rsn[obj.classname] * obj.Ysi;
    }

    return null;
}

export default function (json) {

    Object.keys(defaultProperties).map(function (key, index) {
        if (!(key in json)) json[key] = defaultProperties[key];
    });

    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}