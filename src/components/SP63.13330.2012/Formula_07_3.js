import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "Fi",
        "Rb",
        "Ab",
    ]
};

function calculate(obj) {
    return obj.Fi * obj.Rb * obj.Ab;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}