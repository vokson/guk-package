var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_11;

describe("СП 63.13330.2012 (изм.1) - Формула 8.11", function () {

    it("должна вернуть e", function () {
        var input = {
            [NORM.VAR_e0]: 1,
            [NORM.VAR_NU]: 5,
            [NORM.VAR_H0]: 40,
            [NORM.VAR_a$]: 5,
        };

        expect(test_function(input).answer).toBeCloseTo(22.5, 1);
    });

});