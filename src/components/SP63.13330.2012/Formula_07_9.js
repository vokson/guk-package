import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_Rbt,
        CONST.VAR_SECTION_RESISTANCE_MOMENT
    ]
};

function calculate(obj) {
    return obj[CONST.VAR_Rbt] * obj[CONST.VAR_SECTION_RESISTANCE_MOMENT];
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}