var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.getYb3;

describe("СП 63.13330.2012 (изм.1) - п.6.1.12 в)", function () {

    it("должна вернуть 1.0 для высоты слоя бетонирования <= 1.5м", function () {

        // console.log(test_function({[NORM.VAR_IS_HEIGHT_MORE_THAN_LIMIT]: false}));

        expect(test_function({
            [NORM.VAR_IS_HEIGHT_MORE_THAN_LIMIT]: false,
        }).answer).toEqual(1.0);
    });

    it("должна вернуть 0.85 для высоты слоя бетонирования > 1.5м", function () {
        expect(test_function({
            [NORM.VAR_IS_HEIGHT_MORE_THAN_LIMIT]: true,
        }).answer).toEqual(0.85);
    });

    it("должна вернуть NULL, если исходные данные не Boolean", function () {
        expect(test_function({
            [NORM.VAR_IS_HEIGHT_MORE_THAN_LIMIT]: -1,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_IS_HEIGHT_MORE_THAN_LIMIT]: 'AAA',
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_IS_HEIGHT_MORE_THAN_LIMIT]: null,
        }).answer).toBeNull();
    });
});