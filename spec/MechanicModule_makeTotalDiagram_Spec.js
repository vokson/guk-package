var MECH = require('../lib/MechanicModule');
var test_function = MECH.makeTotalDiagram;

var obj1 = {
    'diagram': [
        [-10, 5], [-5, 10], [0, 1], [5, 3], [7, 7]
    ],
    'isAlive': true
};

var obj2 = {
    'diagram': [
        [-7, -6], [-5, -5], [0, 1], [1, 2], [5, 0], [10, 10]
    ],
    'isAlive': true
};

var dead_obj = {
    'diagram': [
        [-10, 100], [0, 0], [10, 100]
    ],
    'isAlive': false
};

var totalDiagram = [
    [-10, 5], [-7, 2], [-5, 5], [0, 2], [1, 3.4], [5, 3], [7, 11], [10, 10]
];


describe("Mechanic Module  - makeTotalDiagram", function () {

    it("obj1 + obj2", function () {
        expect(test_function([obj1, obj2], 'diagram')).toEqual(totalDiagram);
    });

    it("obj1 + dead_obj", function () {
        expect(test_function([obj1, dead_obj], 'diagram')).toEqual(obj1['diagram']);
    });

});