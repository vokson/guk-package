import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "Fi_L",
        "delta_e",
    ]
};

function calculate(obj) {
    return 0.15 / obj.Fi_L / (0.3 + obj.delta_e);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}

