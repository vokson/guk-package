var MECH = require('../lib/MechanicModule');
var test_function = MECH.getOrdinateByAbsciss;

var test_array = [
    [-20, -5],
    [-10, -10],
    [0, 3],
    [10, 0],
    [20, 15]
];

describe("Mechanic Module  - getOrdinateByAbsciss", function () {

    it("должна вернуть NULL, если массив неверен", function () {
        expect(test_function(0, null)).toBeNull();
        expect(test_function(0, undefined)).toBeNull();
        expect(test_function(0, 1)).toBeNull();
        expect(test_function(0, [])).toBeNull();
        expect(test_function(1, [[1, 1]])).toBeNull();
        expect(test_function(1, [[-1, -1], [-0, 0], [1, 1]])).not.toBeNull();
        ;
    });

    it("должна вернуть NULL, если координата неверна", function () {
        expect(test_function(null, test_array)).toBeNull();
        expect(test_function(undefined, test_array)).toBeNull();
        expect(test_function('AAA', test_array)).toBeNull();
        expect(test_function(-21, test_array)).toBeNull();
        expect(test_function(21, test_array)).toBeNull();
    });

    it("должна вернуть 3, если x = 0", function () {
        expect(test_function(0, test_array)).toBe(3);
    });

    it("должна вернуть 0, если x = 10", function () {
        expect(test_function(10, test_array)).toBe(0);
    });

    it("должна вернуть -5, если x = -20", function () {
        expect(test_function(-20, test_array)).toBe(-5);
    });

    it("должна вернуть 15, если x = 20", function () {
        expect(test_function(20, test_array)).toBe(15);
    });

    it("должна вернуть 5, если x = 1.5", function () {
        expect(test_function(5, test_array)).toBe(1.5);
    });

    it("должна вернуть -6.25, если x = -17.5", function () {
        expect(test_function(-17.5, test_array)).toBe(-6.25);
    });

    it("должна вернуть 7.5, если x = 15", function () {
        expect(test_function(15, test_array)).toBe(7.5);
    });

    it("должна вернуть 1.05, если x = 0.000142", function () {
        var diagram = [
            [-0.0035, -14.5],
            [-0.002, -14.5],
            [-0.00029, -8.7],
            [0, 0],
            [0.000021, 0.63],
            [0.0001, 1.05],
            [0.00015, 1.05]
        ];
        expect(test_function(0.000142, diagram)).toBe(1.05);
    });

});