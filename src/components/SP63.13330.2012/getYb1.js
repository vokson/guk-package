import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {
        [CONST.VAR_CONCRETE_TYPE]: {
            "oneOf": [
                {"const": CONST.HEAVY_CONCRETE},
                {"const": CONST.PRESTRESSED_CONCRETE},
                {"const": CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A},
                {"const": CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A},
                {"const": CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B},
                {"const": CONST.LIGHT_CONCRETE},
                {"const": CONST.POROUS_CONCRETE},
                {"const": CONST.CELL_AUTOCLAVE_CONCRETE},
                {"const": CONST.CELL_CONCRETE},
            ]
        },
        [CONST.VAR_LOAD_TYPE]: {
            "oneOf": [
                {"const": CONST.LONG_TERM_LOAD},
                {"const": CONST.SHORT_TERM_LOAD},
            ]
        },
    },
    "required": [
        CONST.VAR_LOAD_TYPE
    ]
};

function calculate(obj) {
    if (obj[CONST.VAR_LOAD_TYPE] === CONST.SHORT_TERM_LOAD) {
        return 1.0;
    }

    if (obj[CONST.VAR_LOAD_TYPE] === CONST.LONG_TERM_LOAD) {

        if (
            obj[CONST.VAR_CONCRETE_TYPE] === CONST.HEAVY_CONCRETE ||
            obj[CONST.VAR_CONCRETE_TYPE] === CONST.LIGHT_CONCRETE ||
            obj[CONST.VAR_CONCRETE_TYPE] === CONST.PRESTRESSED_CONCRETE ||
            obj[CONST.VAR_CONCRETE_TYPE] === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
            obj[CONST.VAR_CONCRETE_TYPE] === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
            obj[CONST.VAR_CONCRETE_TYPE] === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
        ) {
            return 0.9;
        }

        if (
            obj[CONST.VAR_CONCRETE_TYPE] === CONST.CELL_CONCRETE ||
            obj[CONST.VAR_CONCRETE_TYPE] === CONST.CELL_AUTOCLAVE_CONCRETE ||
            obj[CONST.VAR_CONCRETE_TYPE] === CONST.POROUS_CONCRETE
        ) {
            return 0.85;
        }
    }

    return null;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}