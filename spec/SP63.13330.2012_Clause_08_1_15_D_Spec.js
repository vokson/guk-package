var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.clause_08_1_15_D;

describe("СП 63.13330.2012 (изм.1) - Пункт 8.1.15", function () {

    it("должна вернуть D", function () {
        var input = {
            "Kb": 1,
            "Eb": 2,
            "I": 3,
            "Es": 4,
            "Is": 5,
        };

        expect(test_function(input).answer).toBeCloseTo(20, 0);
    });

});