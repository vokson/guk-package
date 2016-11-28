var MECH = require('../lib/MechanicModule');
var test_function = MECH.getCenterOfGravity;

const PRECISION = 3;

var obj1 = {
    'xBasePoint': 5,
    'yBasePoint': 3,
    'square': 10,
    'youngModulusRatio': 1,
    'isAlive': true
};

var obj2 = {
    'xBasePoint': 20,
    'yBasePoint': 14,
    'square': 4,
    'youngModulusRatio': 2,
    'isAlive': true
};

var obj3 = {
    'xBasePoint': 15,
    'yBasePoint': 10,
    'square': 7,
    'youngModulusRatio': 3,
    'isAlive': true
};
var obj4 = {
    'xBasePoint': 1,
    'yBasePoint': 1,
    'square': 3,
    'youngModulusRatio': 4,
    'isAlive': true
};

function preciseArrayWith(array, precision) {
    return array.map(function (item) {
        return item.toFixed(precision);
    });
}

describe("Mechanic Module  - getCenterOfGravity", function () {

    it("Объекты 1,2,3", function () {
        var test_array = [obj1, obj2, obj3];
        var x = 525 / 39, y = 352 / 39;

        var test_result = preciseArrayWith(test_function(test_array), PRECISION);
        var expected_result = preciseArrayWith([x, y], PRECISION);

        expect(test_result).toEqual(expected_result);
    });

    it("Объекты 1,2,3 + неживой", function () {
        var obj = {
            'xBasePoint': 1,
            'yBasePoint': 1,
            'square': 1,
            'youngModulusRatio': null,
            'isAlive': false
        };

        var test_array = [obj1, obj2, obj3, obj];
        var x = 525 / 39, y = 352 / 39;

        var test_result = preciseArrayWith(test_function(test_array), PRECISION);
        var expected_result = preciseArrayWith([x, y], PRECISION);

        expect(test_result).toEqual(expected_result);
    });

    it("Объекты 2,3,4", function () {
        var test_array = [obj2, obj3, obj4];
        var x = 487 / 41, y = 334 / 41;

        var test_result = preciseArrayWith(test_function(test_array), PRECISION);
        var expected_result = preciseArrayWith([x, y], PRECISION);

        expect(test_result).toEqual(expected_result);
    });

    it("Объекты 1,2,4", function () {
        var test_array = [obj1, obj2, obj4];
        var x = 222 / 30, y = 154 / 30;

        var test_result = preciseArrayWith(test_function(test_array), PRECISION);
        var expected_result = preciseArrayWith([x, y], PRECISION);

        expect(test_result).toEqual(expected_result);
    });

    it("должна вернуть NULL, если xBasePoint неверен", function () {

        var obj_null = {
            'xBasePoint': null,
            'yBasePoint': 1,
            'square': 1,
            'youngModulusRatio': 1,
            'isAlive': true
        };

        var obj_undefined = {
            'yBasePoint': 1,
            'square': 1,
            'youngModulusRatio': 1,
            'isAlive': true
        };

        var obj_not_number = {
            'xBasePoint': 'AAA',
            'yBasePoint': 1,
            'square': 1,
            'youngModulusRatio': 1,
            'isAlive': true
        };

        expect(test_function([obj_null])).toBeNull();
        expect(test_function([obj_undefined])).toBeNull();
        expect(test_function([obj_not_number])).toBeNull();
    });

    it("должна вернуть NULL, если yBasePoint неверен", function () {

        var obj_null = {
            'xBasePoint': 1,
            'yBasePoint': null,
            'square': 1,
            'youngModulusRatio': 1,
            'isAlive': true
        };

        var obj_undefined = {
            'xBasePoint': 1,
            'square': 1,
            'youngModulusRatio': 1,
            'isAlive': true
        };

        var obj_not_number = {
            'xBasePoint': 1,
            'yBasePoint': 'AAA',
            'square': 1,
            'youngModulusRatio': 1,
            'isAlive': true
        };

        expect(test_function([obj_null])).toBeNull();
        expect(test_function([obj_undefined])).toBeNull();
        expect(test_function([obj_not_number])).toBeNull();
    });

    it("должна вернуть NULL, если square неверен", function () {

        var obj_null = {
            'xBasePoint': 1,
            'yBasePoint': 1,
            'square': null,
            'youngModulusRatio': 1,
            'isAlive': true
        };

        var obj_undefined = {
            'xBasePoint': 1,
            'yBasePoint': 1,
            'youngModulusRatio': 1,
            'isAlive': true
        };

        var obj_not_number = {
            'xBasePoint': 1,
            'yBasePoint': 1,
            'square': 'AAA',
            'youngModulusRatio': 1,
            'isAlive': true
        };

        var obj_negative_number = {
            'xBasePoint': 1,
            'yBasePoint': 1,
            'square': -1,
            'youngModulusRatio': 1,
            'isAlive': true
        };

        expect(test_function([obj_null])).toBeNull();
        expect(test_function([obj_undefined])).toBeNull();
        expect(test_function([obj_not_number])).toBeNull();
        expect(test_function([obj_negative_number])).toBeNull();
    });

    it("должна вернуть NULL, если youngModulusRatio неверен", function () {

        var obj_null = {
            'xBasePoint': 1,
            'yBasePoint': 1,
            'square': 1,
            'youngModulusRatio': null,
            'isAlive': true
        };

        var obj_undefined = {
            'xBasePoint': 1,
            'yBasePoint': 1,
            'square': 1,
            'isAlive': true
        };

        var obj_not_number = {
            'xBasePoint': 1,
            'yBasePoint': 1,
            'square': 1,
            'youngModulusRatio': 'AAA',
            'isAlive': true
        };

        var obj_negative_number = {
            'xBasePoint': 1,
            'yBasePoint': 1,
            'square': 1,
            'youngModulusRatio': -1,
            'isAlive': true
        };

        expect(test_function([obj_null])).toBeNull();
        expect(test_function([obj_undefined])).toBeNull();
        expect(test_function([obj_not_number])).toBeNull();
        expect(test_function([obj_negative_number])).toBeNull();
    });

    it("должна вернуть NULL, если общая площадь = 0", function () {

        var obj = {
            'xBasePoint': 1,
            'yBasePoint': 1,
            'square': 0,
            'youngModulusRatio': null,
            'isAlive': true
        };

        expect(test_function([obj, obj])).toBeNull();
    });

});