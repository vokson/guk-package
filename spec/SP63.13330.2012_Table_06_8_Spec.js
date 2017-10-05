var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_8;

var heavy_Rb = {
    'B3,5': 2.1,
    'B5': 2.8,
    'B7,5': 4.5,
    'B10': 6,
    'B12,5': 7.5,
    'B15': 8.5,
    'B20': 11.5,
    'B25': 14.5,
    'B30': 17,
    'B35': 19.5,
    'B40': 22,
    'B45': 25,
    'B50': 27.5,
    'B55': 30,
    'B60': 33,
    'B70': 37,
    'B80': 41,
    'B90': 44,
    'B100': 47.5
};

var light_Rb = {
    'B2,5': 1.5,
    'B3,5': 2.1,
    'B5': 2.8,
    'B7,5': 4.5,
    'B10': 6,
    'B12,5': 7.5,
    'B15': 8.5,
    'B20': 11.5,
    'B25': 14.5,
    'B30': 17,
    'B35': 19.5,
    'B40': 22,
};

var cell_Rb = {
    'B1,5': 0.95,
    'B2': 1.3,
    'B2,5': 1.6,
    'B3,5': 2.2,
    'B5': 3.1,
    'B7,5': 4.6,
    'B10': 6.0,
    'B12,5': 7.0,
    'B15': 7.7
};

var heavy_Rbt = {
    'B3,5': 0.26,
    'B5': 0.37,
    'B7,5': 0.48,
    'B10': 0.56,
    'B12,5': 0.66,
    'B15': 0.75,
    'B20': 0.9,
    'B25': 1.05,
    'B30': 1.15,
    'B35': 1.3,
    'B40': 1.4,
    'B45': 1.5,
    'B50': 1.6,
    'B55': 1.7,
    'B60': 1.8,
    'B70': 1.9,
    'B80': 2.1,
    'B90': 2.15,
    'B100': 2.2
};

var light_Rbt = {
    'B2,5': 0.2,
    'B3,5': 0.26,
    'B5': 0.37,
    'B7,5': 0.48,
    'B10': 0.56,
    'B12,5': 0.66,
    'B15': 0.75,
    'B20': 0.9,
    'B25': 1.05,
    'B30': 1.15,
    'B35': 1.3,
    'B40': 1.4,
};

var cell_Rbt = {
    'B1,5': 0.09,
    'B2': 0.12,
    'B2,5': 0.14,
    'B3,5': 0.18,
    'B5': 0.24,
    'B7,5': 0.28,
    'B10': 0.39,
    'B12,5': 0.44,
    'B15': 0.46
};

describe("СП 63.13330.2012 (изм.1) - Таблица 6.8", function () {

    it("должна вернуть Rb, Rbt Тяжелого, Напрягающего, Мелкозернистого бетонов", function () {

        var array_Rb = heavy_Rb;
        var array_Rbt = heavy_Rbt;

        for (var classname in array_Rb) {
            if (array_Rb.hasOwnProperty(classname)) {

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.HEAVY_CONCRETE,
                    [NORM.VAR_CONCRETE_CLASS]: classname
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname]]);

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.PRESTRESSED_CONCRETE,
                    [NORM.VAR_CONCRETE_CLASS]: classname
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname] * 1.2]);

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
                    [NORM.VAR_CONCRETE_CLASS]: classname
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname]]);

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
                    [NORM.VAR_CONCRETE_CLASS]: classname
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname]]);

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B,
                    [NORM.VAR_CONCRETE_CLASS]: classname
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname]]);

                //с учетом понижающего коэффициента 0.8 для мелкозернистого бетона на песке с модулем крупности 2.0 и менее
                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.HEAVY_CONCRETE,
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                    "Ybi": 1.0,
                    "Ybti": 1.0,
                    "isReductionFactorToBeApplied": true
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname]]);

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.PRESTRESSED_CONCRETE,
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                    "Ybi": 1.0,
                    "Ybti": 1.0,
                    "isReductionFactorToBeApplied": true
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname] * 1.2]);

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                    "Ybi": 1.0,
                    "Ybti": 1.0,
                    "isReductionFactorToBeApplied": true
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname] * 0.8]);

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                    "Ybi": 1.0,
                    "Ybti": 1.0,
                    "isReductionFactorToBeApplied": true
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname] * 0.8]);

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B,
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                    "Ybi": 1.0,
                    "Ybti": 1.0,
                    "isReductionFactorToBeApplied": true
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname] * 0.8]);
            }
        }
    });


    it("должна вернуть Rb, Rbt Легкого, Поризованного бетонов", function () {

        var array_Rb = light_Rb;
        var array_Rbt = light_Rbt;

        for (var classname in array_Rb) {
            if (array_Rb.hasOwnProperty(classname)) {

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.LIGHT_CONCRETE,
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname]]);

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.POROUS_CONCRETE,
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname] * 0.7]);

                //с учетом понижающего коэффициента 0.8 для легкого бетона на мелком пористом заполнителе
                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.LIGHT_CONCRETE,
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                    "Ybi": 1.0,
                    "Ybti": 1.0,
                    "isReductionFactorToBeApplied": true
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname] * 0.8]);

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.POROUS_CONCRETE,
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                    "Ybi": 1.0,
                    "Ybti": 1.0,
                    "isReductionFactorToBeApplied": true
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname] * 0.7]);
            }
        }
    });

    it("должна вернуть Rb, Rbt Ячеистых бетонов", function () {

        var array_Rb = cell_Rb;
        var array_Rbt = cell_Rbt;

        for (var classname in array_Rb) {
            if (array_Rb.hasOwnProperty(classname)) {
                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.CELL_CONCRETE,
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname]]);

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.CELL_AUTOCLAVE_CONCRETE,
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname]]);

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.CELL_CONCRETE,
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                    "Ybi": 1.0,
                    "Ybti": 1.0,
                    "isReductionFactorToBeApplied": true
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname]]);

                expect(test_function({
                    [NORM.VAR_CONCRETE_TYPE]: NORM.CELL_AUTOCLAVE_CONCRETE,
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                    "Ybi": 1.0,
                    "Ybti": 1.0,
                    "isReductionFactorToBeApplied": true
                }).answer).toEqual([array_Rb[classname], array_Rbt[classname]]);
            }
        }
    });

    it("должна вернуть Rb, Rbt Тяжелого бетона с учетом понижающих коэффициентов", function () {

        var array_Rb = heavy_Rb;
        var array_Rbt = heavy_Rbt;
        var classname = 'B15';

        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: NORM.HEAVY_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: classname,
            "Ybi": 0.5,
            "Ybti": 0.25,
        }).answer).toEqual([array_Rb[classname] * 0.5, array_Rbt[classname] * 0.25]);
    });

    it("должна вернуть NULL, если тип, класс бетона неверен", function () {
        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: NORM.LIGHT_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B50',
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_CONCRETE_TYPE]: NORM.LIGHT_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 1,
        }).answer).toBeNull();
    });
});