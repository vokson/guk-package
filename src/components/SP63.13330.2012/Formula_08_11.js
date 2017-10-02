import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_e0,
        CONST.VAR_NU,
        CONST.VAR_H0,
        CONST.VAR_a$
    ]
};

function calculate(obj) {
    return obj[CONST.VAR_e0] * obj[CONST.VAR_NU] + (obj[CONST.VAR_H0] - obj[CONST.VAR_a$]) / 2;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}