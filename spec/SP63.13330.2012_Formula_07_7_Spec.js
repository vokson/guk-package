var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_7;

describe("СП 63.13330.2012 (изм.1) - Формула 7.7", function () {


    it("должна вернуть Ncr для бетонного сечения", function () {
        var input = {
            "D": 100,
            "L0": 2,
        };
        expect(test_function(input).answer).toBeCloseTo(246.74, 2);
    });

});