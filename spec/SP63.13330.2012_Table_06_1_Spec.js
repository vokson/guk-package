var NORM = require('../lib/SP63.13330.2012');
var test_function = NORM.table_06_1;

describe("СП 63.13330.2012 (изм.1) - Таблица 6.1", function () {
    it("должна вернуть пустой массив для неправильных аргументов", function () {
        expect(test_function({
            "type": -1,
        }).answer).toBeNull();

        expect(test_function({
            "type": NORM.LIGHT_CONCRETE,
            "density": 'D500'
        }).answer).toBeNull();
    });

    it("должна вернуть массив классов по прочности на сжатие для Тяжелого бетона", function () {
        var test = test_function({
            "type": NORM.HEAVY_CONCRETE,
        }).answer;

        var correct = ['B3,5', 'B5', 'B7,5', 'B10', 'B12,5', 'B15', 'B20', 'B25',
            'B30', 'B35', 'B40', 'B45', 'B50', 'B55', 'B60', 'B70', 'B80', 'B90', 'B100'];

        expect(test).toEqual(correct);
    });

    it("должна вернуть массив классов по прочности на сжатие для Напрягающего бетона", function () {
        var test = test_function({
            "type": NORM.PRESTRESSED_CONCRETE,
        }).answer;

        var correct = ['B20', 'B25', 'B30', 'B35', 'B40', 'B45', 'B50', 'B55', 'B60', 'B70'];

        expect(test).toEqual(correct);
    });

    it("должна вернуть массив классов по прочности на сжатие для Мелкозернистого бетона (группа А)", function () {

        var test1 = test_function({
            "type": NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A,
        }).answer;

        var test2 = test_function({
            "type": NORM.FINE_GRAIN_HEATED_CONCRETE_GROUP_A,
        }).answer;

        var correct = ['B3,5', 'B5', 'B7,5', 'B10', 'B12,5', 'B15', 'B20', 'B25', 'B30', 'B35', 'B40'];

        expect(test1).toEqual(correct);
        expect(test2).toEqual(correct);
    });

    it("должна вернуть массив классов по прочности на сжатие для Мелкозернистого бетона (группа Б)", function () {
        var test = test_function({
            "type": NORM.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B,
        }).answer;

        var correct = ['B15', 'B20', 'B25', 'B30', 'B35', 'B40', 'B45', 'B50', 'B55', 'B60'];

        expect(test).toEqual(correct);
    });

    describe("должна вернуть массив плотностей для Легкого бетона", function () {
        it(" плотностей D800, D900", function () {
            var correct = ['B2,5', 'B3,5', 'B5', 'B7,5'];

            expect(test_function({
                "type": NORM.LIGHT_CONCRETE,
                "density": 'D800',
            }).answer).toEqual(correct);

            expect(test_function({
                "type": NORM.LIGHT_CONCRETE,
                "density": 'D900',
            }).answer).toEqual(correct);
        });

        it(" плотностей D1000, D1100", function () {
            var correct = ['B2,5', 'B3,5', 'B5', 'B7,5', 'B10', 'B12,5'];

            expect(test_function({
                "type": NORM.LIGHT_CONCRETE,
                "density": 'D1000',
            }).answer).toEqual(correct);

            expect(test_function({
                "type": NORM.LIGHT_CONCRETE,
                "density": 'D1100',
            }).answer).toEqual(correct);
        });

        it(" плотностей D1200, D1300", function () {
            var correct = ['B2,5', 'B3,5', 'B5', 'B7,5', 'B10', 'B12,5', 'B15', 'B20'];

            expect(test_function({
                "type": NORM.LIGHT_CONCRETE,
                "density": 'D1200',
            }).answer).toEqual(correct);

            expect(test_function({
                "type": NORM.LIGHT_CONCRETE,
                "density": 'D1300',
            }).answer).toEqual(correct);
        });

        it(" плотностей D1400, D1500", function () {
            var correct = ['B3,5', 'B5', 'B7,5', 'B10', 'B12,5', 'B15', 'B20', 'B25', 'B30'];

            expect(test_function({
                "type": NORM.LIGHT_CONCRETE,
                "density": 'D1400',
            }).answer).toEqual(correct);

            expect(test_function({
                "type": NORM.LIGHT_CONCRETE,
                "density": 'D1500',
            }).answer).toEqual(correct);
        });

        it(" плотностей D1600, D1700", function () {
            var correct = ['B7,5', 'B10', 'B12,5', 'B15', 'B20', 'B25', 'B30', 'B35', 'B40'];

            expect(test_function({
                "type": NORM.LIGHT_CONCRETE,
                "density": 'D1600',
            }).answer).toEqual(correct);

            expect(test_function({
                "type": NORM.LIGHT_CONCRETE,
                "density": 'D1700',
            }).answer).toEqual(correct);
        });

        it(" плотностей D1800, D1900", function () {
            var correct = ['B15', 'B20', 'B25', 'B30', 'B35', 'B40'];

            expect(test_function({
                "type": NORM.LIGHT_CONCRETE,
                "density": 'D1800',
            }).answer).toEqual(correct);

            expect(test_function({
                "type": NORM.LIGHT_CONCRETE,
                "density": 'D1900',
            }).answer).toEqual(correct);
        });

        it(" плотностей D2000", function () {

            var correct = ['B25', 'B30', 'B35', 'B40'];

            expect(test_function({
                "type": NORM.LIGHT_CONCRETE,
                "density": 'D2000',
            }).answer).toEqual(correct);
        });
    });

    describe("должна вернуть массив плотностей для Поризованного бетона", function () {
        it(" плотностей D800, D900, D1000", function () {
            var correct = ['B2,5', 'B3,5', 'B5'];
            expect(test_function({
                "type": NORM.POROUS_CONCRETE,
                "density": 'D800',
            }).answer).toEqual(correct);

            expect(test_function({
                "type": NORM.POROUS_CONCRETE,
                "density": 'D900',
            }).answer).toEqual(correct);

            expect(test_function({
                "type": NORM.POROUS_CONCRETE,
                "density": 'D1000',
            }).answer).toEqual(correct);
        });

        it(" плотностей D1100, D1200, D1300", function () {
            var correct = ['B7,5'];

            expect(test_function({
                "type": NORM.POROUS_CONCRETE,
                "density": 'D1100',
            }).answer).toEqual(correct);

            expect(test_function({
                "type": NORM.POROUS_CONCRETE,
                "density": 'D1200',
            }).answer).toEqual(correct);

            expect(test_function({
                "type": NORM.POROUS_CONCRETE,
                "density": 'D1300',
            }).answer).toEqual(correct);
        });

        it(" плотности D1400", function () {
            var correct = ['B3,5', 'B5', 'B7,5'];

            expect(test_function({
                "type": NORM.POROUS_CONCRETE,
                "density": 'D1400',
            }).answer).toEqual(correct);
        });
    });

    describe("должна вернуть массив плотностей для Ячеистого неавтоклавного бетона", function () {
        it(" плотностей D600", function () {
            var correct = ['B1,5', 'B2'];

            expect(test_function({
                "type": NORM.CELL_CONCRETE,
                "density": 'D600',
            }).answer).toEqual(correct);
        });
        it(" плотностей D700", function () {
            var correct = ['B1,5', 'B2', 'B2,5'];
            expect(test_function({
                "type": NORM.CELL_CONCRETE,
                "density": 'D700',
            }).answer).toEqual(correct);
        });
        it(" плотностей D800", function () {
            var correct = ['B2', 'B2,5', 'B3,5'];
            expect(test_function({
                "type": NORM.CELL_CONCRETE,
                "density": 'D800',
            }).answer).toEqual(correct);
        });
        it(" плотностей D900", function () {
            var correct = ['B2,5', 'B3,5', 'B5'];
            expect(test_function({
                "type": NORM.CELL_CONCRETE,
                "density": 'D900',
            }).answer).toEqual(correct);
        });
        it(" плотностей D1000", function () {
            var correct = ['B5', 'B7,5'];
            expect(test_function({
                "type": NORM.CELL_CONCRETE,
                "density": 'D1000',
            }).answer).toEqual(correct);
        });
        it(" плотностей D1100", function () {
            var correct = ['B7,5', 'B10'];
            expect(test_function({
                "type": NORM.CELL_CONCRETE,
                "density": 'D1100',
            }).answer).toEqual(correct);
        });
        it(" плотностей D1200", function () {
            var correct = ['B10', 'B12,5'];
            expect(test_function({
                "type": NORM.CELL_CONCRETE,
                "density": 'D1200',
            }).answer).toEqual(correct);
        });
    });

    it("должна вернуть массив плотностей для Ячеистого автоклавного бетона", function () {
        it(" плотностей D500", function () {
            var correct = ['B1,5', 'B2', 'B2,5'];
            expect(test_function({
                "type": NORM.CELL_AUTOCLAVE_CONCRETE,
                "density": 'D500',
            }).answer).toEqual(correct);
        });
        it(" плотностей D600", function () {
            var correct = ['B1,5', 'B2', 'B2,5', 'B3,5'];
            expect(test_function({
                "type": NORM.CELL_AUTOCLAVE_CONCRETE,
                "density": 'D600',
            }).answer).toEqual(correct);
        });
        it(" плотностей D700", function () {
            var correct = ['B2', 'B2,5', 'B3,5', 'B5'];
            expect(test_function({
                "type": NORM.CELL_AUTOCLAVE_CONCRETE,
                "density": 'D700',
            }).answer).toEqual(correct);
        });
        it(" плотностей D800", function () {
            var correct = ['B2,5', 'B3,5', 'B5', 'B7,5'];
            expect(test_function({
                "type": NORM.CELL_AUTOCLAVE_CONCRETE,
                "density": 'D800',
            }).answer).toEqual(correct);
        });
        it(" плотностей D900", function () {
            var correct = ['B3,5', 'B5', 'B7,5', 'B10'];
            expect(test_function({
                "type": NORM.CELL_AUTOCLAVE_CONCRETE,
                "density": 'D900',
            }).answer).toEqual(correct);
        });
        it(" плотностей D1000", function () {
            var correct = ['B7,5', 'B10', 'B12,5'];
            expect(test_function({
                "type": NORM.CELL_AUTOCLAVE_CONCRETE,
                "density": 'D1000',
            }).answer).toEqual(correct);
        });
        it(" плотностей D1100", function () {
            var correct = ['B10', 'B12,5', 'B15', 'B17,5'];
            expect(test_function({
                "type": NORM.CELL_AUTOCLAVE_CONCRETE,
                "density": 'D1100',
            }).answer).toEqual(correct);
        });
        it(" плотностей D1200", function () {
            var correct = ['B12,5', 'B15', 'B17,5', 'B20'];
            expect(test_function({
                "type": NORM.CELL_AUTOCLAVE_CONCRETE,
                "density": 'D1200',
            }).answer).toEqual(correct);
        });
    });
});