var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.getYb2;

describe("СП 63.13330.2012 (изм.1) - п.6.1.12 б)", function () {

    it("должна вернуть 1.0 для железобетонных конструкций", function () {
        expect(test_function({
            [NORM.VAR_IS_ONLY_CONCRETE]: false,
        }).answer).toEqual(1.0);
    });

    it("должна вернуть 0.9 для бетонных конструкций", function () {
        expect(test_function({
            [NORM.VAR_IS_ONLY_CONCRETE]: true,
        }).answer).toEqual(0.9);
    });

    it("должна вернуть NULL, если исходные данные не Boolean", function () {

        expect(test_function({
            [NORM.VAR_IS_ONLY_CONCRETE]: -1,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_IS_ONLY_CONCRETE]: 'AAA',
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_IS_ONLY_CONCRETE]: null,
        }).answer).toBeNull();
    });
});