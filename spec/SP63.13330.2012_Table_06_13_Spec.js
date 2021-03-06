var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_13;

var values = {
    'A240': 240,
    'A400': 400,
    'A500': 500,
    'A600': 600,
    'A800': 800,
    'A1000': 1000,
    'B500': 500,
    'Bp500': 500,
    'Bp1200': 1200,
    'Bp1300': 1300,
    'Bp1400': 1400,
    'Bp1500': 1500,
    'Bp1600': 1600,
    'K1400': 1400,
    'K1500': 1500,
    'K1600': 1600,
    'K1700': 1700
};

describe("СП 63.13330.2012 (изм.1) - Таблица 6.13", function () {

    it("должна вернуть Rs,n = Rs,ser арматуры", function () {

        Object.getOwnPropertyNames(values).forEach(function(classname) {
            expect(test_function({
                [NORM.VAR_REBAR_CLASS]: classname,
                [NORM.VAR_Ysi] : 1.0
            }).answer).toEqual(values[classname]);
        });
    });

    it("должна вернуть Rs,n = Rs,ser арматуры при Ysi = 0.5", function () {

        Object.getOwnPropertyNames(values).forEach(function(classname) {
            expect(test_function({
                [NORM.VAR_REBAR_CLASS]: classname,
                [NORM.VAR_Ysi] : 0.5
            }).answer).toEqual(values[classname]* 0.5);
        });
    });

    it("должна вернуть NULL, если класс арматуры неверен", function () {
        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: -1,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'AAA',
        }).answer).toBeNull();
    });

    it("должна вернуть NULL, если фактор Ysi неверен", function () {
        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            [NORM.VAR_Ysi] : -1
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            [NORM.VAR_Ysi] : null
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            [NORM.VAR_Ysi] : 'AAA'
        }).answer).toBeNull();
    });

});