var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_5;

describe("СП 63.13330.2012 (изм.1) - Формула 8.5", function () {

    it("должна вернуть x", function () {
        var input = {
            "Rs": 100,
            "As": 2,
            "Rsc": 100,
            "A1s": 1,
            "Rb": 10,
            "b": 3,
        };

        expect(test_function(input).answer).toBeCloseTo(3.3333, 4);
    });

});