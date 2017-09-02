var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_1;

describe("СП 63.13330.2012 (изм.1) - Формула 7.1", function () {

    it("должна вернуть N для бетонного сечения", function () {
        expect(test_function(10, 2)).toBe(20);
        expect(test_function(0.555, 100)).toBeCloseTo(55.5, 1);
    });


    it("должна вернуть NULL, если Rb не number", function () {
        expect(test_function(-1, 10)).toBe(null);
        expect(test_function("AAA", 10)).toBe(null);
    });

    it("должна вернуть NULL, если Ab не number", function () {
        expect(test_function(10, -1)).toBe(null);
        expect(test_function(10, 'AAA')).toBe(null);
    });

});