var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_12;

describe("СП 63.13330.2012 (изм.1) - Формула 8.12", function () {

    it("должна вернуть x", function () {
        var input = {
            "N": 500,
            "Rb": 10,
            "Rs": 100,
            "Rsc": 100,
            "As": 2,
            "A1s": 1,
            "b": 15,
        };

        expect(test_function(input).answer).toBeCloseTo(4, 0);
    });

    it("должна вернуть NULL, если знаменатель = 0", function () {
        var input = {
            "N": 500,
            "Rb": 10,
            "Rs": 100,
            "Rsc": 100,
            "As": 2,
            "A1s": 1,
            "b": 0,
        };

        expect(test_function(input).answer).toBe(null);
    });

});