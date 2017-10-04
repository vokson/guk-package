import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

let input = [0, 6, 10, 15, 20];
let outputOther = [1.0, 0.92, 0.90, 0.83, 0.70];
let outputB60 = [1.0, 0.91, 0.89, 0.80, 0.65];
let outputB80 = [1.0, 0.90, 0.88, 0.79, 0.64];

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {
        [CONST.VAR_L0_DIVIDE_H]: {"type": "number", "minimum": 0, "maximum": 20},
        [CONST.VAR_CONCRETE_CLASS]: {
            "oneOf": [
                {"const": 'B20'},
                {"const": 'B25'},
                {"const": 'B30'},
                {"const": 'B35'},
                {"const": 'B40'},
                {"const": 'B45'},
                {"const": 'B50'},
                {"const": 'B55'},
                {"const": 'B60'},
                {"const": 'B80'},
            ]
        },
    },
    "required": [
        CONST.VAR_L0_DIVIDE_H,
        CONST.VAR_CONCRETE_CLASS
    ]
};


function calculateFi(L0_h, input, output) {
    if (L0_h == 0) return output[0];

    for (var i = 1; i < input.length; i++) {
        if (input[i] >= L0_h) {
            return FUNC.singleInterpolation(input[i - 1], input[i], output[i - 1], output[i], L0_h);
        }
    }
    ;
}

function calculate(obj) {
    if (obj[CONST.VAR_CONCRETE_CLASS] === 'B60') {
        return calculateFi(obj[CONST.VAR_L0_DIVIDE_H], input, outputB60);
    }

    if (obj[CONST.VAR_CONCRETE_CLASS] === 'B80') {
        return calculateFi(obj[CONST.VAR_L0_DIVIDE_H], input, outputB80);
    }

    return calculateFi(obj[CONST.VAR_L0_DIVIDE_H], input, outputOther);
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}