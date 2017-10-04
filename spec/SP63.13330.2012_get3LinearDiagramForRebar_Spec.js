var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.get3LinearDiagramForRebar;

function preciseArrayWith(array, precision) {
    return array.map(function (arr) {
        return arr.map(function (item) {
            return item.toFixed(precision);
        });
    });
}

describe("СП 63.13330.2012 (изм.1) - 3-х линейная диаграмма деформирования арматуры", function () {

    it("должна вернуть результат для А500, кратковременная нагрузка", function () {

        let E = 200000, Rs = 435, Rsc = 400;
        let es0 = Rs / E, esc0 = Rsc / E, es1 = 0.9 * Rs / E, esc1 = 0.9 * Rsc / E, es2 = 0.015, esc2 = 0.015;

        let correct = preciseArrayWith([
            [-esc2, -Rsc * 1.1],
            [-(2 * esc0 - esc1), -Rsc * 1.1],
            [-esc1, -0.9 * Rsc],
            [0, 0],
            [es1, 0.9 * Rs],
            [2 * es0 - es1, Rs * 1.1],
            [es2, Rs * 1.1]
        ], 6);


        var test = preciseArrayWith(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            "Ysi": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer, 6);

        expect(test).toEqual(correct);
    });

    it("должна вернуть результат для А500, длительная нагрузка", function () {

        let E = 200000, Rs = 435, Rsc = 435;
        let es0 = Rs / E, esc0 = Rsc / E, es1 = 0.9 * Rs / E, esc1 = 0.9 * Rsc / E, es2 = 0.015, esc2 = 0.015;

        let correct = preciseArrayWith([
            [-esc2, -Rsc * 1.1],
            [-(2 * esc0 - esc1), -Rsc * 1.1],
            [-esc1, -0.9 * Rsc],
            [0, 0],
            [es1, 0.9 * Rs],
            [2 * es0 - es1, Rs * 1.1],
            [es2, Rs * 1.1]
        ], 6);

        var test = preciseArrayWith(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            "Ysi": 1.0,
            "loadType": NORM.LONG_TERM_LOAD,
        }).answer, 6);

        expect(test).toEqual(correct);
    });

    it("должна вернуть результат для K1400, кратковременная нагрузка", function () {

        let E = 195000, Rs = 1215, Rsc = 400;
        let es0 = Rs / E + 0.002, esc0 = Rsc / E + 0.002, es1 = 0.9 * Rs / E, esc1 = 0.9 * Rsc / E, es2 = 0.015, esc2 = 0.015;

        let correct = preciseArrayWith([
            [-esc2, -Rsc * 1.1],
            [-(2 * esc0 - esc1), -Rsc * 1.1],
            [-esc1, -0.9 * Rsc],
            [0, 0],
            [es1, 0.9 * Rs],
            [2 * es0 - es1, Rs * 1.1],
            [es2, Rs * 1.1]
        ], 6);

        var test = preciseArrayWith(test_function({
            [NORM.VAR_REBAR_CLASS]: 'K1400',
            "Ysi": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer, 6);

        expect(test).toEqual(correct);
    });

    it("должна вернуть результат для K1400, длительная нагрузка", function () {

        let E = 195000, Rs = 1215, Rsc = 500;
        let es0 = Rs / E + 0.002, esc0 = Rsc / E + 0.002, es1 = 0.9 * Rs / E, esc1 = 0.9 * Rsc / E, es2 = 0.015, esc2 = 0.015;

        let correct = preciseArrayWith([
            [-esc2, -Rsc * 1.1],
            [-(2 * esc0 - esc1), -Rsc * 1.1],
            [-esc1, -0.9 * Rsc],
            [0, 0],
            [es1, 0.9 * Rs],
            [2 * es0 - es1, Rs * 1.1],
            [es2, Rs * 1.1]
        ], 6);

        var test = preciseArrayWith(test_function({
            [NORM.VAR_REBAR_CLASS]: 'K1400',
            "Ysi": 1.0,
            "loadType": NORM.LONG_TERM_LOAD,
        }).answer, 6);

        expect(test).toEqual(correct);
    });


    it("должна вернуть NULL, если класс неверен", function () {
        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: -1,
            "Ysi": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'AAA',
            "Ysi": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: null,
            "Ysi": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

    });

    it("должна вернуть NULL, если Ysi неверен", function () {
        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            "Ysi": -1,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            "Ysi": 'AAA',
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            "Ysi": null,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();
    });

    it("должна вернуть NULL, если тип нагрузки неверен", function () {
        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            "Ysi": 1.0,
            "loadType": -1,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            "Ysi": 1.0,
            "loadType": 'AAA',
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            "Ysi": 1.0,
            "loadType": null,
        }).answer).toBeNull();
    });

});