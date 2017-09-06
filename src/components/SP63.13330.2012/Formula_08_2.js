import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "Rs",
        "Es",
    ]
};

function calculate(obj) {
    return obj.Rs / obj.Es;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}