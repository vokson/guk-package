var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_2;

describe("СП 63.13330.2012 (изм.1) - Формула 8.2", function () {

    it("должна вернуть e_sel", function () {
        expect(test_function(10, 200)).toBeCloseTo(0.05, 2);
    });

    it("должна вернуть NULL, если Rs не number", function () {
        expect(test_function(-1, 2)).toBe(null);
        expect(test_function("AAA", 2)).toBe(null);
    });

    it("должна вернуть NULL, если Es не number", function () {
        expect(test_function(1, 0)).toBe(null);
        expect(test_function(1, -1)).toBe(null);
        expect(test_function(1, "AAA")).toBe(null);
    });

});