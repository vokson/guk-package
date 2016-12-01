import * as CONST from './Constants';
import {default as getOrdinateByAbsciss} from './getOrdinateByAbsciss';

export default function (objArray, key) {

    let abscissArray = makeTotalAbscissArray(objArray, key);

    abscissArray.sort(function (a, b) {
        return a - b;
    });

    let uniqueArray = makeUniqueArrayFromSorted(abscissArray);
    // console.log(uniqueArray);

    let totalDiagram =sumDiagrams(uniqueArray, objArray, key);

    return totalDiagram;
}

function sumDiagrams(xArray, objArray, key) {
    let arr = xArray.map(function (x) {
        return [x, 0];
    });

    for (let i = 0; i < objArray.length; i++) {

        let obj = objArray[i];

        if (obj[CONST.IS_ALIVE] === true && obj.hasOwnProperty(key)) {
            for (let j = 0; j < arr.length; j++) {

                let additive = getOrdinateByAbsciss(arr[j][0], obj[key]);
                // console.log(additive);

                if (additive !== null) {
                    arr[j][1] = arr[j][1] + additive;

                }
            }
        }

    }

    return arr;
}

function makeTotalAbscissArray(objArray, key) {

    let arr = [];

    for (let i = 0; i < objArray.length; i++) {

        let obj = objArray[i];

        if (obj[CONST.IS_ALIVE] === true && obj.hasOwnProperty(key)) {
            arr = arr.concat(obj[key].map(function (item) {
                return item[0];
            }));
        }

    }

    return arr;
}

function makeUniqueArrayFromSorted(sortedArray) {

    let uniqueArray = [sortedArray[0]];

    if (sortedArray.length > 1) {

        let last = sortedArray[0];

        for (let i = 1; i < sortedArray.length; i++) {
            if (!isSame(sortedArray[i], last)) {
                last = sortedArray[i];
                uniqueArray.push(last);
            }
        }

    }

    return uniqueArray;
}

function isSame(a, b, precision = 0.000001) {
    if (Math.abs(a - b) < precision) {
        // console.log(a, ' = ', b);
        return true;
    }
}
