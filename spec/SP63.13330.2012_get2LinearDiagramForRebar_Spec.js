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

        let test = preciseArrayWith(test_function('A500', 1.0, NORM.SHORT_TERM_LOAD), 6);

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

        let test = preciseArrayWith(test_function('A500', 1.0, NORM.LONG_TERM_LOAD), 6);

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

        let test = preciseArrayWith(test_function('K1400', 1.0, NORM.SHORT_TERM_LOAD), 6);

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

        let test = preciseArrayWith(test_function('K1400', 1.0, NORM.LONG_TERM_LOAD), 6);

        expect(test).toEqual(correct);
    });



    it("должна вернуть NULL, если класс неверен", function () {
        expect(test_function(-1, 1.0, NORM.SHORT_TERM_LOAD)).toBe(null);
        expect(test_function('AAA', 1.0, NORM.SHORT_TERM_LOAD)).toBe(null);
        expect(test_function(null, 1.0, NORM.SHORT_TERM_LOAD)).toBe(null);
    });

    it("должна вернуть NULL, если Ysi неверен", function () {
        expect(test_function('A500', -1, NORM.SHORT_TERM_LOAD)).toBe(null);
        expect(test_function('A500', 'AAA', NORM.SHORT_TERM_LOAD)).toBe(null);
        expect(test_function('A500', null, NORM.SHORT_TERM_LOAD)).toBe(null);
    });

    it("должна вернуть NULL, если тип нагрузки неверен", function () {
        expect(test_function('A500', 1.0, -1)).toBe(null);
        expect(test_function('A500', 1.0, 'AAA')).toBe(null);
        expect(test_function('A500', 1.0, null)).toBe(null);
    });

});