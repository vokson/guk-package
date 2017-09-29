export default function (arr, square, coordinate) {

    if (coordinate === 0) {
        return null;
    }

    let result = arr.map(function (item) {
        return [item[0] / coordinate, item[1] * coordinate * square];
    });

    if (coordinate > 0) {
        return result;
    } else {
        return result.reverse();
    }
}