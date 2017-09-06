import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "Rs",
        "Rsc",
        "Rb",
        "As",
        "A1s",
        "b",
        "b1f",
        "h1f",
    ]
};

function calculate(obj) {
    return (obj.Rs * obj.As - obj.Rsc * obj.A1s - obj.Rb * (obj.b1f - obj.b) * obj.h1f) / (obj.Rb * obj.b);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}