import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "N",
        "e",
        "Rsc",
        "Rb",
        "A1s",
        "b",
        "x",
        "h0",
        "a1",
    ]
};

function calculate(obj) {
    return obj.Rb * obj.b * obj.x * (obj.h0 - 0.5 * obj.x) + obj.Rsc * obj.A1s * (obj.h0 - obj.a1) - obj.N * obj.e;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}