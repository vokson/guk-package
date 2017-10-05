var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_1;

describe("СП 63.13330.2012 (изм.1) - Формула 8.1", function () {
    it("должна вернуть null, если тип бетона не верен", function () {

        var input = {
            [NORM.VAR_CONCRETE_TYPE]: -1,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };

        expect(test_function(input).answer).toBeCloseTo(null);

        input = {
            [NORM.VAR_CONCRETE_TYPE]: "AAA",
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };

        expect(test_function(input).answer).toBeCloseTo(null);
    });

    it("должна вернуть правильный ответ, если входные данные верны", function () {
        var input = {
            [NORM.VAR_CONCRETE_TYPE]: NORM.HEAVY_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.4, 1);

        var input = {
            [NORM.VAR_CONCRETE_TYPE]: NORM.HEAVY_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B70',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            [NORM.VAR_CONCRETE_TYPE]: NORM.HEAVY_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B80',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            [NORM.VAR_CONCRETE_TYPE]: NORM.HEAVY_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B90',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            [NORM.VAR_CONCRETE_TYPE]: NORM.HEAVY_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B100',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            [NORM.VAR_CONCRETE_TYPE]: NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            [NORM.VAR_CONCRETE_TYPE]: NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            [NORM.VAR_CONCRETE_TYPE]: NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.35, 2);

        var input = {
            [NORM.VAR_CONCRETE_TYPE]: NORM.LIGHT_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.4, 1);

        var input = {
            [NORM.VAR_CONCRETE_TYPE]: NORM.POROUS_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.4, 1);

        var input = {
            [NORM.VAR_CONCRETE_TYPE]: NORM.CELL_AUTOCLAVE_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.4, 1);

        var input = {
            [NORM.VAR_CONCRETE_TYPE]: NORM.CELL_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            [NORM.VAR_e_sel]: 1.0,
            [NORM.VAR_e_b2]: 1.0,
        };
        expect(test_function(input).answer).toBeCloseTo(0.4, 1);

    });


});