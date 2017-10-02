import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_Kb,
        CONST.VAR_Eb,
        CONST.VAR_Es,
        CONST.VAR_SECTION_INERTIA_MOMENT,
        CONST.VAR_REBAR_INERTIA_MOMENT
    ]
};

function calculate(obj) {
    return obj[CONST.VAR_Kb] * obj[CONST.VAR_Eb] * obj[CONST.VAR_SECTION_INERTIA_MOMENT] +
        0.7 * obj[CONST.VAR_Es] * obj[CONST.VAR_REBAR_INERTIA_MOMENT];
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}

