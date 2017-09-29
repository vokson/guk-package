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
        "b",
    ]
};

function calculate(obj) {
    return (obj.Rs * obj.As - obj.Rsc * obj.A1s) / (obj.Rb * obj.b);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}