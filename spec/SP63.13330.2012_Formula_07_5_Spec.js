var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_5;

describe("СП 63.13330.2012 (изм.1) - Формула 7.5", function () {

    it("должна вернуть N для бетонного сечения", function () {
        expect(test_function(10, 20, 20, 2.0, 5.0)).toBeCloseTo(2000, 0);
    });

    it("должна вернуть NULL, если Rbt не number", function () {
        expect(test_function(-1, 20, 40, 2.0, 1.0)).toBe(null);
        expect(test_function("AAA", 20, 40, 2.0, 1.0)).toBe(null);
    });

    it("должна вернуть NULL, если b не number", function () {
        expect(test_function(10, -1, 40, 2.0, 1.0)).toBe(null);
        expect(test_function(10, "AAA", 40, 2.0, 1.0)).toBe(null);
    });

    it("должна вернуть NULL, если h не number", function () {
        expect(test_function(10, 20, 0, 2.0, 1.0)).toBe(null);
        expect(test_function(10, 20, -1, 2.0, 1.0)).toBe(null);
        expect(test_function(10, 20, "AAA", 2.0, 1.0)).toBe(null);
    });

    it("должна вернуть NULL, если e0 не number", function () {
        expect(test_function(10, 20, 40, -1, 1.0)).toBe(null);
        expect(test_function(10, 20, 40, "AAA", 1.0)).toBe(null);
    });

    it("должна вернуть NULL, если nu не number", function () {
        expect(test_function(10, 20, 40, 2.0, -1)).toBe(null);
        expect(test_function(10, 20, 40, 2.0, "AAA")).toBe(null);
    });

    it("должна вернуть NULL, если знаменатель = 0", function () {
        expect(test_function(10, 20, 6, 1.0, 1.0)).toBe(null);
    });

});