var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.getYb4;

describe("СП 63.13330.2012 (изм.1) - п.6.1.12 г)", function () {

    it("должна вернуть 1.0 для всех бетонов, кроме Ячеистых", function () {
        var types = [
            NORM.HEAVY_CONCRETE,
            NORM.PRESTRESSED_CONCRETE,
            NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
            NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
            NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B,
            NORM.LIGHT_CONCRETE,
            NORM.POROUS_CONCRETE
        ];

        types.forEach(function (type) {
            expect(test_function({
                [NORM.VAR_CONCRETE_TYPE]: type
            }).answer).toEqual(1.0);

            expect(test_function({
                [NORM.VAR_CONCRETE_TYPE]: type,
                [NORM.VAR_CONCRETE_HUMIDITY_IN_PERCENTS]: 'AAA'
            }).answer).toEqual(1.0);
        });
    });

    it("должна вернуть Гамма_b4 для всех Ячеистых бетонов", function () {
        var types = [
            NORM.CELL_CONCRETE,
            NORM.CELL_AUTOCLAVE_CONCRETE
        ];

        types.forEach(function (type) {
            expect(test_function({
                [NORM.VAR_CONCRETE_TYPE]: type,
                [NORM.VAR_CONCRETE_HUMIDITY_IN_PERCENTS]: 10
            }).answer).toEqual(1.0);

            expect(test_function({
                [NORM.VAR_CONCRETE_TYPE]: type,
                [NORM.VAR_CONCRETE_HUMIDITY_IN_PERCENTS]: 15
            }).answer).toEqual(0.95);

            expect(test_function({
                [NORM.VAR_CONCRETE_TYPE]: type,
                [NORM.VAR_CONCRETE_HUMIDITY_IN_PERCENTS]: 25
            }).answer).toEqual(0.85);
        });
    });

    it("должна вернуть NULL, если тип бетона неверен", function () {
        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: -1,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: 'AAA',
        }).answer).toBeNull();
    });

    it("должна вернуть NULL, если влажность бетона неверна", function () {
        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: NORM.CELL_CONCRETE,
            [NORM.VAR_CONCRETE_HUMIDITY_IN_PERCENTS]: -1
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: NORM.CELL_CONCRETE,
            [NORM.VAR_CONCRETE_HUMIDITY_IN_PERCENTS]: 101
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: NORM.CELL_CONCRETE,
            [NORM.VAR_CONCRETE_HUMIDITY_IN_PERCENTS]: 'AAA'
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: NORM.CELL_CONCRETE,
            [NORM.VAR_CONCRETE_HUMIDITY_IN_PERCENTS]: null
        }).answer).toBeNull();

    });
});