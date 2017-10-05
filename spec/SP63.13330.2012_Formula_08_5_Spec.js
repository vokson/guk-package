var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_5;

describe("СП 63.13330.2012 (изм.1) - Формула 8.5", function () {

    it("должна вернуть x", function () {
        var input = {
            [NORM.VAR_Rs]: 100,
            "As": 2,
            [NORM.VAR_Rsc]: 100,
            [NORM.VAR_As$]: 1,
            [NORM.VAR_Rb]: 10,
            [NORM.VAR_SECTION_WIDTH]: 3,
        };

        expect(test_function(input).answer).toBeCloseTo(3.3333, 4);
    });

});