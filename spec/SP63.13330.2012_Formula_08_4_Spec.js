var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_4;

describe("СП 63.13330.2012 (изм.1) - Формула 8.4", function () {

    it("должна вернуть Mult", function () {
        var input = {
            "Rb": 100,
            "Rsc": 200,
            "A1s": 5,
            "b": 20,
            "h0": 45,
            "x": 25,
            "a1": 5,
        };

        expect(test_function(input).answer).toBeCloseTo(1665000, 0);
    });
});