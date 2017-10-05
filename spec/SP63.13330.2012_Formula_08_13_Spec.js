var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_13;

describe("СП 63.13330.2012 (изм.1) - Формула 8.13", function () {

    it("должна вернуть x", function () {
        var input = {
            [NORM.VAR_N]: 500,
            [NORM.VAR_Rb]: 10,
            [NORM.VAR_Rs]: 100,
            [NORM.VAR_Rsc]: 100,
            "As": 2,
            [NORM.VAR_As$]: 1,
            [NORM.VAR_SECTION_WIDTH]: 15,
            [NORM.VAR_H0]: 45,
            "Xi_R": 0.3,
        };

        expect(test_function(input).answer).toBeCloseTo(4.74146, 5);
    });

    it("должна вернуть NULL, если знаменатель = 0", function () {
        var input = {
            [NORM.VAR_N]: 500,
            [NORM.VAR_Rb]: 10,
            [NORM.VAR_Rs]: 100,
            [NORM.VAR_Rsc]: 100,
            "As": 2,
            [NORM.VAR_As$]: 1,
            [NORM.VAR_SECTION_WIDTH]: 15,
            [NORM.VAR_H0]: 45,
            "Xi_R": 1,
        };

        expect(test_function(input).answer).toBe(null);
    });

});