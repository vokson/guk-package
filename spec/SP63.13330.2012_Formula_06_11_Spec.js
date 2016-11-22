var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_06_11;

describe("СП 63.13330.2012 (изм.1) - Формула 6.11", function () {

    it("должна вернуть es0 для арматуры с физическим пределом текучести", function () {
        expect(test_function(10, 2)).toBe(5);
        expect(test_function(0.5, 100)).toBe(0.005);
    });


    it("должна вернуть NULL, если Rs не number", function () {
        expect(test_function(-1, 10)).toBe(null);
        expect(test_function("AAA", 10)).toBe(null);
    });

    it("должна вернуть NULL, если Es неверно", function () {
        expect(test_function(10, 0)).toBe(null);
        expect(test_function(10, -1)).toBe(null);
        expect(test_function(10, 'AAA')).toBe(null);
    });

});