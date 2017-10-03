import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

const LIGHT_CONCRETE_DENSITIES = [800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
const POROUS_CONCRETE_DENSITIES = [800, 900, 1000, 1100, 1200, 1300, 1400];
const CELL_CONCRETE_DENSITIES = [600, 700, 800, 900, 1000, 1100, 1200];
const CELL_AUTOCLAVE_CONCRETE_DENSITIES = [500, 600, 700, 800, 900, 1000, 1100, 1200];

let defaultValidationProperties = {"type": "number", "minimum": 0};

let schema = {
    "type": "object",
    "properties": {
        [CONST.VAR_CONCRETE_TYPE]: {
            "oneOf": [
                {"const": CONST.LIGHT_CONCRETE},
                {"const": CONST.POROUS_CONCRETE},
                {"const": CONST.CELL_AUTOCLAVE_CONCRETE},
                {"const": CONST.CELL_CONCRETE},
            ]
        },
    },
    "required": [
        CONST.VAR_CONCRETE_TYPE
    ]
};

function calculate(obj) {

    let values = [];

    if (obj[CONST.VAR_CONCRETE_TYPE] === CONST.LIGHT_CONCRETE) {
        values = LIGHT_CONCRETE_DENSITIES;
    }
    if (obj[CONST.VAR_CONCRETE_TYPE] === CONST.POROUS_CONCRETE) {
        values = POROUS_CONCRETE_DENSITIES;
    }
    if (obj[CONST.VAR_CONCRETE_TYPE] === CONST.CELL_CONCRETE) {
        values = CELL_CONCRETE_DENSITIES;
    }
    if (obj[CONST.VAR_CONCRETE_TYPE] === CONST.CELL_AUTOCLAVE_CONCRETE) {
        values = CELL_AUTOCLAVE_CONCRETE_DENSITIES;
    }

    return values.map(function (number) {
        return CONST.DENSITY_PREFIX + number.toString();
    });

}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}
