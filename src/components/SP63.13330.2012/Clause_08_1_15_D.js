import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "Kb",
        "Eb",
        "Es",
        "I",
        "Is",
    ]
};

function calculate(obj) {
    return obj.Kb * obj.Eb * obj.I + 0.7 * obj.Es * obj.Is;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}

