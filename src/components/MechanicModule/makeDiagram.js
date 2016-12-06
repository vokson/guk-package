export default function (arr, multX, multY) {

    if (multX === 0) {
        return null;
    }

    let result = arr.map(function (item) {
        return [item[0] * multX, item[1] * multY];
    });

    if (multX > 0) {
        return result;
    } else {
        return result.reverse();
    }
}