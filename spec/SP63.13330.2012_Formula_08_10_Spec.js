var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_10;

describe("СП 63.13330.2012 (изм.1) - Формула 8.10", function () {

    it("должна вернуть x", function () {

        var input = {
            "N": 300,
            "e": 0.1,
            "Rsc": 1000,
            "A1s": 2,
            "Rb": 100,
            "b": 15,
            "x": 20,
            "h0": 45,
            "a1": 5,
        };

        expect(test_function(input).answer).toBeCloseTo(1129970, 0);
    });

});