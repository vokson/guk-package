export default function (arr, square, coordinate) {
    
    return arr.map(function (item) {
        return [item[0] / coordinate, item[1] * coordinate * square];
    });
    
}