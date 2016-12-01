import * as CONST from './Constants';

export default function (objArray) {

    let count = 0;

    for (let i = 0; i < objArray.length; i++) {

        if (objArray[i][CONST.IS_ALIVE] !== true) {
            count++;
        }

    }

    return count;
}
