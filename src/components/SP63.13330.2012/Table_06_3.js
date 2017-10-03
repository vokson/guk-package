import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

const HEAVY_CONCRETE_MARKS = ['F50', 'F75', 'F100', 'F150', 'F200', 'F300', 'F400', 'F500', 'F600', 'F700', 'F800', 'F1000'];
const LIGHT_CONCRETE_MARKS = ['F25', 'F35', 'F50', 'F75', 'F100', 'F150', 'F200', 'F300', 'F400', 'F500'];
const POROUS_CONCRETE_MARKS = ['F15', 'F25', 'F35', 'F50', 'F75', 'F100'];

let defaultValidationProperties = {"type": "number", "minimum": 0};

let schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_CONCRETE_TYPE,
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
            {"const": CONST.CELL_CONCRETE},
        ]
};

function calculate(obj) {

    if (
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.HEAVY_CONCRETE ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.PRESTRESSED_CONCRETE ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
    ) {
        return HEAVY_CONCRETE_MARKS;
    }

    if (obj[CONST.VAR_CONCRETE_TYPE] === CONST.LIGHT_CONCRETE) {
        return LIGHT_CONCRETE_MARKS;
    }

    if (
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.CELL_CONCRETE ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.CELL_AUTOCLAVE_CONCRETE ||
        obj[CONST.VAR_CONCRETE_TYPE] === CONST.POROUS_CONCRETE
    ) {
        return POROUS_CONCRETE_MARKS;
    }

    return [];

}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}
