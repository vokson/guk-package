var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_7;

var heavy_Rb = {
    'B3,5': 2.7, 'B5': 3.5, 'B7,5': 5.5, 'B10': 7.5, 'B12,5': 9.5, 'B15': 11, 'B20': 15, 'B25': 18.5, 'B30': 22,
    'B35': 25.5, 'B40': 29, 'B45': 32, 'B50': 36, 'B55': 39.5, 'B60': 43, 'B70': 50, 'B80': 57, 'B90': 64, 'B100': 71
};

var light_Rb = {
    'B2,5': 1.9,
    'B3,5': 2.7,
    'B5': 3.5,
    'B7,5': 5.5,
    'B10': 7.5,
    'B12,5': 9.5,
    'B15': 11,
    'B20': 15,
    'B25': 18.5,
    'B30': 22,
    'B35': 25.5,
    'B40': 29
};

var cell_Rb = {
    'B1,5': 1.4,
    'B2': 1.9,
    'B2,5': 2.4,
    'B3,5': 3.3,
    'B5': 4.6,
    'B7,5': 6.9,
    'B10': 9,
    'B12,5': 10.5,
    'B15': 11.5
};

var heavy_Rbt = {
    'B3,5': 0.39,
    'B5': 0.55,
    'B7,5': 0.7,
    'B10': 0.85,
    'B12,5': 1,
    'B15': 1.1,
    'B20': 1.35,
    'B25': 1.55,
    'B30': 1.75,
    'B35': 1.95,
    'B40': 2.10,
    'B45': 2.25,
    'B50': 2.45,
    'B55': 2.60,
    'B60': 2.75,
    'B70': 3,
    'B80': 3.3,
    'B90': 3.6,
    'B100': 3.8
};

var light_Rbt = {
    'B2,5': 0.29,
    'B3,5': 0.39,
    'B5': 0.55,
    'B7,5': 0.7,
    'B10': 0.85,
    'B12,5': 1,
    'B15': 1.1,
    'B20': 1.35,
    'B25': 1.55,
    'B30': 1.75,
    'B35': 1.95,
    'B40': 2.10,
};

var cell_Rbt = {
    'B1,5': 0.22,
    'B2': 0.26,
    'B2,5': 0.31,
    'B3,5': 0.41,
    'B5': 0.55,
    'B7,5': 0.63,
    'B10': 0.89,
    'B12,5': 1,
    'B15': 1.05
};

