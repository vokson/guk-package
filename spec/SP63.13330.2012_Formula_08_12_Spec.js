var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_12;

describe("СП 63.13330.2012 (изм.1) - Формула 8.12", function () {

    it("должна вернуть x", function () {
        var input = {
            [NORM.VAR_N]: 500,
            [NORM.VAR_Rb]: 10,
            [NORM.VAR_Rs]: 100,
            [NORM.VAR_Rsc]: 100,
            [NORM.VAR_As]: 2,
            [NORM.VAR_As$]: 1,
            [NORM.VAR_SECTION_WIDTH]: 15,
        };

        expect(test_function(input).answer).toBeCloseTo(4, 0);
    });

    it("должна вернуть NULL, если знаменатель = 0", function () {
        var input = {
            [NORM.VAR_N]: 500,
            [NORM.VAR_Rb]: 10,
            [NORM.VAR_Rs]: 100,
            [NORM.VAR_Rsc]: 100,
            [NORM.VAR_As]: 2,
            [NORM.VAR_As$]: 1,
            [NORM.VAR_SECTION_WIDTH]: 0,
        };

        expect(test_function(input).answer).toBe(null);
    });

});