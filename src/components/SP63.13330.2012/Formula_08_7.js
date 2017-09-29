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
        "b1f",
        "h1f",
    ]
};

function calculate(obj) {
    return obj.Rb * obj.b * obj.x * (obj.h0 - 0.5 * obj.x) + obj.Rsc * obj.A1s * (obj.h0 - obj.a1) +
        obj.Rb * (obj.b1f - obj.b) * obj.h1f * (obj.h0 - 0.5 * obj.h1f);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}