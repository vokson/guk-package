var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.clause_08_1_15_D;

describe("СП 63.13330.2012 (изм.1) - Пункт 8.1.15", function () {

    it("должна вернуть D", function () {
        var input = {
            [NORM.VAR_Kb]: 1,
            [NORM.VAR_Eb]: 2,
            [NORM.VAR_SECTION_INERTIA_MOMENT]: 3,
            [NORM.VAR_Es]: 4,
            [NORM.VAR_REBAR_INERTIA_MOMENT]: 5,
        };

        expect(test_function(input).answer).toBeCloseTo(20, 0);
    });

});