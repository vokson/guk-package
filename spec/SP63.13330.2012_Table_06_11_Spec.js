var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_11;

var class_function = NORM.table_06_1;
var density_function = NORM.table_06_5;

var heavy_Eb = {
    'B3,5': 9.5,
    'B5': 13,
    'B7,5': 16,
    'B10': 19,
    'B12,5': 21.5,
    'B15': 24,
    'B20': 27.5,
    'B25': 30,
    'B30': 32.5,
    'B35': 34.5,
    'B40': 36,
    'B45': 37,
    'B50': 38,
    'B55': 39,
    'B60': 39.5,
    'B70': 41,
    'B80': 42,
    'B90': 42.5,
    'B100': 43
};

var fine_grade_A_Eb = {
    'B3,5': 7,
    'B5': 10,
    'B7,5': 13.5,
    'B10': 15.5,
    'B12,5': 17.5,
    'B15': 19.5,
    'B20': 22,
    'B25': 24,
    'B30': 26,
    'B35': 27.5,
    'B40': 28.5
};

var fine_grade_B_Eb = {
    'B15': 16.5,
    'B20': 18,
    'B25': 19.5,
    'B30': 21,
    'B35': 22,
    'B40': 23,
    'B45': 23.5,
    'B50': 24,
    'B55': 24.5,
    'B60': 25
};


var light_Eb = {
    'D800': {'B2,5': 4, 'B3,5': 4.5, 'B5': 5, 'B7,5': 5.5},
    'D900': {'B2,5': 4.5, 'B3,5': 5, 'B5': 5.65, 'B7,5': 6.35},
    'D1000': {'B2,5': 5.0, 'B3,5': 5.5, 'B5': 6.3, 'B7,5': 7.2, 'B10': 8.0, 'B12,5': 8.4},
    'D1100': {'B2,5': 5.5, 'B3,5': 6.1, 'B5': 6.95, 'B7,5': 7.95, 'B10': 8.75, 'B12,5': 9.2},
    'D1200': {'B2,5': 6.0, 'B3,5': 6.7, 'B5': 7.6, 'B7,5': 8.7, 'B10': 9.5, 'B12,5': 10.0, 'B15': 10.5},
    'D1300': {'B2,5': 6.5, 'B3,5': 7.25, 'B5': 8.2, 'B7,5': 9.35, 'B10': 10.25, 'B12,5': 10.85, 'B15': 11.5},
    'D1400': {
        'B2,5': 7.0,
        'B3,5': 7.8,
        'B5': 8.8,
        'B7,5': 10.0,
        'B10': 11.0,
        'B12,5': 11.7,
        'B15': 12.5,
        'B20': 13.5,
        'B25': 14.5,
        'B30': 15.5
    },
    'D1500': {
        'B3,5': 8.4,
        'B5': 9.4,
        'B7,5': 10.75,
        'B10': 11.75,
        'B12,5': 12.45,
        'B15': 13.25,
        'B20': 14.5,
        'B25': 15.5,
        'B30': 16.5
    },
    'D1600': {
        'B3,5': 9.0,
        'B5': 10.,
        'B7,5': 11.5,
        'B10': 12.5,
        'B12,5': 13.2,
        'B15': 14.0,
        'B20': 15.5,
        'B25': 16.5,
        'B30': 17.5,
        'B35': 18
    },
    'D1700': {
        'B5': 10.6,
        'B7,5': 12.25,
        'B10': 13.25,
        'B12,5': 13.95,
        'B15': 14.75,
        'B20': 16.25,
        'B25': 17.5,
        'B30': 18.5,
        'B35': 19.25
    },
    'D1800': {
        'B5': 11.2,
        'B7,5': 13.,
        'B10': 14.0,
        'B12,5': 14.7,
        'B15': 15.5,
        'B20': 17.0,
        'B25': 18.5,
        'B30': 19.5,
        'B35': 20.5,
        'B40': 21
    },
    'D1900': {
        'B7,5': 13.75,
        'B10': 15.0,
        'B12,5': 15.85,
        'B15': 16.75,
        'B20': 18.25,
        'B25': 19.75,
        'B30': 20.75,
        'B35': 21.75,
        'B40': 22.25
    },
    'D2000': {
        'B7,5': 14.5,
        'B10': 16.0,
        'B12,5': 17.0,
        'B15': 18.0,
        'B20': 19.5,
        'B25': 21.0,
        'B30': 22.0,
        'B35': 23.0,
        'B40': 23.5
    },
};

var cell_Eb = {
    'D500': {'B1,5': 1.4},
    'D600': {'B1,5': 1.7, 'B2': 1.8, 'B2,5': 2.1},
    'D700': {'B1,5': 1.9, 'B2': 2.2, 'B2,5': 2.5, 'B3,5': 2.9},
    'D800': {'B2,5': 2.9, 'B3,5': 3.4, 'B5': 4},
    'D900': {'B3,5': 3.8, 'B5': 4.5, 'B7,5': 5.5},
    'D1000': {'B5': 5, 'B7,5': 6, 'B10': 7},
    'D1100': {'B7,5': 6.8, 'B10': 7.9, 'B12,5': 8.3, 'B15': 8.6},
    'D1200': {'B10': 8.4, 'B12,5': 8.8, 'B15': 9.3}
};

