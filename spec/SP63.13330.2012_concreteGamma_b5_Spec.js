var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.getYb5;

describe("СП 63.13330.2012 (изм.1) - п.6.1.12", function () {

    it("должна вернуть 1.0 для расчетной температуры нар. воздуха в хол. период >= -40", function () {
        expect(test_function(true)).toBe(1.0);
    });

    it("должна вернуть NULL для расчетной температуры нар. воздуха в хол. период < -40", function () {
        expect(test_function(false)).toBeNull();
    });

    it("должна вернуть NULL, если исходные данные не Boolean", function () {
        expect(test_function(-1)).toBeNull();
        expect(test_function('AAA')).toBeNull();
        expect(test_function(null)).toBeNull();
    });
});