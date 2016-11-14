var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.get2LinearDiagram;

function preciseArrayWith(array, precision) {
    return array.map(function (arr) {
        return arr.map(function (item) {
            return item.toFixed(precision);
        });
    });
}

describe("СП 63.13330.2012 (изм.1) - 2-х линейная диаграмма деформирования бетона", function () {

    it("должна вернуть результат для тяжелого бетона B25, кратковременная нагрузка", function () {

        let correct = preciseArrayWith([
            [-0.0035, -14.5],
            [-0.0015, -14.5],
            [0, 0],
            [0.00008, 1.05],
            [0.00015, 1.05]
        ], 6);

        let test = preciseArrayWith(test_function(NORM.HEAVY_CONCRETE, 'B25', NORM.SHORT_TERM_LOAD), 6);


        // console.log('');
        // console.log('TEST:   ' + test);
        // console.log('CORRECT:' + correct);

        expect(test).toEqual(correct);
    });

    it("должна вернуть результат для тяжелого бетона B25, длительная нагрузка", function () {

        let Rb = 14.5, Rbt = 1.05, eb1 = 0.0028, ebt1 = 0.00022, eb2 = 0.0048, ebt2 = 0.00031;

        let correct = preciseArrayWith([
            [-eb2, -Rb],
            [-eb1, -Rb],
            [0, 0],
            [ebt1, Rbt],
            [ebt2, Rbt]
        ], 6);

        let test = preciseArrayWith(test_function(NORM.HEAVY_CONCRETE, 'B25', NORM.LONG_TERM_LOAD, NORM.MIDDLE_HUMIDITY), 6);


        // console.log('');
        // console.log('TEST:   ' + test);
        // console.log('CORRECT:' + correct);

        expect(test).toEqual(correct);
    });

    it("должна вернуть результат для тяжелого бетона B80, кратковременная нагрузка", function () {

        let correct = preciseArrayWith(
            [
                [-0.0031333, -41],
                [-0.0015, -41],
                [0, 0],
                [0.00008, 2.1],
                [0.00015, 2.1]
            ], 6);

        let test = preciseArrayWith(test_function(NORM.HEAVY_CONCRETE, 'B80', NORM.SHORT_TERM_LOAD), 6);

        // console.log('');
        // console.log('TEST:   ' + test);
        // console.log('CORRECT:' + correct);

        expect(test).toEqual(correct);
    });

    it("должна вернуть NULL, если тип неверен", function () {
        expect(test_function(-1, 'B15', NORM.SHORT_TERM_LOAD)).toBe(null);
        expect(test_function('AAA', 'B15', NORM.SHORT_TERM_LOAD)).toBe(null);
        expect(test_function(NORM.LIGHT_CONCRETE, 'B15', NORM.SHORT_TERM_LOAD)).toBe(null);
        expect(test_function(NORM.POROUS_CONCRETE, 'B15', NORM.SHORT_TERM_LOAD)).toBe(null);
        expect(test_function(NORM.CELL_CONCRETE, 'B15', NORM.SHORT_TERM_LOAD)).toBe(null);
        expect(test_function(NORM.CELL_AUTOCLAVE_CONCRETE, 'B15', NORM.SHORT_TERM_LOAD)).toBe(null);

    });

    it("должна вернуть NULL, если класс неверен", function () {
        expect(test_function(NORM.HEAVY_CONCRETE, -1, NORM.SHORT_TERM_LOAD)).toBe(null);
        expect(test_function(NORM.HEAVY_CONCRETE, 'B16', NORM.SHORT_TERM_LOAD)).toBe(null);
    });

    it("должна вернуть NULL, если тип нагрузки неверен", function () {
        expect(test_function(NORM.HEAVY_CONCRETE, 'B15', -1)).toBe(null);
        expect(test_function(NORM.HEAVY_CONCRETE, 'B15', 'AAA')).toBe(null);
    });

    it("должна вернуть NULL, если группа по влажности неверна", function () {
        expect(test_function(NORM.HEAVY_CONCRETE, 'B15', NORM.LONG_TERM_LOAD, -1)).toBe(null);
        expect(test_function(NORM.HEAVY_CONCRETE, 'B15', NORM.LONG_TERM_LOAD, 'AAA')).toBe(null);
    });
});