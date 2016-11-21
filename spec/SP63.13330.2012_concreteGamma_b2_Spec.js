var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.concreteGamma_b2;

describe("СП 63.13330.2012 (изм.1) - п.6.1.12 б)", function () {

    it("должна вернуть 1.0 для железобетонных конструкций", function () {
        expect(test_function(false)).toBe(1.0);
    });

    it("должна вернуть 0.9 для бетонных конструкций", function () {
        expect(test_function(true)).toBe(0.9);
    });

    it("должна вернуть NULL, если исходные данные не Boolean", function () {

        expect(test_function(-1)).toBeNull();
        expect(test_function('AAA')).toBeNull();
        expect(test_function(null)).toBeNull();
    });
});