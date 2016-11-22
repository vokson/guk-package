var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.clause_06_2_12;

var AB_list = ['A240', 'A400', 'A500', 'A600', 'A800', 'A1000', 'B500', 'Bp500', 'Bp1200', 'Bp1300', 'Bp1400', 'Bp1500', 'Bp1600'];

var K_list = ['K1400', 'K1500', 'K1600', 'K1700'];

describe("СП 63.13330.2012 (изм.1) - Таблица 6.15", function () {

    it("должна вернуть Es = 1.95 * 10^5 МПа для арматурных канатов (К)", function () {

        K_list.forEach(function (classname) {
            expect(test_function(classname)).toBe(195000);
        });
    });

    it("должна вернуть Es = 2.0 * 10^5 МПа для арматуры (A и B)", function () {

        AB_list.forEach(function (classname) {
            expect(test_function(classname)).toBe(200000);
        });
    });

    it("должна вернуть NULL, если класс арматуры неверен", function () {
        expect(test_function(-1)).toBeNull();
        expect(test_function('AAA')).toBeNull();
    });

});