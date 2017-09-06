import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "Rs",
        "As",
        "Rsc",
        "A1s",
        "Rb",
        "b1f",
        "h1f",
    ]
};

function calculate(obj) {
    return obj.Rsc * obj.A1s + obj.Rb * obj.b1f * obj.h1f - obj.Rs * obj.As;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}