import * as CONST from './Constants';
import {default as getOrdinateByAbsciss} from './getOrdinateByAbsciss';

export default function (objArray, e0, rx, ry) {

    if (!isNumber(e0) || !isNumber(rx) || !isNumber(ry)) {
        return null;
    }

    let arr = objArray.slice();


    for (let i = 0; i < arr.length; i++) {

        let obj = arr[i];

        if (
            !isNumber(obj[CONST.X_GRAVITY_POINT]) || !isNumber(obj[CONST.Y_GRAVITY_POINT]) || !obj.hasOwnProperty(CONST.BASE_DIAGRAM)
        ) {
            return null;
        }

        obj[CONST.STRAIN] = e0 + rx * obj[CONST.X_GRAVITY_POINT] + ry * obj[CONST.Y_GRAVITY_POINT];
        obj[CONST.STRESS] = getOrdinateByAbsciss(obj[CONST.STRAIN], obj[CONST.BASE_DIAGRAM]);

        if (obj[CONST.STRESS] === null) {
            obj[CONST.IS_ALIVE] = false;
        }

    }

    return arr;

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