describe("СП 63.13330.2012 (изм.1) - Таблица 6.11", function () {

    it("должна вернуть Eb Тяжелого бетона", function () {

        var array_Eb = heavy_Eb;

        class_function({"type": NORM.HEAVY_CONCRETE}).answer.forEach(function (classname) {
            expect(test_function({
                "type": NORM.HEAVY_CONCRETE,
                [NORM.VAR_CONCRETE_CLASS]: classname,
            }).answer).toEqual(array_Eb[classname] * 1000);
        });

    });

    it("должна вернуть Eb Напрягающего бетона", function () {

        var array_Eb = heavy_Eb;

        class_function({"type": NORM.PRESTRESSED_CONCRETE}).answer.forEach(function (classname) {
            var factor = 0.56 + 0.006 * NORM.getGradeNumberValue(classname, 1);

            expect(test_function({
                "type": NORM.PRESTRESSED_CONCRETE,
                [NORM.VAR_CONCRETE_CLASS]: classname,
            }).answer).toEqual(array_Eb[classname] * factor * 1000);

        });
    });

    it("должна вернуть Eb Мелкозернистого бетона группы А (естественное твердение)", function () {

        var array_Eb = fine_grade_A_Eb;

        class_function({"type": NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A}).answer.forEach(function (classname) {
            expect(test_function({
                "type": NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
                [NORM.VAR_CONCRETE_CLASS]: classname,
            }).answer).toEqual(array_Eb[classname] * 1000);
            ;
        });
    });

    it("должна вернуть Eb Мелкозернистого бетона группы А (тепловая обработка)", function () {

        var array_Eb = fine_grade_A_Eb;

        class_function({"type": NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A}).answer.forEach(function (classname) {
            expect(test_function({
                "type": NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
                [NORM.VAR_CONCRETE_CLASS]: classname,
            }).answer).toEqual(array_Eb[classname] * 0.89 * 1000);
        });
    });

    it("должна вернуть Eb Мелкозернистого бетона группы Б (автоклавное твердение)", function () {

        var array_Eb = fine_grade_B_Eb;

        class_function({"type": NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B}).answer.forEach(function (classname) {
            expect(test_function({
                "type": NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B,
                [NORM.VAR_CONCRETE_CLASS]: classname,
            }).answer).toEqual(array_Eb[classname] * 1000);
        });
    });

    it("должна вернуть Eb Легкого бетонов", function () {

        var array_Eb = light_Eb;

        density_function({"type": NORM.LIGHT_CONCRETE}).answer.forEach(function (density) {
            class_function({"type": NORM.LIGHT_CONCRETE, "density": density}).answer.forEach(function (classname) {
                if (array_Eb[density].hasOwnProperty(classname)) {

                    expect(test_function({
                        "type": NORM.LIGHT_CONCRETE,
                        [NORM.VAR_CONCRETE_CLASS]: classname,
                        "density": density
                    }).answer).toBeCloseTo(array_Eb[density][classname] * 1000, 2);
                }
            });
        });
    });

    it("должна вернуть Eb Поризованного бетонов", function () {

        var array_Eb = light_Eb;

        density_function({"type": NORM.POROUS_CONCRETE}).answer.forEach(function (density) {
            class_function({"type": NORM.POROUS_CONCRETE, "density": density}).answer.forEach(function (classname) {
                if (array_Eb[density].hasOwnProperty(classname)) {
                    expect(test_function({
                        "type": NORM.POROUS_CONCRETE,
                        [NORM.VAR_CONCRETE_CLASS]: classname,
                        "density": density
                    }).answer).toBeCloseTo(array_Eb[density][classname] * 1000, 2);
                }
            });
        });
    });

    it("должна вернуть Eb Ячеистого автоклавного бетона", function () {

        var array_Eb = cell_Eb;

        density_function({"type": NORM.CELL_AUTOCLAVE_CONCRETE}).answer.forEach(function (density) {
            class_function({
                "type": NORM.CELL_AUTOCLAVE_CONCRETE,
                "density": density
            }).answer.forEach(function (classname) {
                if (array_Eb[density].hasOwnProperty(classname)) {
                    expect(test_function({
                        "type": NORM.CELL_AUTOCLAVE_CONCRETE,
                        [NORM.VAR_CONCRETE_CLASS]: classname,
                        "density": density
                    }).answer).toEqual(array_Eb[density][classname] * 1000);
                }
            });
        });
    });

    it("должна вернуть Eb Ячеистого неавтоклавного бетона", function () {

        var array_Eb = cell_Eb;

        density_function({"type": NORM.CELL_CONCRETE}).answer.forEach(function (density) {
            class_function({"type": NORM.CELL_CONCRETE, "density": density}).answer.forEach(function (classname) {
                if (array_Eb[density].hasOwnProperty(classname)) {
                    expect(test_function({
                        "type": NORM.CELL_CONCRETE,
                        [NORM.VAR_CONCRETE_CLASS]: classname,
                        "density": density
                    }).answer).toEqual(array_Eb[density][classname] * 0.8 * 1000);
                }
            });
        });
    });

    it("должна вернуть NULL, если тип, класс бетона неверен", function () {
        expect(test_function({
            "type": -1,
        }).answer).toBeNull();

        expect(test_function({
            "type": 'AAA',
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.LIGHT_CONCRETE,
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.CELL_CONCRETE,
            "density": 'D400'
        }).answer).toBeNull();

    });
});