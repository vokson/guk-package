export default function (y, arraySortedByX, isInputCorrect = false) {

    if (isInputCorrect !== true) {
        if (!isArray(arraySortedByX) || !isNumber(y)) {
            return null;
        }
    }

    let zeroIndex = findZeroAbsciss(arraySortedByX);

    if (zeroIndex === -1) {
        return null;
    }

    if (arraySortedByX[zeroIndex][1] === y) {
        return arraySortedByX[zeroIndex][0];
    }

    if (y > arraySortedByX[zeroIndex][1] && zeroIndex + 1 < arraySortedByX.length) {
        return findAbscissInPositivePart(y, arraySortedByX, zeroIndex);
    }

    if (y < arraySortedByX[zeroIndex][1] && zeroIndex > 0) {
        return findAbscissInNegativePart(y, arraySortedByX, zeroIndex);
    }

    return null;
}

function findZeroAbsciss(arr) {
    var i = 0, j = arr.length, k;

    while (i < j) {
        k = Math.floor((i + j) / 2);

        if (0 <= arr[k][0]) j = k;
        else i = k + 1;
    }

    if (arr[i][0] === 0) return i;     // На выходе индекс искомого элемента.
    else return -1;                 // Если искомого элемента нет в массиве, то -1.
}

function findAbscissInPositivePart(y, arr, zeroIndex) {

    for (let i = zeroIndex + 1; i < arr.length; i++) {
        if (arr[i][1] >= y) {
            let x0 = arr[i - 1][0];
            let deltaX = arr[i][0] - arr[i - 1][0];
            let deltaY = arr[i][1] - arr[i - 1][1];

            return x0 + (y - arr[i - 1][1]) / deltaY * deltaX;
        }
    }

    return null;
}

function findAbscissInNegativePart(y, arr, zeroIndex) {

    for (let i = zeroIndex - 1; i >= 0; i--) {
        if (arr[i][1] <= y) {
            let x0 = arr[i + 1][0];
            let deltaX = arr[i][0] - arr[i + 1][0];
            let deltaY = arr[i][1] - arr[i + 1][1];

            return x0 + (y - arr[i + 1][1]) / deltaY * deltaX;
        }
    }

    return null;
}


function isNumber(value) {

    if (value === null || value === undefined || typeof  value != 'number') {
        return false;
    }

    return true;
}

function isArray(arr) {

    if (Array.isArray(arr) && arr.length > 1) {
        return true;
    }

    return false;
}
