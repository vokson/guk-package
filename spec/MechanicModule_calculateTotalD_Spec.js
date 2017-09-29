var MECH = require('../lib/MechanicModule');
var test_function = MECH.calculateTotalD;

var obj1 = {
    'D11': 1,
    'D22': 2,
    'D12': 3,
    'D13': 4,
    'D23': 5,
    'D33': 6
};

var obj2 = {
    'D11': 7,
    'D22': 8,
    'D12': 9,
    'D13': 10,
    'D23': 11,
    'D33': 12
};


describe("Mechanic Module  - calculateTotalD", function () {

    it("должна вернуть правильный результат от [obj1]", function () {

        var correct = [
            obj1['D11'],
            obj1['D12'],
            obj1['D13'],
            obj1['D22'],
            obj1['D23'],
            obj1['D33']
        ];

        expect(test_function([obj1])).toEqual(correct);
    });

    it("должна вернуть правильный результат от [obj1, obj2]", function () {

        var correct = [
            obj1['D11'] + obj2['D11'],
            obj1['D12'] + obj2['D12'],
            obj1['D13'] + obj2['D13'],
            obj1['D22'] + obj2['D22'],
            obj1['D23'] + obj2['D23'],
            obj1['D33'] + obj2['D33']
        ];

        expect(test_function([obj1, obj2])).toEqual(correct);
    });

});