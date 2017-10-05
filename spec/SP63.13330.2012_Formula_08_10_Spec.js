var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_10;

describe("СП 63.13330.2012 (изм.1) - Формула 8.10", function () {

    it("должна вернуть x", function () {

        var input = {
            [NORM.VAR_N]: 300,
            [NORM.VAR_e]: 0.1,
            [NORM.VAR_Rsc]: 1000,
            [NORM.VAR_As$]: 2,
            [NORM.VAR_Rb]: 100,
            [NORM.VAR_SECTION_WIDTH]: 15,
            [NORM.VAR_X]: 20,
            [NORM.VAR_H0]: 45,
            [NORM.VAR_a$]: 5,
        };

        expect(test_function(input).answer).toBeCloseTo(1129970, 0);
    });

});