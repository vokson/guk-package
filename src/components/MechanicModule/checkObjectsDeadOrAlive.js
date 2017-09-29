import * as CONST from './Constants';

export default function (objArray) {

    let arr = objArray.slice();

    for (let i = 0; i < arr.length; i++) {

        let obj = arr[i];

        if (!obj.hasOwnProperty(CONST.STRESS)) {
            return null;
        }

        if (obj[CONST.STRESS] === null) {
            obj[CONST.IS_ALIVE] = false;
        }

    }

    return arr;
}