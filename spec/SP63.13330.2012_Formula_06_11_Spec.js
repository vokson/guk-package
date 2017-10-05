var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_06_11;

describe("СП 63.13330.2012 (изм.1) - Формула 6.11", function () {

    it("должна вернуть es0 для арматуры с физическим пределом текучести", function () {
        var input = {
            [NORM.VAR_Rs]: 10,
            [NORM.VAR_Es]: 2,
        };
        expect(test_function(input).answer).toBeCloseTo(5, 0);

        var input = {
            [NORM.VAR_Rs]: 0.5,
            [NORM.VAR_Es]: 100,
        };
        expect(test_function(input).answer).toBeCloseTo(0.005, 3);
    });

    it("должна вернуть null, если знаменатель = 0", function () {
        var input = {
            [NORM.VAR_Rs]: 10,
            [NORM.VAR_Es]: 0,
        };
        expect(test_function(input).answer).toBeNull();
    });
});