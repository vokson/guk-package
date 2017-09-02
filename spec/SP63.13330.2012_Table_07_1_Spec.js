var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_07_1;

var input = [0, 6, 10, 15, 20, 3, 8, 12.5, 17.5];
var output = [1.0, 0.92, 0.9, 0.8, 0.6, 0.96, 0.91, 0.85, 0.70];


describe("СП 63.13330.2012 (изм.1) - Таблица 7.1", function () {

    it("должна вернуть Fi при L0/h", function () {

        input.forEach(function(value,i) {
            expect(test_function(value)).toBeCloseTo(output[i],2);
        });
    });

    it("должна вернуть NULL, если L0/h неверно", function () {
        expect(test_function(-0.1)).toBeNull();
        expect(test_function(20.1)).toBeNull();
        expect(test_function('AAA')).toBeNull();
    });

});