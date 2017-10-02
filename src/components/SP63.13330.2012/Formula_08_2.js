import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_Rs,
        CONST.VAR_Es
    ]
};

function calculate(obj) {
    return obj[CONST.VAR_Rs]/ obj[CONST.VAR_Es];
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}