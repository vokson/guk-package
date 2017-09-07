import * as FUNC from './Common_Functions';

const LIST_AB = ['A240', 'A400', 'A500', 'A600', 'A800', 'A1000', 'B500', 'Bp500', 'Bp1200', 'Bp1300', 'Bp1400', 'Bp1500', 'Bp1600'];
const LIST_K = ['K1400', 'K1500', 'K1600', 'K1700'];

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {
        "classname": {"type": "string"}
    },
    "required": [
        "classname"
    ]
};

function calculate(obj) {
    if (LIST_AB.indexOf(obj.classname) !== -1) {
        return 200000;
    }

    if (LIST_K.indexOf(obj.classname) !== -1) {
        return 195000;
    }

    return null;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}