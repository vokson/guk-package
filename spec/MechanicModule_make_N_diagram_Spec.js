var MECH = require('../lib/MechanicModule');
var test_function = MECH.make_N_diagram;

var test_array = [
    [0, 0],
    [1, 10],
    [2, -20]
];

var correct_array = [
    [0, 0],
    [1, 20],
    [2, -40]
];

describe("Mechanic Module  - make_N_diagram", function () {

    it("правильный массив, если square = 2", function () {
        expect(test_function(test_array, 2)).toEqual(correct_array);
    });
    
});