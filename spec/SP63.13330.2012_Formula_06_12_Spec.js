var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_06_12;

describe("СП 63.13330.2012 (изм.1) - Формула 6.12", function () {

    it("должна вернуть es0 для арматуры с условным пределом текучести", function () {
        var input = {
            "Rs": 10,
            "Es": 2,
        };
        expect(test_function(input).answer).toBeCloseTo(5.002, 3);

        var input = {
            "Rs": 0.5,
            "Es": 100,
        };
        expect(test_function(input).answer).toBeCloseTo(0.007, 3);
    });

});