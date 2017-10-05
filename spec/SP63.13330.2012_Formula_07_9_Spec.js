var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_9;

describe("СП 63.13330.2012 (изм.1) - Формула 7.9", function () {

    it("должна вернуть M для бетонного сечения", function () {
        var input = {
            [NORM.VAR_Rbt]: 10,
            [NORM.VAR_SECTION_RESISTANCE_MOMENT]: 2,
        };
        expect(test_function(input).answer).toBeCloseTo(20, 0);

        input = {
            [NORM.VAR_Rbt]: 0.555,
            [NORM.VAR_SECTION_RESISTANCE_MOMENT]: 100,
        };
        expect(test_function(input).answer).toBeCloseTo(55.5, 1);
    });

});