var MECH = require('../lib/MechanicModule');
var test_function = MECH.getAbscissByOrdinate;

var test_array = [
    [-20, -10],
    [-10, 10],
    [-5, 0],
    [0, 5],
    [5, 10],
    [10, 10],
    [20, 15]
];

describe("Mechanic Module  - getAbscissByOrdinate", function () {

    it("должна вернуть NULL, если массив неверен", function () {
        expect(test_function(0, null)).toBeNull();
        expect(test_function(0, undefined)).toBeNull();
        expect(test_function(0, 1)).toBeNull();
        expect(test_function(0, [])).toBeNull();
        expect(test_function(1, [[1, 1]])).toBeNull();
        expect(test_function(1, [[1, 1], [2,2]])).toBeNull();
    });

    it("должна вернуть NULL, если координата неверна", function () {
        expect(test_function(null, test_array)).toBeNull();
        expect(test_function(undefined, test_array)).toBeNull();
        expect(test_function('AAA', test_array)).toBeNull();
        expect(test_function(16, test_array)).toBeNull();
        expect(test_function(-11, test_array)).toBeNull();
    });

    it("должна вернуть 0, если y = 5", function () {
        expect(test_function(5, test_array)).toBe(0);
    });

    it("должна вернуть 1, если y = 6", function () {
        expect(test_function(6, test_array)).toBe(1);
    });

    it("должна вернуть 5, если y = 10", function () {
        expect(test_function(10, test_array)).toBe(5);
    });

    it("должна вернуть 12, если y = 11", function () {
        expect(test_function(11, test_array)).toBe(12);
    });

    it("должна вернуть 20, если y = 15", function () {
        expect(test_function(15, test_array)).toBe(20);
    });

    it("должна вернуть -1, если y = 4", function () {
        expect(test_function(4, test_array)).toBe(-1);
    });

    it("должна вернуть -5, если y = 0", function () {
        expect(test_function(0, test_array)).toBe(-5);
    });

    it("должна вернуть -15.5, если y = -1", function () {
        expect(test_function(-1, test_array)).toBe(-15.5);
    });

    it("должна вернуть -20, если y = -10", function () {
        expect(test_function(-10, test_array)).toBe(-20);
    });

});