export default function (arr, square) {
    
    return arr.map(function (item) {
        return [item[0], item[1] * square];
    });
    
}