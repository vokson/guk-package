var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_2;

describe("СП 63.13330.2012 (изм.1) - Формула 7.2", function () {

    it("должна вернуть Ab для бетонного сечения", function () {
        var input = {
            [NORM.VAR_SECTION_WIDTH]: 10,
            [NORM.VAR_SECTION_HEIGHT]: 40,
            [NORM.VAR_e0]: 0.5,
            [NORM.VAR_NU]: 0.01,
        };
        expect(test_function(input).answer).toBeCloseTo(399.9, 1);

        var input = {
            [NORM.VAR_SECTION_WIDTH]: 1,
            [NORM.VAR_SECTION_HEIGHT]: 0.5,
            [NORM.VAR_e0]: 10,
            [NORM.VAR_NU]: 20,
        };
        expect(test_function(input).answer).toBeCloseTo(-399.5, 1);
    });

});