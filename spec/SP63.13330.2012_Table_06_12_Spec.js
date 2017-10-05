var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_12;

var high_humidity_values = {
    'B10': 2.8,
    'B15': 2.4,
    'B20': 2,
    'B25': 1.8,
    'B30': 1.6,
    'B35': 1.5,
    'B40': 1.4,
    'B45': 1.3,
    'B50': 1.2,
    'B55': 1.1,
    'B60': 1,
    'B70': 1,
    'B80': 1,
    'B90': 1,
    'B100': 1
};

var middle_humidity_values = {
    'B10': 3.9,
    'B15': 3.4,
    'B20': 2.8,
    'B25': 2.5,
    'B30': 2.3,
    'B35': 2.1,
    'B40': 1.9,
    'B45': 1.8,
    'B50': 1.6,
    'B55': 1.5,
    'B60': 1.4,
    'B70': 1.4,
    'B80': 1.4,
    'B90': 1.4,
    'B100': 1.4
};

var low_humidity_values = {
    'B10': 5.6,
    'B15': 4.8,
    'B20': 4.0,
    'B25': 3.6,
    'B30': 3.2,
    'B35': 3.0,
    'B40': 2.8,
    'B45': 2.6,
    'B50': 2.4,
    'B55': 2.2,
    'B60': 2,
    'B70': 2,
    'B80': 2,
    'B90': 2,
    'B100': 2
};


describe("СП 63.13330.2012 (изм.1) - Таблица 6.12", function () {

    it("должна вернуть коэффициент ползучести бетона при влажности > 75%", function () {

        var array_humidity = high_humidity_values;

        for (var classname in array_humidity) {
            if (array_humidity.hasOwnProperty(classname)) {

                expect(test_function({
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                    [NORM.VAR_HUMIDITY_GROUP] : NORM.HIGH_HUMIDITY
                }).answer).toEqual(array_humidity[classname]);
            }
        }
    });

    it("должна вернуть коэффициент ползучести бетона при влажности 40-75%", function () {

        var array_humidity = middle_humidity_values;

        for (var classname in array_humidity) {
            if (array_humidity.hasOwnProperty(classname)) {

                expect(test_function({
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                    [NORM.VAR_HUMIDITY_GROUP] : NORM.MIDDLE_HUMIDITY
                }).answer).toEqual(array_humidity[classname]);
            }
        }
    });

    it("должна вернуть коэффициент ползучести бетона при влажности < 40%", function () {

        var array_humidity = low_humidity_values;

        for (var classname in array_humidity) {
            if (array_humidity.hasOwnProperty(classname)) {

                expect(test_function({
                    [NORM.VAR_CONCRETE_CLASS]: classname,
                    [NORM.VAR_HUMIDITY_GROUP] : NORM.LOW_HUMIDITY
                }).answer).toEqual(array_humidity[classname]);

            }
        }
    });

    it("должна вернуть NULL, если входные данные неверны", function () {
        expect(test_function({
            [NORM.VAR_CONCRETE_CLASS]: 'AAA',
            [NORM.VAR_HUMIDITY_GROUP] : NORM.HIGH_HUMIDITY
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_CONCRETE_CLASS]: 'B20',
            [NORM.VAR_HUMIDITY_GROUP] : -1
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
        }).answer).toBeNull();

    });
});