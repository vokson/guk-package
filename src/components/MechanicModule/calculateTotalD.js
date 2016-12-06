import * as CONST from './Constants';

export default function (objArray) {

    let D11 = 0, D12 = 0, D13 = 0, D22 = 0, D23 = 0, D33 = 0;

    for (let i = 0; i < objArray.length; i++) {

        let obj = objArray[i];

        D11 += obj[CONST.D11];
        D22 += obj[CONST.D22];
        D12 += obj[CONST.D12];
        D13 += obj[CONST.D13];
        D23 += obj[CONST.D23];
        D33 += obj[CONST.D33];
    }

    return [D11, D12, D13, D22, D23, D33];
}