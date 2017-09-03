import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

var shortTermInput = [0, 10, 20];
var shortTermOutput = [1.0, 0.90, 0.85];

var longTermInput = [0, 6, 10, 15, 20];
var longTermOutput = [1.0, 0.92, 0.9, 0.8, 0.6];

// function isLoadTypeCorrect(loadType) {
//     if (
//         loadType === CONST.SHORT_TERM_LOAD ||
//         loadType === CONST.LONG_TERM_LOAD
//     ) {
//         return true;
//     }
//
//     return false;
// }

function calculateFi(e0_h, input, output) {
    if (e0_h == 0) return output[0];

    for (var i = 1; i < input.length; i++) {
        if (input[i] >= e0_h) {
            return FUNC.singleInterpolation(input[i - 1], input[i], output[i - 1], output[i], e0_h);
        }
    }
    ;
}

export default function (e0_h = null, loadType = null) {

    if (
        typeof e0_h === "number" && e0_h >= 0 && e0_h <= 20
    ) {
        if (loadType === CONST.LONG_TERM_LOAD) {
            return calculateFi(e0_h, longTermInput, longTermOutput);
        }

        if (loadType === CONST.SHORT_TERM_LOAD) {
            return calculateFi(e0_h, shortTermInput, shortTermOutput);
        }

    }

    return null;
}