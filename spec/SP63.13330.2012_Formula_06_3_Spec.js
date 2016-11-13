var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_06_3;

describe("СП 63.13330.2012 (изм.1) - Формула 6.3", function () {

    it("должна вернуть начальный модуль упругости бетона при продолжительном действии нагрузки", function () {
        expect(test_function(10, 1)).toBe(5);
        expect(test_function(0, 1.5)).toBe(0);
        expect(test_function(22.2, 0)).toBe(22.2);
    });


    it("должна вернуть NULL, если Eb < 0", function () {
        expect(test_function(-1, 10)).toBe(null);
    });

    it("должна вернуть NULL, если Eb не number", function () {
        expect(test_function("AAA", 10)).toBe(null);
    });

    it("должна вернуть NULL, если FIb,cr < 0", function () {
        expect(test_function(10,-0.5)).toBe(null);
    });

    it("должна вернуть NULL, если FIb,cr не number", function () {
        expect(test_function(10, "AAA")).toBe(null);
    });
});