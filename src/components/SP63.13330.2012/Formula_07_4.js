import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "Rbt",
        "A",
        "I",
        "e0",
        "nu",
        "Yt",
    ]
};

function calculate(obj) {
    return obj.Rbt * obj.A / (obj.A / obj.I * obj.e0 * obj.nu * obj.Yt - 1);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}