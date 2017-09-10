var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_07_1;

var longTermInput = [0, 6, 10, 15, 20, 3, 8, 12.5, 17.5];
var longTermOutput = [1.0, 0.92, 0.9, 0.8, 0.6, 0.96, 0.91, 0.85, 0.70];

var shortTermInput = [0, 10, 20, 5, 15];
var shortTermOutput = [1.0, 0.90, 0.85, 0.95, 0.875];


describe("СП 63.13330.2012 (изм.1) - Таблица 7.1", function () {

    it("должна вернуть Fi при L0/h для длительных нагрузок", function () {
        longTermInput.forEach(function (value, i) {
            var input = {
                "L0_h": value,
                "loadType": NORM.LONG_TERM_LOAD,
            };
            expect(test_function(input).answer).toBeCloseTo(longTermOutput[i], 2);
        });
    });

    it("должна вернуть Fi при L0/h для кратковременных нагрузок", function () {

        shortTermInput.forEach(function (value, i) {
            var input = {
                "L0_h": value,
                "loadType": NORM.SHORT_TERM_LOAD,
            };
            expect(test_function(input).answer).toBeCloseTo(shortTermOutput[i], 3);
        });
    });

    it("должна вернуть NULL, если L0/h неверно", function () {
        var input = {
            "L0_h": -0.1,
            "loadType": NORM.LONG_TERM_LOAD,
        };
        expect(test_function(input).answer).toBeNull();

        var input = {
            "L0_h": 20.1,
            "loadType": NORM.LONG_TERM_LOAD,
        };
        expect(test_function(input).answer).toBeNull();
    });

    it("должна вернуть NULL, если loadType неверно", function () {
        var input = {
            "L0_h": 1,
            "loadType": -1,
        };
        expect(test_function(input).answer).toBeNull();
    });

});