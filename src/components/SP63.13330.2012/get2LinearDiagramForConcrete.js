import * as CONST from './Constants';
import * as FUNC from './Common_Functions';
import {default as limit_strength_function} from './Table_06_8';
import {default as strain_function} from './Table_06_10';

let defaultValidationProperties = {"type": "number", "minimum": 0};
let defaultProperties = {
    "Ybi": 1.0,
    "Ybti": 1.0,
    "humidity": CONST.HIGH_HUMIDITY,
    "isReductionFactorToBeApplied": false
};

let schema = {
    "type": "object",
    "properties": {
        "type": {
            "oneOf": [
                {"const": CONST.HEAVY_CONCRETE},
                {"const": CONST.PRESTRESSED_CONCRETE},
                {"const": CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A},
                {"const": CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A},
                {"const": CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B},
            ]
        },
        "classname": {"type": "string"},
        "loadType": {
            "oneOf": [
                {"const": CONST.SHORT_TERM_LOAD},
                {"const": CONST.LONG_TERM_LOAD},
            ]
        },
        "humidity": {
            "oneOf": [
                {"const": CONST.HIGH_HUMIDITY},
                {"const": CONST.MIDDLE_HUMIDITY},
                {"const": CONST.LOW_HUMIDITY},
            ]
        },
        "isReductionFactorToBeApplied": {"type": "boolean"},
    },
    "required": [
        "type",
        "classname",
        "Ybi",
        "Ybti",
        "loadType",
        "humidity",
        "isReductionFactorToBeApplied",
    ]
};

function getShortTermEb2(classname) {
    let class_value = FUNC.getGradeNumberValue(classname);

    if (class_value < 70) {
        return 0.0035;
    } else if (class_value <= 100) {
        return 0.0033 + (class_value - 70) / (100 - 70) * (0.0028 - 0.0033);
    }

    return null;
}

function calculate(obj) {

    debugger;
    let Rb = null, Rbt = null, eb1 = null, ebt1 = null, eb2 = null, ebt2 = null;

    let array_Rb_Rbt = limit_strength_function(obj);
    debugger;
    if (array_Rb_Rbt.answer === null) {
        debugger;
        return null;
    }

    [Rb, Rbt] = array_Rb_Rbt.answer;
    debugger;
    if (obj.loadType === CONST.SHORT_TERM_LOAD) {
        debugger;
        eb1 = 0.0015;
        ebt1 = 0.00008;

        eb2 = getShortTermEb2(obj.classname);
        ebt2 = 0.00015;
        debugger;

    } else if (obj.loadType === CONST.LONG_TERM_LOAD) {
        debugger;
        obj['stress'] = CONST.COMPRESSION;
        let array_compression = strain_function(obj).answer;

        obj['stress'] = CONST.TENSION;
        let array_tension = strain_function(obj).answer;

        debugger;
        if (array_compression === null || array_tension === null) {
            debugger;
            return null;
        }

        [, eb2, eb1] = array_compression;
        [, ebt2, ebt1] = array_tension;

    } else {
        debugger;
        return null;
    }
    debugger;

    return new Array(
        [-eb2, -Rb],
        [-eb1, -Rb],
        [0, 0],
        [ebt1, Rbt],
        [ebt2, Rbt]
    );
}

export default function (json) {

    Object.keys(defaultProperties).map(function (key, index) {
        if (!(key in json)) json[key] = defaultProperties[key];
    });

    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}