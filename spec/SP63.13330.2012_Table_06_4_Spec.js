var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_4;

describe("СП 63.13330.2012 (изм.1) - Таблица 6.4", function () {

    it("должна вернуть массив марок по водонепроницаемости для Тяжелого, Мелкозернистого бетонов", function () {
        var types = [
            NORM.HEAVY_CONCRETE,
            NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
            NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
            NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
        ];

        var correct = ['W2', 'W4', 'W6', 'W8', 'W10', 'W12', 'W14', 'W16', 'W18', 'W20'];

        types.forEach(function (type) {
            expect(test_function({
                "type": type,
            }).answer).toEqual(correct);
        });
    });

    it("должна вернуть массив марок по водонепроницаемости для Легкого бетона", function () {

        var correct = ['W2', 'W4', 'W6', 'W8', 'W10', 'W12'];
        expect(test_function({
            "type": NORM.LIGHT_CONCRETE,
        }).answer).toEqual(correct);

    });

    it("должна вернуть пустой массив для Напрягающего, Поризованного, Ячеистого бетонов", function () {
        var types = [
            NORM.PRESTRESSED_CONCRETE,
            NORM.POROUS_CONCRETE,
            NORM.CELL_CONCRETE,
            NORM.CELL_AUTOCLAVE_CONCRETE
        ];

        types.forEach(function (type) {
            expect(test_function({
                "type": type,
            }).answer).toEqual(null);
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