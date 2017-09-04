var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_6;

describe("СП 63.13330.2012 (изм.1) - Формула 7.6", function () {

    it("должна вернуть nu для бетонного сечения", function () {
        expect(test_function(10, 20)).toBeCloseTo(2, 0);
    });

    it("должна вернуть NULL, если N не number", function () {
        expect(test_function(-1, 20)).toBe(null);
        expect(test_function("AAA", 20)).toBe(null);
    });

    it("должна вернуть NULL, если Ncr не number", function () {
        expect(test_function(10, 0)).toBe(null);
        expect(test_function(10, -1)).toBe(null);
        expect(test_function(10, "AAA")).toBe(null);
    });

    it("должна вернуть NULL, если знаменатель = 0", function () {
        expect(test_function(10, 10)).toBe(null);
    });

});