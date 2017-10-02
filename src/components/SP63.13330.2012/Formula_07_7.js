import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_D,
        CONST.VAR_L0
    ]
};

function calculate(obj) {
    return Math.pow(Math.PI, 2) * obj[CONST.VAR_D] / Math.pow(obj[CONST.VAR_L0], 2);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}