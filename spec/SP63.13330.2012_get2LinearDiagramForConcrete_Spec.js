var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.get2LinearDiagramForConcrete;

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

       var test = preciseArrayWith(test_function({
            "type": NORM.HEAVY_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B25',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer, 6);


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

        let test = preciseArrayWith(test_function({
            "type": NORM.HEAVY_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B25',
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
                [-0.0015, -41],
                [0, 0],
                [0.00008, 2.1],
                [0.00015, 2.1]
            ], 6);

        let test = preciseArrayWith(test_function({
            "type": NORM.HEAVY_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B80',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer, 6);

        // console.log('');
        // console.log('TEST:   ' + test);
        // console.log('CORRECT:' + correct);

        expect(test).toEqual(correct);
    });

    it("должна вернуть NULL, если тип неверен", function () {
        expect(test_function({
            "type": -1,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            "type": "AAA",
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.LIGHT_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.POROUS_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.CELL_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.CELL_AUTOCLAVE_CONCRETE,
            [NORM.VAR_CONCRETE_CLASS]: 'B15',
            "Ybi": 1.0,
            "Ybti": 1.0,
            "loadType": NORM.SHORT_TERM_LOAD,
        }).answer).toBeNull();

    });

});