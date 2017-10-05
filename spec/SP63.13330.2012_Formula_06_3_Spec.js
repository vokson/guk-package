var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_06_3;

describe("СП 63.13330.2012 (изм.1) - Формула 6.3", function () {

    it("должна вернуть начальный модуль упругости бетона при продолжительном действии нагрузки", function () {
        var input = {
            [NORM.VAR_Eb]: 10,
            [NORM.VAR_FI]: 1,
        };
        expect(test_function(input).answer).toBeCloseTo(5, 0);

        var input = {
            [NORM.VAR_Eb]: 0,
            [NORM.VAR_FI]: 1.5,
        };
        expect(test_function(input).answer).toBeCloseTo(0, 0);

        var input = {
            [NORM.VAR_Eb]: 22.2,
            [NORM.VAR_FI]: 0,
        };
        expect(test_function(input).answer).toBeCloseTo(22.2, 1);
    });

});