var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_13;

describe("СП 63.13330.2012 (изм.1) - Формула 8.13", function () {

    it("должна вернуть x", function () {
        expect(test_function(500, 100, 2, 100, 1, 10, 15, 45, 0.3)).toBeCloseTo(4.74146, 5);
    });

    it("должна вернуть NULL, если N не number", function () {
        expect(test_function(-1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(null);
        expect(test_function("AAA", 2, 3, 4, 5, 6, 7, 8, 9)).toBe(null);
    });

    it("должна вернуть NULL, если Rs не number", function () {
        expect(test_function(1, -1, 3, 4, 5, 6, 7, 8, 9)).toBe(null);
        expect(test_function(1, "AAA", 3, 4, 5, 6, 7, 8, 9)).toBe(null);
    });

    it("должна вернуть NULL, если As не number", function () {
        expect(test_function(1, 2, -1, 4, 5, 6, 7, 8, 9)).toBe(null);
        expect(test_function(1, 2, "AAA", 4, 5, 6, 7, 8, 9)).toBe(null);
    });

    it("должна вернуть NULL, если Rsc не number", function () {
        expect(test_function(1, 2, 3, -1, 5, 6, 7, 8, 9)).toBe(null);
        expect(test_function(1, 2, 3, "AAA", 5, 6, 7, 8, 9)).toBe(null);
    });

    it("должна вернуть NULL, если A1s не number", function () {
        expect(test_function(1, 2, 3, 4, -1, 6, 7, 8, 9)).toBe(null);
        expect(test_function(1, 2, 3, 4, "AAA", 6, 7, 8, 9)).toBe(null);
    });

    it("должна вернуть NULL, если Rb не number", function () {
        expect(test_function(1, 2, 3, 4, 5, -1, 7, 8, 9)).toBe(null);
        expect(test_function(1, 2, 3, 4, 5, "AAA", 7, 8, 9)).toBe(null);
    });

    it("должна вернуть NULL, если b не number", function () {
        expect(test_function(1, 2, 3, 4, 5, 6, -1, 8, 9)).toBe(null);
        expect(test_function(1, 2, 3, 4, 5, 6, "AAA", 8, 9)).toBe(null);
    });

    it("должна вернуть NULL, если h0 не number", function () {
        expect(test_function(1, 2, 3, 4, 5, 6, 7, -1, 9)).toBe(null);
        expect(test_function(1, 2, 3, 4, 5, 6, 7, "AAA", 9)).toBe(null);
    });

    it("должна вернуть NULL, если Xi_R не number", function () {
        expect(test_function(1, 2, 3, 4, 5, 6, 7, 8, -1)).toBe(null);
        expect(test_function(1, 2, 3, 4, 5, 6, 7, 8, "AAA")).toBe(null);
    });

    it("должна вернуть NULL, если знаменатель = 0", function () {
        expect(test_function(1, 2, 3, 4, 5, 6, 7, 8, 1)).toBe(null);
    });


});