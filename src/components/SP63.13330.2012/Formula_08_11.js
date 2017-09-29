import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "e0",
        "nu",
        "h0",
        "a1",
    ]
};

function calculate(obj) {
    return obj.e0 * obj.nu + (obj.h0 - obj.a1) / 2;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}