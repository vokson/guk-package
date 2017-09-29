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
                "type": type
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
                "type": type,
                "humidityPercentage": 10
            }).answer).toEqual(1.0);

            expect(test_function({
                "type": type,
                "humidityPercentage": 15
            }).answer).toEqual(0.95);

            expect(test_function({
                "type": type,
                "humidityPercentage": 25
            }).answer).toEqual(0.85);
        });
    });

    it("должна вернуть NULL, если тип бетона неверен", function () {
        expect(test_function({
            "type": -1,
        }).answer).toBeNull();

        expect(test_function({
            "type": 'AAA',
        }).answer).toBeNull();
    });

    it("должна вернуть NULL, если влажность бетона неверна", function () {
        expect(test_function({
            "type": NORM.CELL_CONCRETE,
            "humidityPercentage": -1
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.CELL_CONCRETE,
            "humidityPercentage": 101
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.CELL_CONCRETE,
            "humidityPercentage": 'AAA'
        }).answer).toBeNull();

    });
});