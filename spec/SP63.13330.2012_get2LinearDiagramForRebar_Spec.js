var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.get2LinearDiagramForRebar;

function preciseArrayWith(array, precision) {
    return array.map(function (arr) {
        return arr.map(function (item) {
            return item.toFixed(precision);
        });
    });
}

describe("СП 63.13330.2012 (изм.1) - 2-х линейная диаграмма деформирования арматуры", function () {

    it("должна вернуть результат для А500, кратковременная нагрузка", function () {

        let correct = preciseArrayWith([
            [-0.025, -400],
            [-0.002, -400],
            [0, 0],
            [0.002175, 435],
            [0.025, 435]
        ], 6);

        var test = preciseArrayWith(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            [NORM.VAR_Ysi]: 1.0,
            [NORM.VAR_LOAD_TYPE]: NORM.SHORT_TERM_LOAD,
        }).answer, 6);

        expect(test).toEqual(correct);
    });

    it("должна вернуть результат для А500, длительная нагрузка", function () {

        let correct = preciseArrayWith([
            [-0.025, -435],
            [-0.002175, -435],
            [0, 0],
            [0.002175, 435],
            [0.025, 435]
        ], 6);

        var test = preciseArrayWith(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            [NORM.VAR_Ysi]: 1.0,
            [NORM.VAR_LOAD_TYPE]: NORM.LONG_TERM_LOAD,
        }).answer, 6);

        expect(test).toEqual(correct);
    });

    it("должна вернуть результат для K1400, кратковременная нагрузка", function () {

        let correct = preciseArrayWith([
            [-0.025, -400],
            [-(400 / 195000 + 0.002), -400],
            [0, 0],
            [1215 / 195000 + 0.002, 1215],
            [0.025, 1215]
        ], 6);

        var test = preciseArrayWith(test_function({
            [NORM.VAR_REBAR_CLASS]: 'K1400',
            [NORM.VAR_Ysi]: 1.0,
            [NORM.VAR_LOAD_TYPE]: NORM.SHORT_TERM_LOAD,
        }).answer, 6);

        expect(test).toEqual(correct);
    });

    it("должна вернуть результат для K1400, длительная нагрузка", function () {

        let correct = preciseArrayWith([
            [-0.025, -500],
            [-(500 / 195000 + 0.002), -500],
            [0, 0],
            [1215 / 195000 + 0.002, 1215],
            [0.025, 1215]
        ], 6);

        var test = preciseArrayWith(test_function({
            [NORM.VAR_REBAR_CLASS]: 'K1400',
            [NORM.VAR_Ysi]: 1.0,
            [NORM.VAR_LOAD_TYPE]: NORM.LONG_TERM_LOAD,
        }).answer, 6);

        expect(test).toEqual(correct);
    });



    it("должна вернуть NULL, если класс неверен", function () {
        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: -1,
            [NORM.VAR_Ysi]: 1.0,
            [NORM.VAR_LOAD_TYPE]: NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'AAA',
            [NORM.VAR_Ysi]: 1.0,
            [NORM.VAR_LOAD_TYPE]: NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: null,
            [NORM.VAR_Ysi]: 1.0,
            [NORM.VAR_LOAD_TYPE]: NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

    });

    it("должна вернуть NULL, если Ysi неверен", function () {
        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            [NORM.VAR_Ysi]: -1,
            [NORM.VAR_LOAD_TYPE]: NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            [NORM.VAR_Ysi]: 'AAA',
            [NORM.VAR_LOAD_TYPE]: NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            [NORM.VAR_Ysi]: null,
            [NORM.VAR_LOAD_TYPE]: NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();
    });

    it("должна вернуть NULL, если тип нагрузки неверен", function () {
        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            [NORM.VAR_Ysi]: 1.0,
            [NORM.VAR_LOAD_TYPE]: -1,
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            [NORM.VAR_Ysi]: 1.0,
            [NORM.VAR_LOAD_TYPE]: 'AAA',
        }).answer).toBeNull();

        expect(test_function({
            [NORM.VAR_REBAR_CLASS]: 'A500',
            [NORM.VAR_Ysi]: 1.0,
            [NORM.VAR_LOAD_TYPE]: null,
        }).answer).toBeNull();
    });

});