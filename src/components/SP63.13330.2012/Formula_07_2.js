import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_SECTION_HEIGHT,
        CONST.VAR_SECTION_WIDTH,
        CONST.VAR_e0,
        CONST.VAR_NU
    ]
};

function calculate(obj) {
    return obj[CONST.VAR_SECTION_WIDTH] * obj[CONST.VAR_SECTION_HEIGHT] *
        (1 - (2 * obj[CONST.VAR_e0] * obj[CONST.VAR_NU]) / obj[CONST.VAR_SECTION_HEIGHT]);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}