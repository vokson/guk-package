var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_6;

describe("СП 63.13330.2012 (изм.1) - Формула 7.6", function () {

    it("должна вернуть nu для бетонного сечения", function () {
        var input = {
            "N": 10,
            "Ncr": 20,
        };
        expect(test_function(input).answer).toBeCloseTo(2, 0);
    });
});