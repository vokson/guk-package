import * as CONST from './Constants';

export default function (objArray, gravityCenterX, gravityCenterY) {

    let arr = objArray.slice();
    
    for (let i = 0; i < arr.length; i++) {

        let obj = arr[i];

        if (obj[CONST.IS_ALIVE] === true) {

            obj[CONST.X_GRAVITY_POINT] = obj[CONST.X_BASE_POINT] - gravityCenterX;
            obj[CONST.Y_GRAVITY_POINT] = obj[CONST.Y_BASE_POINT] - gravityCenterY;
        }

    }

    return arr;
}
