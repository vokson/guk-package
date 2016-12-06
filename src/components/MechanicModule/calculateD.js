import * as CONST from './Constants';

export default function (objArray) {

    let D11 = 0, D12 = 0, D13 = 0, D22 = 0, D23 = 0, D33 = 0;

    let arr = objArray.slice();


    for (let i = 0; i < arr.length; i++) {

        let obj = arr[i];
        if (obj[CONST.IS_ALIVE] === true) {

            if (
                !isNumber(obj[CONST.X_GRAVITY_POINT]) || !isNumber(obj[CONST.Y_GRAVITY_POINT]) || !isNumber(obj[CONST.SQUARE]) || !isNumber(obj[CONST.E]) || !isNumber(obj[CONST.NU_RATIO])
            ) {
                return null;
            }

            let x = obj[CONST.X_GRAVITY_POINT];
            let y = obj[CONST.Y_GRAVITY_POINT];
            let square = obj[CONST.SQUARE];
            let E = obj[CONST.E];
            let nu = obj[CONST.NU_RATIO];

            obj[CONST.D11] = E * square * x * x * nu;
            obj[CONST.D22] = E * square * y * y * nu;
            obj[CONST.D12] = E * square * x * y * nu;
            obj[CONST.D13] = E * square * x * nu;
            obj[CONST.D23] = E * square * y * nu;
            obj[CONST.D33] = E * square * nu;
            
            D11 += obj[CONST.D11];
            D22 += obj[CONST.D22];
            D12 += obj[CONST.D12];
            D13 += obj[CONST.D13];
            D23 += obj[CONST.D23];
            D33 += obj[CONST.D33];
        }
        
    }

    // return arr;
    return [D11, D12, D13, D22, D23, D33]

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