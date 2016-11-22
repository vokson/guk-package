var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.getYb1;

describe("СП 63.13330.2012 (изм.1) - п.6.1.12 а)", function () {

    it("должна вернуть 1.0 для кратковременных нагрузок", function () {
        expect(test_function(NORM.SHORT_TERM_LOAD)).toBe(1.0);
    });

    describe("длительные нагрузки: ", function () {

        it("должна вернуть 0.90 для Тяжелого, Легкого, Напрягающего, Мелкозернистого бетонов", function () {
            var types = [
                NORM.HEAVY_CONCRETE,
                NORM.LIGHT_CONCRETE,
                NORM.PRESTRESSED_CONCRETE,
                NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
                NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
                NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B

            ];

            types.forEach(function (type) {
                expect(test_function(NORM.LONG_TERM_LOAD, type)).toEqual(0.9);
            });
        });

        it("должна вернуть 0.85 для Поризованного, Ячеистого бетонов", function () {
            var types = [
                NORM.POROUS_CONCRETE,
                NORM.CELL_CONCRETE,
                NORM.CELL_AUTOCLAVE_CONCRETE
            ];

            types.forEach(function (type) {
                expect(test_function(NORM.LONG_TERM_LOAD, type)).toEqual(0.85);
            });
        });

    });

    it("должна вернуть NULL, если тип бетона неверен", function () {

        expect(test_function(NORM.LONG_TERM_LOAD,-1)).toBeNull();
        expect(test_function(NORM.LONG_TERM_LOAD,'AAA')).toBeNull();

    });

    it("должна вернуть NULL, если тип нагрузки неверен", function () {

        expect(test_function(-1)).toBeNull();
        expect(test_function('AAA')).toBeNull();

    });
});