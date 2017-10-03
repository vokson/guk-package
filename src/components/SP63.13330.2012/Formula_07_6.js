import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_N,
        CONST.VAR_Ncr
    ]
};

function calculate(obj) {
    return 1 / (1 - obj[CONST.VAR_N] / obj[CONST.VAR_Ncr]);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}