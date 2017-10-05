var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_6;

describe("СП 63.13330.2012 (изм.1) - Формула 7.6", function () {

    it("должна вернуть nu для бетонного сечения", function () {
        var input = {
            [NORM.VAR_N]: 10,
            [NORM.VAR_Ncr]: 20,
        };
        expect(test_function(input).answer).toBeCloseTo(2, 0);
    });
});