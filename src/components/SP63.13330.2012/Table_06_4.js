import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

const HEAVY_CONCRETE_MARKS = ['W2', 'W4', 'W6', 'W8', 'W10', 'W12', 'W14', 'W16', 'W18', 'W20'];
const LIGHT_CONCRETE_MARKS = ['W2', 'W4', 'W6', 'W8', 'W10', 'W12'];

let defaultValidationProperties = {"type": "number", "minimum": 0};

let schema = {
    "type": "object",
    "properties": {
        [CONST.VAR_CONCRETE_TYPE]: {
            "oneOf": [
                {"const": CONST.HEAVY_CONCRETE},
                {"const": CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A},
                {"const": CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A},
                {"const": CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B},
                {"const": CONST.LIGHT_CONCRETE},
            ]
        },
    },
    "required": [
        CONST.VAR_CONCRETE_TYPE
    ]
};

function calculate(obj) {

    if (obj[CONST.VAR_CONCRETE_TYPE] === CONST.LIGHT_CONCRETE) {
        return LIGHT_CONCRETE_MARKS;
    } else {
        return HEAVY_CONCRETE_MARKS;
    }

}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}
