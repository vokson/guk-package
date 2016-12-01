var MECH = require('../lib/MechanicModule');
var test_function = MECH.calculateCoordinatesAgainstCenter;

var obj = {
    'xBasePoint': 5,
    'yBasePoint': 3,
    'isAlive': true
};


describe("Mechanic Module  - calculateCoordinatesAgainstCenter", function () {

    it("должен добавить x, y к массиву", function () {

        var test_result = test_function([obj], 10, 20);
        var result_obj = test_result[0];

        expect(result_obj['x']).toBe(-5);
        expect(result_obj['y']).toBe(-17);
    });

});