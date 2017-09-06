var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_8;

describe("СП 63.13330.2012 (изм.1) - Формула 8.8", function () {

    it("должна вернуть x", function () {
        var input = {
            "Rs": 1000,
            "As": 4,
            "Rsc": 1000,
            "A1s": 1,
            "Rb": 10,
            "b": 10,
            "b1f": 40,
            "h1f": 7,
        };

        expect(test_function(input).answer).toBeCloseTo(9, 0);
    });

});