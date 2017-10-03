import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_Rb,
        CONST.VAR_Rsc,
        CONST.VAR_As$,
        CONST.VAR_X,
        CONST.VAR_H0,
        CONST.VAR_a$,
        CONST.VAR_SECTION_WIDTH,
        CONST.VAR_T_SECTION_FLANGE_WIDTH,
        CONST.VAR_T_SECTION_FLANGE_HEIGHT
    ]
};

function calculate(obj) {
    return obj[CONST.VAR_Rb] * obj[CONST.VAR_SECTION_WIDTH] * obj[CONST.VAR_X] * (obj[CONST.VAR_H0] -
        0.5 * obj[CONST.VAR_X]) + obj[CONST.VAR_Rsc] * obj[CONST.VAR_As$] * (obj[CONST.VAR_H0] - obj[CONST.VAR_a$]) +
        obj[CONST.VAR_Rb] * (obj[CONST.VAR_T_SECTION_FLANGE_WIDTH] - obj[CONST.VAR_SECTION_WIDTH]) *
        obj[CONST.VAR_T_SECTION_FLANGE_HEIGHT] * (obj[CONST.VAR_H0] - 0.5 * obj[CONST.VAR_T_SECTION_FLANGE_HEIGHT]);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}