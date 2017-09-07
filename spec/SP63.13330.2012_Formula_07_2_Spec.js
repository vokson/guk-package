var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_2;

describe("СП 63.13330.2012 (изм.1) - Формула 7.2", function () {

    it("должна вернуть Ab для бетонного сечения", function () {
        var input = {
            "b": 10,
            "h": 40,
            "e0": 0.5,
            "nu": 0.01,
        };
        expect(test_function(input).answer).toBeCloseTo(399.9, 1);

        var input = {
            "b": 1,
            "h": 0.5,
            "e0": 10,
            "nu": 20,
        };
        expect(test_function(input).answer).toBeCloseTo(-399.5, 1);
    });

});