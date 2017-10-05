var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.clause_08_1_15_Kb;

describe("СП 63.13330.2012 (изм.1) - Пункт 8.1.15", function () {

    it("должна вернуть Kb", function () {
        var input = {
            [NORM.VAR_FI_L]: 1.5,
            [NORM.VAR_DELTA_e]: 0.7,
        };

        var result = test_function(input);
        if (!result.isValid) console.log(result.errors);
        expect(result.answer).toBeCloseTo(0.1, 1);
    });

});