var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_15;

var values = {
    'A240': 170,
    'A400': 280,
    'A500': 300,
    'B500': 300,
};

describe("СП 63.13330.2012 (изм.1) - Таблица 6.15", function () {

    it("должна вернуть Rsw арматуры", function () {

        Object.getOwnPropertyNames(values).forEach(function(classname) {
            expect(test_function({
                "classname": classname,
                "Ysi": 1.0,
            }).answer).toEqual(values[classname]);

        });
    });

    it("должна вернуть Rsw арматуры при Ysi = 0.5", function () {

        Object.getOwnPropertyNames(values).forEach(function(classname) {
            expect(test_function({
                "classname": classname,
                "Ysi": 0.5,
            }).answer).toEqual(values[classname] * 0.5);
        });
    });

    it("должна вернуть NULL, если класс арматуры неверен", function () {
        expect(test_function({
            "classname": -1
        }).answer).toBeNull();

        expect(test_function({
            "classname": 'AAA'
        }).answer).toBeNull();

    });

    it("должна вернуть NULL, если фактор Ysi неверен", function () {
        expect(test_function({
            "classname": 'A500',
            "Ysi": -1
        }).answer).toBeNull();

        expect(test_function({
            "classname": 'A500',
            "Ysi": null
        }).answer).toBeNull();

        expect(test_function({
            "classname": 'A500',
            "Ysi": 'AAA'
        }).answer).toBeNull();
    });

});