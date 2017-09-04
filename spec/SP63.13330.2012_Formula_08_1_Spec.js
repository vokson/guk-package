var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.formula_08_1;

describe("СП 63.13330.2012 (изм.1) - Формула 8.1", function () {
    it("должна вернуть null, если тип бетона не верен", function () {
        expect(test_function(-1, 'B15', 1.0, 1.0)).toBe(null);
        expect(test_function("AAA", 'B15', 1.0, 1.0)).toBe(null);
    });

    it("должна вернуть null, если e_sel не верно", function () {
        expect(test_function(NORM.HEAVY_CONCRETE, 'B15', -1, 1.0)).toBe(null);
        expect(test_function(NORM.HEAVY_CONCRETE, 'B15', "AAA", 1.0)).toBe(null);
    });

    it("должна вернуть null, если e_b2 не верно", function () {
        expect(test_function(NORM.HEAVY_CONCRETE, 'B15', 1.0, -1)).toBe(null);
        expect(test_function(NORM.HEAVY_CONCRETE, 'B15', 1.0, "AAA")).toBe(null);
    });

    it("должна вернуть правильный ответ, если входные данные верны", function () {
        expect(test_function(NORM.HEAVY_CONCRETE, 'B15', 1.0, 1.0)).toBeCloseTo(0.4, 1);
        expect(test_function(NORM.HEAVY_CONCRETE, 'B70', 1.0, 1.0)).toBeCloseTo(0.35, 2);
        expect(test_function(NORM.HEAVY_CONCRETE, 'B80', 1.0, 1.0)).toBeCloseTo(0.35, 2);
        expect(test_function(NORM.HEAVY_CONCRETE, 'B90', 1.0, 1.0)).toBeCloseTo(0.35, 2);
        expect(test_function(NORM.HEAVY_CONCRETE, 'B100', 1.0, 1.0)).toBeCloseTo(0.35, 2);
        expect(test_function(NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A, 'B15', 1.0, 1.0)).toBeCloseTo(0.35, 2);
        expect(test_function(NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A, 'B15', 1.0, 1.0)).toBeCloseTo(0.35, 2);
        expect(test_function(NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B, 'B15', 1.0, 1.0)).toBeCloseTo(0.35, 2);
        expect(test_function(NORM.LIGHT_CONCRETE, 'B15', 1.0, 1.0)).toBeCloseTo(0.4, 1);
        expect(test_function(NORM.POROUS_CONCRETE, 'B15', 1.0, 1.0)).toBeCloseTo(0.4, 1);
        expect(test_function(NORM.CELL_AUTOCLAVE_CONCRETE, 'B15', 1.0, 1.0)).toBeCloseTo(0.4, 1);
        expect(test_function(NORM.CELL_CONCRETE, 'B15', 1.0, 1.0)).toBeCloseTo(0.4, 1);

    });


});