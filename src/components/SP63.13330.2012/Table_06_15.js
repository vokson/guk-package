import * as FUNC from './Common_Functions';

const Rsw = {
    'A240': 170,
    'A400': 280,
    'A500': 300,
    'B500': 300
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

    if (!Rsw.hasOwnProperty(obj.classname)) return null;

    return Rsw[obj.classname] * obj.Ysi;
}

export default function (json) {

    Object.keys(defaultProperties).map(function (key, index) {
        if (!(key in json)) json[key] = defaultProperties[key];
    });

    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}