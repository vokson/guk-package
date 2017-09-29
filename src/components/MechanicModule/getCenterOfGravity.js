import * as CONST from './Constants';

export default function (objArray) {

    let totalSquare = 0, totalSx = 0, totalSy = 0;

    for (let i = 0; i < objArray.length; i++) {

        let obj = objArray[i];

        if (obj[CONST.IS_ALIVE] === true) {

            if (
                !isNumber(obj[CONST.SQUARE], false) || !isNumber(obj[CONST.E_RATIO], false) ||
                !isNumber(obj[CONST.X_BASE_POINT]) || !isNumber(obj[CONST.Y_BASE_POINT])
            ) {
                return null;
            }

            let transformedSquare = obj[CONST.SQUARE] * obj[CONST.E_RATIO];

            totalSquare += transformedSquare;
            totalSx += transformedSquare * obj[CONST.X_BASE_POINT];
            totalSy += transformedSquare * obj[CONST.Y_BASE_POINT];
        }

    }

    if (totalSquare === 0.0) {
        return null;
    } else {
        return [totalSx / totalSquare, totalSy / totalSquare];
    }

}

function isNumber(value, mayBeNegative = true) {

    if (value === null || value === undefined || typeof  value != 'number') {
        return false;
    }

    if (!mayBeNegative && value < 0) {
        return false;
    }

    return true;
}