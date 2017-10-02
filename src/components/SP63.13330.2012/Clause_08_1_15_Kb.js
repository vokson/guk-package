import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_FI_L,
        CONST.VAR_DELTA_e
    ]
};

function calculate(obj) {
    return 0.15 / obj[CONST.VAR_FI_L] / (0.3 + obj[CONST.VAR_DELTA_e]);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}