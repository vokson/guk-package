var MECH = require('../lib/MechanicModule');
var test_function = MECH.calculateD;

var obj = {
    'x': 10,
    'y': 20,
    'square': 4,
    'stressStrainRatio': 0.5
};

describe("Mechanic Module  - calculateStrainAndStress", function () {

    it("должна вернуть правильный результат", function () {

        var result = test_function([obj])[0];

        expect(result['D11']).toBe(200);
        expect(result['D22']).toBe(800);
        expect(result['D12']).toBe(400);
        expect(result['D13']).toBe(20);
        expect(result['D23']).toBe(40);
        expect(result['D33']).toBe(2);
    });

});