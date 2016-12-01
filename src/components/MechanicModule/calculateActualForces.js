import * as CONST from './Constants';

export default function (objArray) {

    let N = 0, Mx = 0, My = 0;

    for (let i = 0; i < objArray.length; i++) {

        let obj = objArray[i];

        if (obj[CONST.IS_ALIVE] === true) {

            if (
                !isNumber(obj[CONST.X_GRAVITY_POINT]) || !isNumber(obj[CONST.Y_GRAVITY_POINT]) || !isNumber(obj[CONST.SQUARE]) || !isNumber(obj[CONST.STRESS])
            ) {
                return null;
            }

            let force = obj[CONST.SQUARE] * obj[CONST.STRESS]
            N += force;
            Mx += force * obj[CONST.Y_GRAVITY_POINT];
            My += force * obj[CONST.X_GRAVITY_POINT];

        }

    }

    return [N, Mx, My];

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
