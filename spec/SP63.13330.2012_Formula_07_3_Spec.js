var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_3;

describe("СП 63.13330.2012 (изм.1) - Формула 7.3", function () {

    it("должна вернуть N для бетонного сечения", function () {
        expect(test_function(0.95, 10, 2)).toBe(19);
        expect(test_function(0.5, 0.555, 100)).toBeCloseTo(27.75, 2);
    });

    it("должна вернуть NULL, если Fi не number", function () {
        expect(test_function(-1, 10, 10)).toBe(null);
        expect(test_function("AAA", 10, 10)).toBe(null);
    });

    it("должна вернуть NULL, если Rb не number", function () {
        expect(test_function(1, -1, 10)).toBe(null);
        expect(test_function(1, "AAA", 10)).toBe(null);
    });

    it("должна вернуть NULL, если Ab не number", function () {
        expect(test_function(1, 10, -1)).toBe(null);
        expect(test_function(1, 10, 'AAA')).toBe(null);
    });

});