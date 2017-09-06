import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "N",
        "Rb",
        "Rs",
        "Rsc",
        "As",
        "A1s",
        "b",
    ]
};

function calculate(obj) {
    return (obj.N + obj.Rs * obj.As  - obj.Rsc * obj.A1s) / (obj.Rb * obj.b);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}