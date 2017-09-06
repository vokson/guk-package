var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_11;

describe("СП 63.13330.2012 (изм.1) - Формула 8.11", function () {

    it("должна вернуть e", function () {
        expect(test_function(1, 5, 40, 5)).toBeCloseTo(22.5, 2);
    });

    it("должна вернуть NULL, если e0 не number", function () {
        expect(test_function(-1, 2, 3, 4)).toBe(null);
        expect(test_function("AAA", 2, 3, 4)).toBe(null);
    });

    it("должна вернуть NULL, если nu не number", function () {
        expect(test_function(1, -1, 3, 4)).toBe(null);
        expect(test_function(1, "AAA", 3, 4)).toBe(null);
    });

    it("должна вернуть NULL, если h0 не number", function () {
        expect(test_function(1, 2, -1, 4)).toBe(null);
        expect(test_function(1, 2, "AAA", 4)).toBe(null);
    });

    it("должна вернуть NULL, если a1 не number", function () {
        expect(test_function(1, 2, 3, -1)).toBe(null);
        expect(test_function(1, 2, 3, "AAA")).toBe(null);
    });

});