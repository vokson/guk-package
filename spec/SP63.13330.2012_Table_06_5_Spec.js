var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_5;

describe("СП 63.13330.2012 (изм.1) - Таблица 6.5", function() {
    it("должна вернуть пустой массив для Тяжелого, Напрягающего и Мелкозернистого бетонов", function() {
        var types = [
            NORM.HEAVY_CONCRETE,
            NORM.PRESTRESSED_CONCRETE,
            NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
            NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
            NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
        ];



        types.forEach(function(type) {
            expect(test_function({
                "type": type,
            }).answer).toEqual(null);
        });
    });

    it("должна вернуть массив плотностей для Легкого бетона", function() {
        var correct = ['D800', 'D900', 'D1000', 'D1100', 'D1200', 'D1300', 'D1400',
            'D1500', 'D1600', 'D1700', 'D1800', 'D1900', 'D2000'];

        expect(test_function({
            "type": NORM.LIGHT_CONCRETE,
        }).answer).toEqual(correct);
    });

    it("должна вернуть массив плотностей для Поризованного бетона", function() {
        var correct = ['D800', 'D900', 'D1000', 'D1100', 'D1200', 'D1300', 'D1400'];

        expect(test_function({
            "type": NORM.POROUS_CONCRETE,
        }).answer).toEqual(correct);
    });

    it("должна вернуть массив плотностей для Ячеистого неавтоклавного бетона", function() {
        var correct = ['D600', 'D700', 'D800', 'D900', 'D1000', 'D1100', 'D1200'];

        expect(test_function({
            "type": NORM.CELL_CONCRETE,
        }).answer).toEqual(correct);
    });

    it("должна вернуть массив плотностей для Ячеистого автоклавного бетона", function() {
        var correct = ['D500', 'D600', 'D700', 'D800', 'D900', 'D1000', 'D1100', 'D1200'];

        expect(test_function({
            "type": NORM.CELL_AUTOCLAVE_CONCRETE,
        }).answer).toEqual(correct);
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