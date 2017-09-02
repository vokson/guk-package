var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_2;

describe("СП 63.13330.2012 (изм.1) - Формула 7.2", function () {

    it("должна вернуть Ab для бетонного сечения", function () {
        expect(test_function(10, 40, 0.5, 0.01)).toBeCloseTo(399.9, 1);
        expect(test_function(1, 0.5, 10, 20)).toBeCloseTo(-399.5, 1);
    });


    it("должна вернуть NULL, если b не number", function () {
        expect(test_function(-1, 20, 30, 40)).toBe(null);
        expect(test_function("AAA", 20, 30, 40)).toBe(null);
    });

    it("должна вернуть NULL, если h не number", function () {
        expect(test_function(10, -1, 30, 40)).toBe(null);
        expect(test_function(10, 0, 30, 40)).toBe(null);
        expect(test_function(10, "AAA", 30, 40)).toBe(null);
    });

    it("должна вернуть NULL, если e0 не number", function () {
        expect(test_function(10, 20,  -1, 40)).toBe(null);
        expect(test_function(10, 20, "AAA", 40)).toBe(null);
    });

    it("должна вернуть NULL, если nu не number", function () {
        expect(test_function(10, 20, 30, -1)).toBe(null);
        expect(test_function(10, 20, 30, "AAA")).toBe(null);
    });

});