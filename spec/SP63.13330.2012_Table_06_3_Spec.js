var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_3;

describe("СП 63.13330.2012 (изм.1) - Таблица 6.3", function () {

    it("должна вернуть массив марок по морозостойкости для Тяжелого, Напрягающего, Мелкозернистого бетона", function () {
        var types = [
            NORM.HEAVY_CONCRETE,
            NORM.PRESTRESSED_CONCRETE,
            NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
            NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
            NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
        ];

        var correct = ['F50', 'F75', 'F100', 'F150', 'F200', 'F300', 'F400', 'F500', 'F600', 'F700', 'F800', 'F1000'];

        types.forEach(function (type) {
            expect(test_function({
                "type": type,
            }).answer).toEqual(correct);
        });
    });

    it("должна вернуть массив марок по морозостойкости для Легкого бетона", function () {

        var correct = ['F25', 'F35', 'F50', 'F75', 'F100', 'F150', 'F200', 'F300', 'F400', 'F500'];

        expect(test_function({
            "type": NORM.LIGHT_CONCRETE,
        }).answer).toEqual(correct);

    });

    it("должна вернуть массив марок по морозостойкости для Поризованного, Ячеистого бетонов", function () {
        var types = [
            NORM.POROUS_CONCRETE,
            NORM.CELL_CONCRETE,
            NORM.CELL_AUTOCLAVE_CONCRETE
        ];

        var correct = ['F15', 'F25', 'F35', 'F50', 'F75', 'F100'];

        types.forEach(function (type) {
            expect(test_function({
                "type": type,
            }).answer).toEqual(correct);
        });
    });

    it("должна вернуть пустой массив, если тип бетона неверен", function () {
        expect(test_function({
            "type": -1,
        }).answer).toEqual(null);

        expect(test_function({
            "type": "AAA",
        }).answer).toEqual(null);
    });
});