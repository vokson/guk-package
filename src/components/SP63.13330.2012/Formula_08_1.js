import * as CONST from './Constants';
/*
function isTypeCorrect(type) {
    if (
        type === CONST.HEAVY_CONCRETE ||
        type === CONST.PRESTRESSED_CONCRETE ||
        type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B ||
        type === CONST.LIGHT_CONCRETE ||
        type === CONST.POROUS_CONCRETE ||
        type === CONST.CELL_AUTOCLAVE_CONCRETE ||
        type === CONST.CELL_CONCRETE
    ) {
        return true;
    }

    return false;
}


export default function (type = null, classname = null, e_sel = null, e_b2 = null) {

    if (
        isTypeCorrect(type) &&
        typeof e_sel === "number" &&
        typeof e_b2 === "number" &&
        e_sel >= 0 && e_b2 > 0
    ) {
        var a = 0.8;

        if (
            (type === CONST.HEAVY_CONCRETE &&
                (classname === 'B70' || classname === 'B80' || classname === 'B90' || classname === 'B100')
            ) ||
            type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
            type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
            type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
        ) {
            a = 0.7
        }
        return a / (1 + e_sel / e_b2);
    }

    return null;
}*/

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

    if (
        (obj.type === CONST.HEAVY_CONCRETE &&
            (obj.classname === 'B70' || obj.classname === 'B80' || obj.classname === 'B90' || obj.classname === 'B100')
        ) ||
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