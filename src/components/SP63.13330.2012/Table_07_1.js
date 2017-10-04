import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

var shortTermInput = [0, 10, 20];
var shortTermOutput = [1.0, 0.90, 0.85];

var longTermInput = [0, 6, 10, 15, 20];
var longTermOutput = [1.0, 0.92, 0.9, 0.8, 0.6];

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {
        [CONST.VAR_L0_DIVIDE_H]: {"type": "number", "minimum": 0, "maximum": 20},
        [CONST.VAR_LOAD_TYPE]: {
            "oneOf": [
                {"const": CONST.LONG_TERM_LOAD},
                {"const": CONST.SHORT_TERM_LOAD},
            ]
        },
    },
    "required": [
        CONST.VAR_L0_DIVIDE_H,
        CONST.VAR_LOAD_TYPE
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
    if (obj[CONST.VAR_LOAD_TYPE] === CONST.LONG_TERM_LOAD) {
        return calculateFi(obj[CONST.VAR_L0_DIVIDE_H], longTermInput, longTermOutput);
    }

    if (obj[CONST.VAR_LOAD_TYPE] === CONST.SHORT_TERM_LOAD) {
        return calculateFi(obj[CONST.VAR_L0_DIVIDE_H], shortTermInput, shortTermOutput);
    }
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}