var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.getYb5;

describe("СП 63.13330.2012 (изм.1) - п.6.1.12", function () {

    it("должна вернуть 1.0 для расчетной температуры нар. воздуха в хол. период >= -40", function () {
        expect(test_function({
            [NORM.VAR_IS_COLD_TEMPERATURE_MORE_THAN_MINUS40]: true,
        }).answer).toEqual(1.0);
    });

    it("должна вернуть NULL для расчетной температуры нар. воздуха в хол. период < -40", function () {
        expect(test_function({
            [NORM.VAR_IS_COLD_TEMPERATURE_MORE_THAN_MINUS40]: false,
        }).answer).toBeNull();
    });

    it("должна вернуть NULL, если исходные данные не Boolean", function () {
        expect(test_function({
            [NORM.VAR_IS_COLD_TEMPERATURE_MORE_THAN_MINUS40]: -1,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_IS_COLD_TEMPERATURE_MORE_THAN_MINUS40]: 'AAA',
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_IS_COLD_TEMPERATURE_MORE_THAN_MINUS40]: null,
        }).answer).toBeNull();
    });
});