var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_1;

describe("СП 63.13330.2012 (изм.1) - Формула 8.1", function () {
    it("должна вернуть null, если тип бетона не верен", function () {

        var input = {
            "type": -1,
            "classname": 'B15',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };

        expect(test_function(input).answer).toBeCloseTo(null);

        input = {
            "type": "AAA",
            "classname": 'B15',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };

        expect(test_function(input).answer).toBeCloseTo(null);
    });

    it("должна вернуть правильный ответ, если входные данные верны", function () {
        var input = {
            "type": NORM.HEAVY_CONCRETE,
            "classname": 'B15',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.4, 1);

        var input = {
            "type": NORM.HEAVY_CONCRETE,
            "classname": 'B70',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            "type": NORM.HEAVY_CONCRETE,
            "classname": 'B80',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            "type": NORM.HEAVY_CONCRETE,
            "classname": 'B90',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            "type": NORM.HEAVY_CONCRETE,
            "classname": 'B100',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            "type": NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
            "classname": 'B15',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            "type": NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
            "classname": 'B15',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            "type": NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B,
            "classname": 'B15',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            "type": NORM.LIGHT_CONCRETE,
            "classname": 'B15',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.4, 1);

        var input = {
            "type": NORM.POROUS_CONCRETE,
            "classname": 'B15',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.4, 1);

        var input = {
            "type": NORM.CELL_AUTOCLAVE_CONCRETE,
            "classname": 'B15',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.4, 1);

        var input = {
            "type": NORM.CELL_CONCRETE,
            "classname": 'B15',
            "e_sel": 1.0,
            "e_b2": 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.4, 1);

    });


});