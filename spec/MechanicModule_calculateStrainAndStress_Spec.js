var MECH = require('../lib/MechanicModule');
var test_function = MECH.calculateStrainAndStress;

var obj = {
    'diagram': [
        [-10, -10],
        [0, 0],
        [5, 10]
    ],
    'x': 10,
    'y': 20,
    'isAlive': true
};

describe("Mechanic Module  - calculateStrainAndStress", function () {

    it("должна вернуть правильный результат, если e0 = 0.1, rx = 0, ry = 0", function () {

        var e0 = 0.1, rx = 0, ry = 0;
        var result = test_function([obj], e0, rx, ry)[0];

        expect(result['strain']).toBe(0.1);
        expect(result['stress']).toBe(0.2);
        expect(result['stressStrainRatio']).toBe(2);
        expect(result['isAlive']).toBe(true);
    });

    it("должна вернуть правильный результат, если e0 = 0, rx = 0.1, ry = 0", function () {

        var e0 = 0, rx = 0.1, ry = 0;
        var result = test_function([obj], e0, rx, ry)[0];

        expect(result['strain']).toBe(1);
        expect(result['stress']).toBe(2);
        expect(result['stressStrainRatio']).toBe(2);
        expect(result['isAlive']).toBe(true);
    });

    it("должна вернуть правильный результат, если e0 = 0, rx = 0, ry = -0.5", function () {

        var e0 = 0, rx = 0, ry = -0.5;
        var result = test_function([obj], e0, rx, ry)[0];

        expect(result['strain']).toBe(-10);
        expect(result['stress']).toBe(-10);
        expect(result['stressStrainRatio']).toBe(1);
        expect(result['isAlive']).toBe(true);
    });

    it("должна вернуть правильный результат, если e0 = 1, rx = 1, ry = 1", function () {

        var e0 = 1, rx = 1, ry = 1;
        var result = test_function([obj], e0, rx, ry)[0];

        expect(result['strain']).toBe(31);
        expect(result['stress']).toBeNull();
        expect(result['stressStrainRatio']).toBe(1);
        expect(result['isAlive']).toBe(false);
    });

    it("должна вернуть правильный результат, если e0 = 0, rx = 0, ry = 0", function () {

        var e0 = 0, rx = 0, ry = 0;
        var result = test_function([obj], e0, rx, ry)[0];

        expect(result['strain']).toBe(0);
        expect(result['stress']).toBe(0);
        expect(result['stressStrainRatio']).toBe(1);
        expect(result['isAlive']).toBe(true);
    });


});