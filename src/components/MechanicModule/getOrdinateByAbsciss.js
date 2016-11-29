export default function (x, arraySortedByX, isInputCorrect = false) {

    const BORDER_LENGTH = 40;

    if (isInputCorrect !== true) {
        if (!isArray(arraySortedByX) || !isNumber(x) || !isNumberInsideArray(x, arraySortedByX)) {
            return null;
        }
    }

    if (arraySortedByX.length < BORDER_LENGTH) {
        return lineAlgorithm (x, arraySortedByX);
    } else {
        return bisectionAlgorithm(x, arraySortedByX);
    }

}

function lineAlgorithm(x, arr) {

    for (var i = 1; i < arr.length; i++) {
        if (arr[i][0] >= x) {
            let y0 = arr[i - 1][1];
            let deltaX = arr[i][0] - arr[i - 1][0];
            let deltaY = arr[i][1] - arr[i - 1][1];

            return y0 + (x - arr[i - 1][0]) / deltaX * deltaY;
        }
    }

    return null;
}

function bisectionAlgorithm(x, arr) {
    let i = 0, j = arr.length - 1, k;

    while (j - i > 1) {

        k = Math.floor((i + j) / 2);

        if (x === arr[k][0]) {
            return arr[k][1];
        }

        if (x < arr[k][0]) {
            j = k;
        } else {
            i = k;
        }
    }

    let y0 = arr[i][1];
    let deltaX = arr[j][0] - arr[i][0];
    let deltaY = arr[j][1] - arr[i][1];

    return y0 + (x - arr[i][0]) / deltaX * deltaY;
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

function isNumberInsideArray(number, arr) {

    if (number < arr[0][0] || number > arr[arr.length - 1][0]) {
        return false;
    }

    return true;
}
