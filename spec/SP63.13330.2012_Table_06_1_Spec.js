var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_1;

describe("СП 63.13330.2012 (изм.1) - Таблица 6.1", function () {
    it("должна вернуть пустой массив для неправильных аргументов", function () {
        expect(test_function(-1)).toEqual([]);
        expect(test_function(NORM.LIGHT_CONCRETE, 'D500')).toEqual([]);
    });

    it("должна вернуть массив классов по прочности на сжатие для Тяжелого бетона", function () {
        var test = test_function(NORM.HEAVY_CONCRETE);
        var correct = ['B3,5', 'B5', 'B7,5', 'B10', 'B12,5', 'B15', 'B20', 'B25',
            'B30', 'B35', 'B40', 'B45', 'B50', 'B55', 'B60', 'B70', 'B80', 'B90', 'B100'];

        expect(test).toEqual(correct);
    });

    it("должна вернуть массив классов по прочности на сжатие для Напрягающего бетона", function () {
        var test = test_function(NORM.PRESTRESSED_CONCRETE);
        var correct = ['B20', 'B25', 'B30', 'B35', 'B40', 'B45', 'B50', 'B55', 'B60', 'B70'];

        expect(test).toEqual(correct);
    });

    it("должна вернуть массив классов по прочности на сжатие для Мелкозернистого бетона (группа А)", function () {
        var test_1 = test_function(NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A);
        var test_2 = test_function(NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A);
        var correct = ['B3,5', 'B5', 'B7,5', 'B10', 'B12,5', 'B15', 'B20', 'B25', 'B30', 'B35', 'B40'];

        expect(test_1).toEqual(correct);
        expect(test_2).toEqual(correct);
    });

    it("должна вернуть массив классов по прочности на сжатие для Мелкозернистого бетона (группа Б)", function () {
        var test = test_function(NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B);
        var correct = ['B15', 'B20', 'B25', 'B30', 'B35', 'B40', 'B45', 'B50', 'B55', 'B60'];

        expect(test).toEqual(correct);
    });

    describe("должна вернуть массив плотностей для Легкого бетона", function () {
        it(" плотностей D800, D900", function () {
            var correct = ['B2,5', 'B3,5', 'B5', 'B7,5'];
            expect(test_function(NORM.LIGHT_CONCRETE, 'D800')).toEqual(correct);
            expect(test_function(NORM.LIGHT_CONCRETE, 'D900')).toEqual(correct);
        });
        it(" плотностей D1000, D1100", function () {
            var correct = ['B2,5', 'B3,5', 'B5', 'B7,5', 'B10', 'B12,5'];
            expect(test_function(NORM.LIGHT_CONCRETE, 'D1000')).toEqual(correct);
            expect(test_function(NORM.LIGHT_CONCRETE, 'D1100')).toEqual(correct);
        });
        it(" плотностей D1200, D1300", function () {
            var correct = ['B2,5', 'B3,5', 'B5', 'B7,5', 'B10', 'B12,5', 'B15', 'B20'];
            expect(test_function(NORM.LIGHT_CONCRETE, 'D1200')).toEqual(correct);
            expect(test_function(NORM.LIGHT_CONCRETE, 'D1300')).toEqual(correct);
        });
        it(" плотностей D1400, D1500", function () {
            var correct = ['B3,5', 'B5', 'B7,5', 'B10', 'B12,5', 'B15', 'B20', 'B25', 'B30'];
            expect(test_function(NORM.LIGHT_CONCRETE, 'D1400')).toEqual(correct);
            expect(test_function(NORM.LIGHT_CONCRETE, 'D1500')).toEqual(correct);
        });
        it(" плотностей D1600, D1700", function () {
            var correct = ['B7,5', 'B10', 'B12,5', 'B15', 'B20', 'B25', 'B30', 'B35', 'B40'];
            expect(test_function(NORM.LIGHT_CONCRETE, 'D1600')).toEqual(correct);
            expect(test_function(NORM.LIGHT_CONCRETE, 'D1700')).toEqual(correct);
        });
        it(" плотностей D1800, D1900", function () {
            var correct = ['B15', 'B20', 'B25', 'B30', 'B35', 'B40'];
            expect(test_function(NORM.LIGHT_CONCRETE, 'D1800')).toEqual(correct);
            expect(test_function(NORM.LIGHT_CONCRETE, 'D1900')).toEqual(correct);
        });
        it(" плотностей D2000", function () {
            var correct = ['B25', 'B30', 'B35', 'B40'];
            expect(test_function(NORM.LIGHT_CONCRETE, 'D2000')).toEqual(correct);
        });
    });

    describe("должна вернуть массив плотностей для Поризованного бетона", function () {
        it(" плотностей D800, D900, D1000", function () {
            var correct = ['B2,5', 'B3,5', 'B5'];
            expect(test_function(NORM.POROUS_CONCRETE, 'D800')).toEqual(correct);
            expect(test_function(NORM.POROUS_CONCRETE, 'D900')).toEqual(correct);
            expect(test_function(NORM.POROUS_CONCRETE, 'D1000')).toEqual(correct);
        });
        it(" плотностей D1100, D1200, D1300", function () {
            var correct = ['B7,5'];
            expect(test_function(NORM.POROUS_CONCRETE, 'D1100')).toEqual(correct);
            expect(test_function(NORM.POROUS_CONCRETE, 'D1200')).toEqual(correct);
            expect(test_function(NORM.POROUS_CONCRETE, 'D1300')).toEqual(correct);
        });
        it(" плотности D1400", function () {
            var correct = ['B3,5', 'B5', 'B7,5'];
            expect(test_function(NORM.POROUS_CONCRETE, 'D1400')).toEqual(correct);
        });
    });

    describe("должна вернуть массив плотностей для Ячеистого неавтоклавного бетона", function () {
        it(" плотностей D600", function () {
            var correct = ['B1,5', 'B2'];
            expect(test_function(NORM.CELL_CONCRETE, 'D600')).toEqual(correct);
        });
        it(" плотностей D700", function () {
            var correct = ['B1,5', 'B2', 'B2,5'];
            expect(test_function(NORM.CELL_CONCRETE, 'D700')).toEqual(correct);
        });
        it(" плотностей D800", function () {
            var correct = ['B2', 'B2,5', 'B3,5'];
            expect(test_function(NORM.CELL_CONCRETE, 'D800')).toEqual(correct);
        });
        it(" плотностей D900", function () {
            var correct = ['B2,5', 'B3,5', 'B5'];
            expect(test_function(NORM.CELL_CONCRETE, 'D900')).toEqual(correct);
        });
        it(" плотностей D1000", function () {
            var correct = ['B5', 'B7,5'];
            expect(test_function(NORM.CELL_CONCRETE, 'D1000')).toEqual(correct);
        });
        it(" плотностей D1100", function () {
            var correct = ['B7,5', 'B10'];
            expect(test_function(NORM.CELL_CONCRETE, 'D1100')).toEqual(correct);
        });
        it(" плотностей D1200", function () {
            var correct = ['B10', 'B12,5'];
            expect(test_function(NORM.CELL_CONCRETE, 'D1200')).toEqual(correct);
        });
    });

    it("должна вернуть массив плотностей для Ячеистого автоклавного бетона", function () {
        it(" плотностей D500", function () {
            var correct = ['B1,5', 'B2', 'B2,5'];
            expect(test_function(NORM.CELL_AUTOCLAVE_CONCRETE, 'D500')).toEqual(correct);
        });
        it(" плотностей D600", function () {
            var correct = ['B1,5', 'B2', 'B2,5', 'B3,5'];
            expect(test_function(NORM.CELL_AUTOCLAVE_CONCRETE, 'D600')).toEqual(correct);
        });
        it(" плотностей D700", function () {
            var correct = ['B2', 'B2,5', 'B3,5', 'B5'];
            expect(test_function(NORM.CELL_AUTOCLAVE_CONCRETE, 'D700')).toEqual(correct);
        });
        it(" плотностей D800", function () {
            var correct = ['B2,5', 'B3,5', 'B5', 'B7,5'];
            expect(test_function(NORM.CELL_AUTOCLAVE_CONCRETE, 'D800')).toEqual(correct);
        });
        it(" плотностей D900", function () {
            var correct = ['B3,5', 'B5', 'B7,5', 'B10'];
            expect(test_function(NORM.CELL_AUTOCLAVE_CONCRETE, 'D900')).toEqual(correct);
        });
        it(" плотностей D1000", function () {
            var correct = ['B7,5', 'B10', 'B12,5'];
            expect(test_function(NORM.CELL_AUTOCLAVE_CONCRETE, 'D1000')).toEqual(correct);
        });
        it(" плотностей D1100", function () {
            var correct = ['B10', 'B12,5', 'B15', 'B17,5'];
            expect(test_function(NORM.CELL_AUTOCLAVE_CONCRETE, 'D1100')).toEqual(correct);
        });
        it(" плотностей D1200", function () {
            var correct = ['B12,5', 'B15', 'B17,5', 'B20'];
            expect(test_function(NORM.CELL_AUTOCLAVE_CONCRETE, 'D1200')).toEqual(correct);
        });
    });
});