var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_4;

describe("СП 63.13330.2012 (изм.1) - Формула 7.4", function () {

    it("должна вернуть N для бетонного сечения", function () {
        var input = {
            [NORM.VAR_Rbt]: 10,
            [NORM.VAR_SECTION_SQUARE]: 20,
            [NORM.VAR_SECTION_INERTIA_MOMENT]: 40,
            [NORM.VAR_e0]: 2,
            [NORM.VAR_NU]: 1,
            [NORM.VAR_Yt]: 1.5,
        };
        expect(test_function(input).answer).toBeCloseTo(400, 0);
    });

});