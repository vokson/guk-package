var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_7;

describe("СП 63.13330.2012 (изм.1) - Формула 8.7", function () {

    it("должна вернуть Mult", function () {
        var input = {
            [NORM.VAR_Rb]: 100,
            [NORM.VAR_Rsc]: 200,
            [NORM.VAR_As$]: 5,
            [NORM.VAR_SECTION_WIDTH]: 20,
            [NORM.VAR_H0]: 45,
            [NORM.VAR_X]: 15,
            [NORM.VAR_a$]: 5,
            "b1f": 50,
            "h1f": 7,
        };

        expect(test_function(input).answer).toBeCloseTo(2036500, 0);
    });

});