describe("СП 63.13330.2012 (изм.1) - Таблица 6.7", function () {

    it("должна вернуть Rb,n = Rb,ser & Rbt,n = Rbt,ser Тяжелого, Напрягающего, Мелкозернистого бетонов", function () {

        var array_Rb = heavy_Rb;
        var array_Rbt = heavy_Rbt;

        for (var classname in array_Rb) {
            if (array_Rb.hasOwnProperty(classname)) {

                expect(test_function(NORM.HEAVY_CONCRETE, classname)).toEqual([array_Rb[classname], array_Rbt[classname]]);
                expect(test_function(NORM.PRESTRESSED_CONCRETE, classname)).toEqual([array_Rb[classname], array_Rbt[classname] * 1.2]);
                expect(test_function(NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A, classname)).toEqual([array_Rb[classname], array_Rbt[classname]]);
                expect(test_function(NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A, classname)).toEqual([array_Rb[classname], array_Rbt[classname]]);
                expect(test_function(NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B, classname)).toEqual([array_Rb[classname], array_Rbt[classname]]);

                //с учетом понижающего коэффициента 0.8 для мелкозернистого бетона на песке с модулем крупности 2.0 и менее
                expect(test_function(NORM.HEAVY_CONCRETE, classname, 1, 1, true)).toEqual([array_Rb[classname], array_Rbt[classname]]);
                expect(test_function(NORM.PRESTRESSED_CONCRETE, classname, 1, 1, true)).toEqual([array_Rb[classname], array_Rbt[classname] * 1.2]);
                expect(test_function(NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A, classname, 1, 1, true)).toEqual([array_Rb[classname], array_Rbt[classname] * 0.8]);
                expect(test_function(NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A, classname, 1, 1, true)).toEqual([array_Rb[classname], array_Rbt[classname] * 0.8]);
                expect(test_function(NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B, classname, 1, 1, true)).toEqual([array_Rb[classname], array_Rbt[classname] * 0.8]);
            }
        }
    });


    it("должна вернуть Rb,n = Rb,ser & Rbt,n = Rbt,ser Легкого, Поризованного бетонов", function () {

        var array_Rb = light_Rb;
        var array_Rbt = light_Rbt;

        for (var classname in array_Rb) {
            if (array_Rb.hasOwnProperty(classname)) {
                expect(test_function(NORM.LIGHT_CONCRETE, classname)).toEqual([array_Rb[classname], array_Rbt[classname]]);
                expect(test_function(NORM.POROUS_CONCRETE, classname)).toEqual([array_Rb[classname], array_Rbt[classname] * 0.7]);

                //с учетом понижающего коэффициента 0.8 для легкого бетона на мелком пористом заполнителе
                expect(test_function(NORM.LIGHT_CONCRETE, classname, 1, 1, true)).toEqual([array_Rb[classname], array_Rbt[classname] * 0.8]);
                expect(test_function(NORM.POROUS_CONCRETE, classname, 1, 1, true)).toEqual([array_Rb[classname], array_Rbt[classname] * 0.7]);
            }
        }
    });

    it("должна вернуть Rb,n = Rb,ser & Rbt,n = Rbt,ser Ячеистых бетонов", function () {

        var array_Rb = cell_Rb;
        var array_Rbt = cell_Rbt;

        for (var classname in array_Rb) {
            if (array_Rb.hasOwnProperty(classname)) {
                expect(test_function(NORM.CELL_CONCRETE, classname)).toEqual([array_Rb[classname], array_Rbt[classname]]);
                expect(test_function(NORM.CELL_AUTOCLAVE_CONCRETE, classname)).toEqual([array_Rb[classname], array_Rbt[classname]]);

                expect(test_function(NORM.CELL_CONCRETE, classname, 1, 1, true)).toEqual([array_Rb[classname], array_Rbt[classname]]);
                expect(test_function(NORM.CELL_AUTOCLAVE_CONCRETE, classname, 1, 1, true)).toEqual([array_Rb[classname], array_Rbt[classname]]);
            }
        }
    });

    it("должна вернуть Rb,n = Rb,ser & Rbt,n = Rbt,ser Тяжелого бетона с учетом понижающих коэффициентов", function () {

        var array_Rb = heavy_Rb;
        var array_Rbt = heavy_Rbt;
        var classname = 'B15';

        expect(test_function(NORM.HEAVY_CONCRETE, classname, 0.5, 0.25)).toEqual([array_Rb[classname] * 0.5, array_Rbt[classname]*0.25]);
    });

    it("должна вернуть NULL, если тип, класс бетона неверен", function () {
        expect(test_function(-1)).toBe(null);
        expect(test_function('AAA')).toBe(null);
        expect(test_function(NORM.HEAVY_CONCRETE)).toBe(null);


        expect(test_function(NORM.LIGHT_CONCRETE, 'B50')).toBe(null);
        expect(test_function(NORM.LIGHT_CONCRETE, 1)).toBe(null);
    });

    it("должна вернуть NULL, если факторы гамма_bi неверны", function () {
        expect(test_function(NORM.HEAVY_CONCRETE, 'B15', -1)).toBe(null);
        expect(test_function(NORM.HEAVY_CONCRETE, 'B15', null)).toBe(null);
        expect(test_function(NORM.HEAVY_CONCRETE, 'B15', 'AAA')).toBe(null);
    });

});