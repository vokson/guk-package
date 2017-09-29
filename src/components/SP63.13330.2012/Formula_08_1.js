import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {
        "type": {
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
        },
        "classname": {"type": "string"},
    },
    "required": [
        "type",
        "classname",
        "e_sel",
        "e_b2",
    ]
};

function calculate(obj) {
    var a = 0.8;

    let strengthValue = FUNC.getGradeNumberValue(obj.classname);

    if (
        (obj.type === CONST.HEAVY_CONCRETE && strengthValue >= 70) ||
        obj.type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        obj.type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        obj.type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
    ) {
        a = 0.7
    }
    return a / (1 + obj.e_sel / obj.e_b2);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}