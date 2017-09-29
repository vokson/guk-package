import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "Rbt",
        "b",
        "h",
        "e0",
        "nu",
    ]
};

function calculate(obj) {
    return obj.Rbt * obj.b * obj.h / (6 * obj.e0 * obj.nu / obj.h - 1);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}