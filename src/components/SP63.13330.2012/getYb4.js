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
                {"const": CONST.CELL_CONCRETE},
            ]
        },
        "humidity": {"type": "number", "minimum": 0, "maximum": 100}
    },
    "required": [
        "type",
    ]
};

function calculate(obj) {
    if (
        obj.type === CONST.HEAVY_CONCRETE ||
        obj.type === CONST.PRESTRESSED_CONCRETE ||
        obj.type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        obj.type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        obj.type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B ||
        obj.type === CONST.LIGHT_CONCRETE ||
        obj.type === CONST.POROUS_CONCRETE
    ) {
        return 1.0;
    }

    if (
        (obj.type === CONST.CELL_CONCRETE || obj.type === CONST.CELL_AUTOCLAVE_CONCRETE) &&
        (obj.humidity >= 0 && obj.humidity <= 100)
    ) {
        if (obj.humidity <= 10) {
            return 1.0;
        }

        if (obj.humidity > 10 && obj.humidity < 25) {
            return 1.0 + (obj.humidity - 10) / (25 - 10) * (0.85 - 1.0);
        }

        if (obj.humidity >= 25) {
            return 0.85;
        }

    }

    return null;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}