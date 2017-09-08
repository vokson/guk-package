var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_10;
var class_function = NORM.table_06_1;

var compression_values = [
    [0.003, 0.0042, 0.0024],
    [0.0034, 0.0048, 0.0028],
    [0.004, 0.0056, 0.0034]
];

var tension_values = [
    [0.00021, 0.00027, 0.00019],
    [0.00024, 0.00031, 0.00022],
    [0.00028, 0.00036, 0.00026]
];

var types = [
    NORM.HEAVY_CONCRETE,
    NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
    NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B,
    NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
    NORM.PRESTRESSED_CONCRETE
];

var highStrengthFactor = function (classname) {
    var s = classname.substr(1).replace(',', '.');
    var value = parseFloat(s);

    if (value >= 70) {
        return (270 - value) / 210;
    }

    return 1;
};

describe("СП 63.13330.2012 (изм.1) - Таблица 6.10", function () {

    it("должна вернуть относительные деформации Тяжелого, Напрягающего, Мелкозернистого бетонов при сжатии", function () {

        var values = compression_values;

        types.forEach(function (type) {

            class_function({"type": type}).answer.forEach(function (classname) {

                expect(test_function({
                    "type": type,
                    "classname": classname,
                    "humidity": NORM.HIGH_HUMIDITY,
                    "stress": NORM.COMPRESSION
                }).answer).toEqual(
                    [values[0][0], values[0][1] * highStrengthFactor(classname), values[0][2]]
                );


                expect(test_function({
                    "type": type,
                    "classname": classname,
                    "humidity": NORM.MIDDLE_HUMIDITY,
                    "stress": NORM.COMPRESSION
                }).answer).toEqual(
                    [values[1][0], values[1][1] * highStrengthFactor(classname), values[1][2]]
                );
                expect(test_function({
                    "type": type,
                    "classname": classname,
                    "humidity": NORM.LOW_HUMIDITY,
                    "stress": NORM.COMPRESSION
                }).answer).toEqual(
                    [values[2][0], values[2][1] * highStrengthFactor(classname), values[2][2]]
                );

            });

        });


    });

    it("должна вернуть относительные деформации Тяжелого, Напрягающего, Мелкозернистого бетонов при растяжении", function () {

        var values = tension_values;

        types.forEach(function (type) {

            class_function({"type": type}).answer.forEach(function (classname) {

                expect(test_function({
                    "type": type,
                    "classname": classname,
                    "humidity": NORM.HIGH_HUMIDITY,
                    "stress": NORM.TENSION
                }).answer).toEqual(values[0]);

                expect(test_function({
                    "type": type,
                    "classname": classname,
                    "humidity": NORM.MIDDLE_HUMIDITY,
                    "stress": NORM.TENSION
                }).answer).toEqual(values[1]);

                expect(test_function({
                    "type": type,
                    "classname": classname,
                    "humidity": NORM.LOW_HUMIDITY,
                    "stress": NORM.TENSION
                }).answer).toEqual(values[2]);

            });

        });

    });

    it("должна вернуть NULL, если тип бетона неверен", function () {
        expect(test_function({
            "type": NORM.LIGHT_CONCRETE,
            "classname": 'B15',
            "humidity": NORM.HIGH_HUMIDITY,
            "stress": NORM.TENSION
        }).answer).toBeNull();
    });

});