var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_4;

describe("СП 63.13330.2012 (изм.1) - Формула 8.4", function () {

    it("должна вернуть Mult", function () {
        var input = {
            [NORM.VAR_Rb]: 100,
            [NORM.VAR_Rsc]: 200,
            [NORM.VAR_As$]: 5,
            [NORM.VAR_SECTION_WIDTH]: 20,
            [NORM.VAR_H0]: 45,
            [NORM.VAR_X]: 25,
            [NORM.VAR_a$]: 5,
        };

        expect(test_function(input).answer).toBeCloseTo(1665000, 0);
    });
});