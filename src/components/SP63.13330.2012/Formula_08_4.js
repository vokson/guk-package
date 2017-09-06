import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "Rb",
        "Rsc",
        "A1s",
        "b",
        "h0",
        "x",
        "a1",
    ]
};

function calculate(obj) {
    return obj.Rb * obj.b * obj.x * (obj.h0 - 0.5 * obj.x) + obj.Rsc * obj.A1s * (obj.h0 - obj.a1);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}