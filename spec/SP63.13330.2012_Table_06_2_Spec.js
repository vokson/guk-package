var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_2;

describe("СП 63.13330.2012 (изм.1) - Таблица 6.2", function () {

    it("должна вернуть массив классов по прочности на растяжение для Тяжелого, Напрягающего, Мелкозернистого бетона", function () {
        var types = [
            NORM.HEAVY_CONCRETE,
            NORM.PRESTRESSED_CONCRETE,
            NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
            NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
            NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
        ];

        var correct = ['Bt0,8', 'Bt1,2', 'Bt1,6', 'Bt2,0', 'Bt2,4', 'Bt2,8', 'Bt3,2', 'Bt3,6', 'Bt4,0'];

        types.forEach(function (type) {
            expect(test_function({
                [NORM.VAR_CONCRETE_TYPE]: type,
            }).answer).toEqual(correct);
        });
    });

    it("должна вернуть массив классов по прочности на растяжение для Легкого бетона", function () {

        var correct = ['Bt0,8', 'Bt1,2', 'Bt1,6', 'Bt2,0', 'Bt2,4', 'Bt2,8', 'Bt3,2'];
        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: NORM.LIGHT_CONCRETE,
        }).answer).toEqual(correct);

    });

    it("должна вернуть пустой массив для Поризованного, Ячеистого бетонов", function () {
        var types = [
            NORM.POROUS_CONCRETE,
            NORM.CELL_CONCRETE,
            NORM.CELL_AUTOCLAVE_CONCRETE
        ];

        types.forEach(function (type) {
            expect(test_function({
                [NORM.VAR_CONCRETE_TYPE]: type,
            }).answer).toEqual(null);
        });
    });

    it("должна вернуть пустой массив, если тип бетона неверен", function () {
        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: -1,
        }).answer).toEqual(null);

        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: "AAA",
        }).answer).toEqual(null);

    });
});