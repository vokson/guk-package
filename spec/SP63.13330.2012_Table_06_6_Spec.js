var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_6;

describe("СП 63.13330.2012 (изм.1) - Таблица 6.6", function () {

    it("должна вернуть массив марок бетона по самонапряжению для Напрягающего бетона", function () {

        var correct = ['Sp0,6','Sp0,8', 'Sp1', 'Sp1,2', 'Sp1,5', 'Sp2', 'Sp3', 'Sp4'];

        expect(test_function({
            "type": NORM.PRESTRESSED_CONCRETE,
        }).answer).toEqual(correct);

    });

    it("должна вернуть пустой массив для Тяжелого, Мелкозернистого, Легкого, Поризованного, Ячеистого бетонов", function () {
        var types = [
            NORM.HEAVY_CONCRETE,
            NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
            NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
            NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B,
            NORM.LIGHT_CONCRETE,
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