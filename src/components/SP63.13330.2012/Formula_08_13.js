import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_N,
        CONST.VAR_Rb,
        CONST.VAR_Rs,
        CONST.VAR_Rsc,
        CONST.VAR_As,
        CONST.VAR_As$,
        CONST.VAR_SECTION_WIDTH,
        CONST.VAR_H0,
        CONST.VAR_Xi_R
    ]
};

function calculate(obj) {
    return (obj[CONST.VAR_N] + obj[CONST.VAR_Rs] * obj[CONST.VAR_As] * (1 + obj[CONST.VAR_Xi_R]) /
        (1 - obj[CONST.VAR_Xi_R]) - obj[CONST.VAR_Rsc] * obj[CONST.VAR_As$]) /
        (obj[CONST.VAR_Rb] * obj[ CONST.VAR_SECTION_WIDTH] + 2 * obj[CONST.VAR_Rs] * obj[CONST.VAR_As] /
            obj[CONST.VAR_H0] / (1 - obj[CONST.VAR_Xi_R]));
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}

