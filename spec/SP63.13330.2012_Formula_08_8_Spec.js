var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_8;

describe("СП 63.13330.2012 (изм.1) - Формула 8.8", function () {

    it("должна вернуть x", function () {
        expect(test_function(1000, 4, 1000, 1, 10, 10, 40, 7)).toBeCloseTo(9, 0);
    });

    it("должна вернуть NULL, если Rs не number", function () {
        expect(test_function(-1, 2, 3, 4, 5, 6, 7, 8)).toBe(null);
        expect(test_function("AAA", 2, 3, 4, 5, 6, 7, 8)).toBe(null);
    });

    it("должна вернуть NULL, если As не number", function () {
        expect(test_function(1, -1, 3, 4, 5, 6, 7, 8)).toBe(null);
        expect(test_function(1, "AAA", 3, 4, 5, 6, 7, 8)).toBe(null);
    });

    it("должна вернуть NULL, если Rsc не number", function () {
        expect(test_function(1, 2, -1, 4, 5, 6, 7, 8)).toBe(null);
        expect(test_function(1, 2, "AAA", 4, 5, 6, 7, 8)).toBe(null);
    });

    it("должна вернуть NULL, если A1s не number", function () {
        expect(test_function(1, 2, 3, -1, 5, 6, 7, 8)).toBe(null);
        expect(test_function(1, 2, 3, "AAA", 5, 6, 7, 8)).toBe(null);
    });

    it("должна вернуть NULL, если Rb не number", function () {
        expect(test_function(1, 2, 3, 4, 0, 6, 7, 8)).toBe(null);
        expect(test_function(1, 2, 3, 4, -1, 6, 7, 8)).toBe(null);
        expect(test_function(1, 2, 3, 4, "AAA", 6, 7, 8)).toBe(null);
    });

    it("должна вернуть NULL, если b не number", function () {
        expect(test_function(1, 2, 3, 4, 5, 0, 7, 8)).toBe(null);
        expect(test_function(1, 2, 3, 4, 5, -1, 7, 8)).toBe(null);
        expect(test_function(1, 2, 3, 4, 5, "AAA", 7, 8)).toBe(null);
    });

    it("должна вернуть NULL, если b1f не number", function () {
        expect(test_function(1, 2, 3, 4, 5, 6, -1, 8)).toBe(null);
        expect(test_function(1, 2, 3, 4, 5, 6, "AAA", 8)).toBe(null);
    });

    it("должна вернуть NULL, если h1f не number", function () {
        expect(test_function(1, 2, 3, 4, 5, 6, 7, -1)).toBe(null);
        expect(test_function(1, 2, 3, 4, 5, 6, 7, "AAA")).toBe(null);
    });


});