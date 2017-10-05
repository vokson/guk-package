var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_3;

describe("СП 63.13330.2012 (изм.1) - Формула 7.3", function () {

    it("должна вернуть N для бетонного сечения", function () {
        var input = {
            [NORM.VAR_FI]: 0.95,
            [NORM.VAR_Rb]: 10,
            [NORM.VAR_Ab]: 2,
        };
        expect(test_function(input).answer).toBeCloseTo(19, 0);

        var input = {
            [NORM.VAR_FI]: 0.5,
            [NORM.VAR_Rb]: 0.555,
            [NORM.VAR_Ab]: 100,
        };
        expect(test_function(input).answer).toBeCloseTo(27.75, 2);
    });

});