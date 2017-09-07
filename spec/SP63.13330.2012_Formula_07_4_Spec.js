var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_4;

describe("СП 63.13330.2012 (изм.1) - Формула 7.4", function () {

    it("должна вернуть N для бетонного сечения", function () {
        var input = {
            "Rbt": 10,
            "A": 20,
            "I": 40,
            "e0": 2,
            "nu": 1,
            "Yt": 1.5,
        };
        expect(test_function(input).answer).toBeCloseTo(400, 0);
    });

});