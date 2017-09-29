import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "D",
        "L0",
    ]
};

function calculate(obj) {
    return Math.pow(Math.PI, 2) * obj.D / Math.pow(obj.L0, 2);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}