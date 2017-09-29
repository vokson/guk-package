var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.get3LinearDiagramForConcrete;

function preciseArrayWith(array, precision) {
    return array.map(function (arr) {
        return arr.map(function (item) {
            return item.toFixed(precision);
        });
    });
}

describe("СП 63.13330.2012 (изм.1) - 3-х линейная диаграмма деформирования бетона", function () {

    it("должна вернуть результат для тяжелого бетона B25, кратковременная нагрузка", function () {

        let correct = preciseArrayWith([
            [-0.0035, -14.5],
            [-0.002, -14.5],
            [-0.00029, -8.7],
            [0, 0],
            [0.000021, 0.63],
            [0.0001, 1.05],
            [0.00015, 1.05]
        ], 6);

        var test = preciseArrayWith(test_function({
            "type": NORM.HEAVY_CONCRETE,
            "classname": 'B25',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer, 6);


        // console.log('');
        // console.log('TEST:   ' + test);
        // console.log('CORRECT:' + correct);

        expect(test).toEqual(correct);
    });

    it("должна вернуть результат для тяжелого бетона B25, длительная нагрузка", function () {

        let Rb = 14.5, Rbt = 1.05, Eb = 30000 / (1 + 2.5), eb0 = 0.0034, ebt0 = 0.00024, eb2 = 0.0048, ebt2 = 0.00031;

        let eb1 = 0.6 * Rb / Eb;
        let ebt1 = 0.6 * Rbt / Eb;

        let correct = preciseArrayWith([
            [-eb2, -Rb],
            [-eb0, -Rb],
            [-eb1, -0.6 * Rb],
            [0, 0],
            [ebt1, 0.6 * Rbt],
            [ebt0, Rbt],
            [ebt2, Rbt]
        ], 6);

        let test = preciseArrayWith(test_function({
            "type": NORM.HEAVY_CONCRETE,
            "classname": 'B25',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.LONG_TERM_LOAD,
            "humidity": NORM.MIDDLE_HUMIDITY
        }).answer, 6);


        // console.log('');
        // console.log('TEST:   ' + test);
        // console.log('CORRECT:' + correct);

        expect(test).toEqual(correct);
    });

    it("должна вернуть результат для тяжелого бетона B80, кратковременная нагрузка", function () {

        let correct = preciseArrayWith(
            [
                [-0.0031333, -41],
                [-0.002, -41],
                [-24.6 / 42000, -24.6],
                [0, 0],
                [1.26 / 42000, 1.26],
                [0.0001, 2.1],
                [0.00015, 2.1]
            ], 6);

        let test = preciseArrayWith(test_function({
            "type": NORM.HEAVY_CONCRETE,
            "classname": 'B80',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer, 6);

        // console.log('');
        // console.log('TEST:   ' + test);
        // console.log('CORRECT:' + correct);
        //
        expect(test).toEqual(correct);
    });

    it("должна вернуть NULL, если тип неверен", function () {
        expect(test_function({
            "type": -1,
            "classname": 'B15',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            "type": "AAA",
            "classname": 'B15',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.LIGHT_CONCRETE,
            "classname": 'B15',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.POROUS_CONCRETE,
            "classname": 'B15',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.CELL_CONCRETE,
            "classname": 'B15',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.CELL_AUTOCLAVE_CONCRETE,
            "classname": 'B15',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

    });

    it("должна вернуть NULL, если класс ниже B10 при продолжительной нагрузке", function () {
        expect(test_function({
            "type": NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
            "classname": 'B3,5',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.LONG_TERM_LOAD,
            "humidity": NORM.LOW_HUMIDITY
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
            "classname": 'B5',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.LONG_TERM_LOAD,
            "humidity": NORM.LOW_HUMIDITY
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
            "classname": 'B7,5',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.LONG_TERM_LOAD,
            "humidity": NORM.LOW_HUMIDITY
        }).answer).toBeNull();
    });


});