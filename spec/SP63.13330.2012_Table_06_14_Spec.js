var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_14;

var Rs_values = {
    'A240': 210,
    'A400': 350,
    'A500': 435,
    'A600': 520,
    'A800': 695,
    'A1000': 870,
    'B500': 435,
    'Bp500': 415,
    'Bp1200': 1050,
    'Bp1300': 1130,
    'Bp1400': 1215,
    'Bp1500': 1300,
    'Bp1600': 1390,
    'K1400': 1215,
    'K1500': 1300,
    'K1600': 1390,
    'K1700': 1475
};

var Rsc_short_term_values = {
    'A240': 210,
    'A400': 350,
    'A500': 400,
    'A600': 400,
    'A800': 400,
    'A1000': 400,
    'B500': 380,
    'Bp500': 360,
    'Bp1200': 400,
    'Bp1300': 400,
    'Bp1400': 400,
    'Bp1500': 400,
    'Bp1600': 400,
    'K1400': 400,
    'K1500': 400,
    'K1600': 400,
    'K1700': 400
};

var Rsc_long_term_values = {
    'A240': 210,
    'A400': 350,
    'A500': 435,
    'A600': 470,
    'A800': 500,
    'A1000': 500,
    'B500': 415,
    'Bp500': 390,
    'Bp1200': 500,
    'Bp1300': 500,
    'Bp1400': 500,
    'Bp1500': 500,
    'Bp1600': 500,
    'K1400': 500,
    'K1500': 500,
    'K1600': 500,
    'K1700': 500
};


describe("СП 63.13330.2012 (изм.1) - Таблица 6.14", function () {

    it("должна вернуть Rs, Rsc арматуры при кратковременной нагрузке", function () {

        Object.getOwnPropertyNames(Rs_values).forEach(function (classname) {
            expect(test_function(classname, 1.0, NORM.SHORT_TERM_LOAD))
                .toEqual([Rs_values[classname], Rsc_short_term_values[classname]]);
        });
    });

    it("должна вернуть Rs, Rsc арматуры при длительной нагрузке", function () {

        Object.getOwnPropertyNames(Rs_values).forEach(function (classname) {
            expect(test_function(classname, 1.0, NORM.LONG_TERM_LOAD))
                .toEqual([Rs_values[classname], Rsc_long_term_values[classname]]);
        });
    });

    it("должна вернуть Rs,n = Rs,ser арматуры при Ysi = 0.5", function () {
        expect(test_function('A500', 0.5, NORM.SHORT_TERM_LOAD))
            .toEqual([Rs_values['A500'] * 0.5, Rsc_short_term_values['A500'] * 0.5]);
    });

    it("должна вернуть NULL, если класс арматуры неверен", function () {
        expect(test_function(-1, 1.0, NORM.SHORT_TERM_LOAD)).toBeNull();
        expect(test_function('AAA', 1.0, NORM.SHORT_TERM_LOAD)).toBeNull();
    });

    it("должна вернуть NULL, если фактор Ysi неверен", function () {
        expect(test_function('A500', -1, NORM.SHORT_TERM_LOAD)).toBeNull();
        expect(test_function('A500', null, NORM.SHORT_TERM_LOAD)).toBeNull();
        expect(test_function('A500', 'AAA', NORM.SHORT_TERM_LOAD)).toBeNull();
    });

    it("должна вернуть NULL, если тип нагрузки неверен", function () {
        expect(test_function('A500', 1.0, -1)).toBeNull();
        expect(test_function('A500', 1.0, null)).toBeNull();
        expect(test_function('A500', 1.0, 'AAA')).toBeNull();
    });

});