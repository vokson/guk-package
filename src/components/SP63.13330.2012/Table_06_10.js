import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {
        [CONST.VAR_CONCRETE_TYPE]: {
            "oneOf": [
                {"const": CONST.HEAVY_CONCRETE},
                {"const": CONST.PRESTRESSED_CONCRETE},
                {"const": CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A},
                {"const": CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A},
                {"const": CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B},
            ]
        },
        [CONST.VAR_CONCRETE_CLASS]: {"type": "string"},
        [CONST.VAR_HUMIDITY_GROUP]: {
            "oneOf": [
                {"const": CONST.HIGH_HUMIDITY},
                {"const": CONST.MIDDLE_HUMIDITY},
                {"const": CONST.LOW_HUMIDITY},
            ]
        },
        [CONST.VAR_STRESS_TYPE]: {
            "oneOf": [
                {"const": CONST.COMPRESSION},
                {"const": CONST.TENSION},
            ]
        },
    },
    "required": [
        CONST.VAR_CONCRETE_TYPE,
        CONST.VAR_CONCRETE_CLASS,
        CONST.VAR_HUMIDITY_GROUP,
        CONST.VAR_STRESS_TYPE
    ]
};


const VALUES = [
    [
        [0.003, 0.0042, 0.0024],
        [0.0034, 0.0048, 0.0028],
        [0.004, 0.0056, 0.0034]
    ],
    [
        [0.00021, 0.00027, 0.00019],
        [0.00024, 0.00031, 0.00022],
        [0.00028, 0.00036, 0.00026]
    ]
];

var highStrengthFactor = function (classname) {

    let value = FUNC.getGradeNumberValue(classname);

    if (value >= 70) {
        return (270 - value) / 210;
    }

    return 1.0;
}

function calculate(obj) {
    let result = Array.from(VALUES[obj[CONST.VAR_STRESS_TYPE]][obj[CONST.VAR_HUMIDITY_GROUP]]);

    if (obj[CONST.VAR_STRESS_TYPE] === CONST.COMPRESSION) {
        result[1] = result[1] * highStrengthFactor(obj[CONST.VAR_CONCRETE_CLASS]);
    }

    return result;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}