import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "b",
        "h",
        "e0",
        "nu",
    ]
};

function calculate(obj) {
    return obj.b * obj.h * (1 - (2 * obj.e0 * obj.nu) / obj.h);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}