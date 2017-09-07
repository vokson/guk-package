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
        "e0_h": {"type": "number", "minimum": 0, "maximum": 20},
        "loadType": {
            "oneOf": [
                {"const": CONST.LONG_TERM_LOAD},
                {"const": CONST.SHORT_TERM_LOAD},
            ]
        },
    },
    "required": [
        "e0_h",
        "loadType",
    ]
};


function calculateFi(e0_h, input, output) {
    if (e0_h == 0) return output[0];

    for (var i = 1; i < input.length; i++) {
        if (input[i] >= e0_h) {
            return FUNC.singleInterpolation(input[i - 1], input[i], output[i - 1], output[i], e0_h);
        }
    }
    ;
}

function calculate(obj) {
    if (obj.loadType === CONST.LONG_TERM_LOAD) {
        return calculateFi(obj.e0_h, longTermInput, longTermOutput);
    }

    if (obj.loadType === CONST.SHORT_TERM_LOAD) {
        return calculateFi(obj.e0_h, shortTermInput, shortTermOutput);
    }
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}