var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_5;

describe("СП 63.13330.2012 (изм.1) - Формула 8.5", function () {

    it("должна вернуть x", function () {
        expect(test_function(100,2, 100,1, 10, 3)).toBeCloseTo(3.3333, 4);
    });

    it("должна вернуть NULL, если Rs не number", function () {
        expect(test_function(-1, 2, 3, 4, 5, 6)).toBe(null);
        expect(test_function("AAA", 2, 3, 4, 5, 6)).toBe(null);
    });

    it("должна вернуть NULL, если As не number", function () {
        expect(test_function(1, -1, 3, 4, 5, 6)).toBe(null);
        expect(test_function(1, "AAA", 3, 4, 5, 6)).toBe(null);
    });

    it("должна вернуть NULL, если Rsc не number", function () {
        expect(test_function(1, 2, -1, 4, 5, 6)).toBe(null);
        expect(test_function(1, 2, "AAA", 4, 5, 6)).toBe(null);
    });

    it("должна вернуть NULL, если A1s не number", function () {
        expect(test_function(1, 2, 3, -1,  5, 6)).toBe(null);
        expect(test_function(1, 2, 3, "AAA",  5, 6)).toBe(null);
    });

    it("должна вернуть NULL, если Rb не number", function () {
        expect(test_function(1, 2, 3, 4, 0,  6)).toBe(null);
        expect(test_function(1, 2, 3, 4, -1,  6)).toBe(null);
        expect(test_function(1, 2, 3, 4, "AAA",  6)).toBe(null);
    });

    it("должна вернуть NULL, если b не number", function () {
        expect(test_function(1, 2, 3, 4, 5, 0)).toBe(null);
        expect(test_function(1, 2, 3, 4, 5, -1)).toBe(null);
        expect(test_function(1, 2, 3, 4, 5, "AAA")).toBe(null);
    });


});