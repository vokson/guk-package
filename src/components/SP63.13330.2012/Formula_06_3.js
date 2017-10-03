import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_Eb,
        CONST.VAR_FI,
    ]
};

function calculate(obj) {
    return obj[CONST.VAR_Eb] / (1 + obj[CONST.VAR_FI]);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}