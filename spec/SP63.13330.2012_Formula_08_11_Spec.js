var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_11;

describe("СП 63.13330.2012 (изм.1) - Формула 8.11", function () {

    it("должна вернуть e", function () {
        var input = {
            "e0": 1,
            "nu": 5,
            "h0": 40,
            "a1": 5,
        };

        expect(test_function(input).answer).toBeCloseTo(22.5, 1);
    });

});