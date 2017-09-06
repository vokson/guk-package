var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_6;

describe("СП 63.13330.2012 (изм.1) - Формула 8.6", function () {

    it("должна вернуть правильное значение", function () {
        var input = {
            "Rs": 1000,
            "As": 2,
            "Rsc": 1000,
            "A1s": 1,
            "Rb": 100,
            "b1f": 40,
            "h1f": 7,
        };

        expect(test_function(input).answer).toBeCloseTo(27000, 0);
    });

});