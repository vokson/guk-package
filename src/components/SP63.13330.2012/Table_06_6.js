import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

const PRESTRESSED_CONCRETE_MARKS = ['Sp0,6', 'Sp0,8', 'Sp1', 'Sp1,2', 'Sp1,5', 'Sp2', 'Sp3', 'Sp4'];

let defaultValidationProperties = {"type": "number", "minimum": 0};

let schema = {
    "type": "object",
    "properties": {
        "type": {
            "oneOf": [
                {"const": CONST.PRESTRESSED_CONCRETE},
            ]
        },
    },
    "required": [
        "type",
    ]
};

function calculate(obj) {
    return PRESTRESSED_CONCRETE_MARKS;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}