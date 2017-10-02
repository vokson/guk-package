import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_CONCRETE_TYPE,
        CONST.VAR_CONCRETE_CLASS,
        CONST.VAR_e_b2,
        CONST.VAR_e_sel
    ]
};

schema.properties[CONST.VAR_CONCRETE_TYPE] = {
    "oneOf": [
        {"const": CONST.HEAVY_CONCRETE},
        {"const": CONST.PRESTRESSED_CONCRETE},
        {"const": CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A},
        {"const": CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A},
        {"const": CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B},
        {"const": CONST.LIGHT_CONCRETE},
        {"const": CONST.POROUS_CONCRETE},
        {"const": CONST.CELL_AUTOCLAVE_CONCRETE},
        {"const": CONST.CELL_CONCRETE}
    ]
};
schema.properties[CONST.VAR_CONCRETE_CLASS] = {"type": "string"};

function calculate(obj) {
    var a = 0.8;

    let strengthValue = FUNC.getGradeNumberValue(obj[CONST.VAR_CONCRETE_CLASS]);

    if (
        (obj[CONST.VAR_CONCRETE_TYPE] === CONST.HEAVY_CONCRETE && strengthValue >= 70) ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
    ) {
        a = 0.7
    }
    return a / (1 + obj[CONST.VAR_e_sel] / obj[CONST.VAR_e_b2]);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}