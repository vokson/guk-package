var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_9;

var heavy_Rbt = {
    'Bt0,8': 0.62,
    'Bt1,2': 0.93,
    'Bt1,6': 1.25,
    'Bt2,0': 1.55,
    'Bt2,4': 1.85,
    'Bt2,8': 2.15,
    'Bt3,2': 2.45
};


describe("СП 63.13330.2012 (изм.1) - Таблица 6.9", function () {

    it("должна вернуть Rbt Тяжелого, Напрягающего, Мелкозернистого, Легкого бетонов", function () {

        var types = [
            NORM.HEAVY_CONCRETE,
            NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
            NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B,
            NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
            NORM.PRESTRESSED_CONCRETE,
            NORM.LIGHT_CONCRETE
        ];

        var array_Rbt = heavy_Rbt;

        for (var classname in array_Rbt) {
            if (array_Rbt.hasOwnProperty(classname)) {
                types.forEach(function (type) {

                    expect(test_function({
                        [NORM.VAR_CONCRETE_TYPE]: type,
                        [NORM.VAR_CONCRETE_CLASS]: classname,
                    }).answer).toEqual(array_Rbt[classname]);

                });
            }
        }

    });

    it("должна вернуть NULL, если тип, класс бетона неверен", function () {
        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: -1,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: 'AAA',
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: -1,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: NORM.LIGHT_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B50'
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: NORM.LIGHT_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 1
        }).answer).toBeNull();

    });
});