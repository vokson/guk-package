var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_5;

describe("СП 63.13330.2012 (изм.1) - Формула 7.5", function () {

    it("должна вернуть N для бетонного сечения", function () {
        var input = {
            [NORM.VAR_Rbt]: 10,
            [NORM.VAR_SECTION_WIDTH]: 20,
            [NORM.VAR_SECTION_HEIGHT]: 20,
            [NORM.VAR_e0]: 2,
            [NORM.VAR_NU]: 5,
        };
        expect(test_function(input).answer).toBeCloseTo(2000, 0);
    });

});