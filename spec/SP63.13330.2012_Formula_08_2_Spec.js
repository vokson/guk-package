var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_2;

describe("СП 63.13330.2012 (изм.1) - Формула 8.2", function () {

    it("должна вернуть e_sel", function () {
        var input = {
            [NORM.VAR_Rs]: 10,
            [NORM.VAR_Es]: 200,
        };

        expect(test_function(input).answer).toBeCloseTo(0.05, 2);
    });

});