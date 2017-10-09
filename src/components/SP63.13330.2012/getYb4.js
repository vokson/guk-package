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
        // [CONST.VAR_CONCRETE_HUMIDITY_IN_PERCENTS]: {"type": "number", "minimum": 0, "maximum": 100}
    },
    "required": [
        CONST.VAR_CONCRETE_TYPE
    ]
};

function calculate(obj) {
    if (
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.HEAVY_CONCRETE ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.PRESTRESSED_CONCRETE ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.LIGHT_CONCRETE ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.POROUS_CONCRETE
    ) {
        return 1.0;
    }

    if (
        (obj[CONST.VAR_CONCRETE_TYPE] === CONST.CELL_CONCRETE || obj[CONST.VAR_CONCRETE_TYPE] === CONST.CELL_AUTOCLAVE_CONCRETE) &&
         Number.isFinite(obj[CONST.VAR_CONCRETE_HUMIDITY_IN_PERCENTS]) &&
        (obj[CONST.VAR_CONCRETE_HUMIDITY_IN_PERCENTS] >= 0 && obj[CONST.VAR_CONCRETE_HUMIDITY_IN_PERCENTS] <= 100)
    ) {
        if (obj[CONST.VAR_CONCRETE_HUMIDITY_IN_PERCENTS] <= 10) {
            return 1.0;
        }

        if (obj[CONST.VAR_CONCRETE_HUMIDITY_IN_PERCENTS] > 10 && obj[CONST.VAR_CONCRETE_HUMIDITY_IN_PERCENTS] < 25) {
            return 1.0 + (obj[CONST.VAR_CONCRETE_HUMIDITY_IN_PERCENTS] - 10) / (25 - 10) * (0.85 - 1.0);
        }

        if (obj[CONST.VAR_CONCRETE_HUMIDITY_IN_PERCENTS] >= 25) {
            return 0.85;
        }

    }

    return null;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}