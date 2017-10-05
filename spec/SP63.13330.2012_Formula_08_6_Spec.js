var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_6;

describe("СП 63.13330.2012 (изм.1) - Формула 8.6", function () {

    it("должна вернуть правильное значение", function () {
        var input = {
            [NORM.VAR_Rs]: 1000,
            [NORM.VAR_As]: 2,
            [NORM.VAR_Rsc]: 1000,
            [NORM.VAR_As$]: 1,
            [NORM.VAR_Rb]: 100,
            [NORM.VAR_T_SECTION_FLANGE_WIDTH]: 40,
            [NORM.VAR_T_SECTION_FLANGE_HEIGHT]: 7,
        };

        expect(test_function(input).answer).toBeCloseTo(27000, 0);
    });

});