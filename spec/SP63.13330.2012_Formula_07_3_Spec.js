var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_3;

describe("СП 63.13330.2012 (изм.1) - Формула 7.3", function () {

    it("должна вернуть N для бетонного сечения", function () {
        var input = {
            "Fi": 0.95,
            "Rb": 10,
            "Ab": 2,
        };
        expect(test_function(input).answer).toBeCloseTo(19, 0);

        var input = {
            "Fi": 0.5,
            "Rb": 0.555,
            "Ab": 100,
        };
        expect(test_function(input).answer).toBeCloseTo(27.75, 2);
    });

});