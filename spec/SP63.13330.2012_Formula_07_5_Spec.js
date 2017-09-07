var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_07_5;

describe("СП 63.13330.2012 (изм.1) - Формула 7.5", function () {

    it("должна вернуть N для бетонного сечения", function () {
        var input = {
            "Rbt": 10,
            "b": 20,
            "h": 20,
            "e0": 2,
            "nu": 5,
        };
        expect(test_function(input).answer).toBeCloseTo(2000, 0);
    });

});