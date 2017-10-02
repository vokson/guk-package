import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_FI,
        CONST.VAR_Rb,
        CONST.VAR_Ab
    ]
};

function calculate(obj) {
    return obj[CONST.VAR_FI] * obj[CONST.VAR_Rb] * obj[CONST.VAR_Ab];
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}