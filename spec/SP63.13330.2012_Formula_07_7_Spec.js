var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_7;

describe("СП 63.13330.2012 (изм.1) - Формула 7.7", function () {

    it("должна вернуть Ncr для бетонного сечения", function () {
        expect(test_function(100, 2)).toBeCloseTo(246.74, 2);
    });

    it("должна вернуть NULL, если D не number", function () {
        expect(test_function(-1, 2)).toBe(null);
        expect(test_function("AAA", 2)).toBe(null);
    });

    it("должна вернуть NULL, если L0 не number", function () {
        expect(test_function(10, 0)).toBe(null);
        expect(test_function(10, -1)).toBe(null);
        expect(test_function(10, "AAA")).toBe(null);
    });

});