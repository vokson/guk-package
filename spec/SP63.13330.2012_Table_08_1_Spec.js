var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_08_1;

var input = [0, 6, 10, 15, 20, 3, 8, 12.5, 17.5];
var outputOther = [1.0, 0.92, 0.90, 0.83, 0.70, 0.96, 0.91, 0.865, 0.765];
var outputB60 = [1.0, 0.91, 0.89, 0.80, 0.65, 0.955, 0.90, 0.845, 0.725];
var outputB80 = [1.0, 0.90, 0.88, 0.79, 0.64, 0.95, 0.89, 0.835, 0.715];

describe("СП 63.13330.2012 (изм.1) - Таблица 8.1", function () {

    it("должна вернуть Fi при L0/h для бетона B60", function () {
        input.forEach(function (value, i) {

            expect(test_function({
                "L0_h": value,
                "classname": 'B60',
            }).answer).toBeCloseTo(outputB60[i], 3);

        });
    });

    it("должна вернуть Fi при L0/h для бетона B80", function () {
        input.forEach(function (value, i) {

            expect(test_function({
                "L0_h": value,
                "classname": 'B80',
            }).answer).toBeCloseTo(outputB80[i], 3);

        });
    });

    it("должна вернуть Fi при L0/h для бетона B20-B55", function () {
        input.forEach(function (value, i) {

            var validClasses = ['B20', 'B25', 'B30', 'B35', 'B40', 'B45', 'B50', 'B55'];

            validClasses.forEach(function (classname) {
                expect(test_function({
                    "L0_h": value,
                    "classname": classname,
                }).answer).toBeCloseTo(outputOther[i], 3);
            });

        });
    });

    it("должна вернуть null, если класс бетона неверен", function () {

        var invalidClasses = ['B5', 'B10', 'B15', 'B70', 'B90', 'B100']; // не все классы, просто для примера

        invalidClasses.forEach(function (classname) {
            expect(test_function({
                "L0_h": 5,
                "classname": classname,
            }).answer).toBeNull();
        });
    });

    it("должна вернуть NULL, если L0/h неверно", function () {
        var input = {
            "L0_h": -0.1,
            "classname": 'B20',
        };
        expect(test_function(input).answer).toBeNull();

        var input = {
            "L0_h": 20.1,
            "classname": 'B20',
        };
        expect(test_function(input).answer).toBeNull();
    });

    it("должна вернуть NULL, если loadType неверно", function () {
        var input = {
            "L0_h": 1,
            "classname": -1,
        };
        expect(test_function(input).answer).toBeNull();
    });

});