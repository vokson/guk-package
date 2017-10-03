import * as CONST from './Constants';
import * as FUNC from './Common_Functions';
import {default as limit_strength_function} from './Table_06_8';
import {default as strain_function} from './Table_06_10';
import {default as Young_modulus_function} from './Table_06_11';
import {default as Fi_b_cr_function} from './Table_06_12';
import {default as long_term_Eb_function} from './Formula_06_3';

let defaultValidationProperties = {"type": "number", "minimum": 0};
let defaultProperties = {};
defaultProperties[CONST.VAR_Ybi] = 1.0;
defaultProperties[CONST.VAR_Ybti] = 1.0;
defaultProperties[CONST.VAR_HUMIDITY_GROUP] = CONST.HIGH_HUMIDITY;
defaultProperties[CONST.VAR_IS_REDUCTION_FACTOR_FOR_Rbt_TO_BE_APPLIED] = false;

let schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_CONCRETE_TYPE,
        CONST.VAR_CONCRETE_CLASS,
        CONST.VAR_Ybi,
        CONST.VAR_Ybti,
        CONST.VAR_LOAD_TYPE,
        CONST.VAR_HUMIDITY_GROUP,
        CONST.VAR_IS_REDUCTION_FACTOR_FOR_Rbt_TO_BE_APPLIED
    ]
};

schema.properties[CONST.VAR_CONCRETE_TYPE] = {
    "oneOf": [
        {"const": CONST.HEAVY_CONCRETE},
        {"const": CONST.PRESTRESSED_CONCRETE},
        {"const": CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A},
        {"const": CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A},
        {"const": CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B},
    ]
};
schema.properties[CONST.VAR_CONCRETE_CLASS] = {"type": "string"};
schema.properties[CONST.VAR_LOAD_TYPE] = {
    "oneOf": [
        {"const": CONST.SHORT_TERM_LOAD},
        {"const": CONST.LONG_TERM_LOAD},
    ]
};
schema.properties[CONST.VAR_HUMIDITY_GROUP] = {
    "oneOf": [
        {"const": CONST.HIGH_HUMIDITY},
        {"const": CONST.MIDDLE_HUMIDITY},
        {"const": CONST.LOW_HUMIDITY},
    ]
};
schema.properties[CONST.VAR_IS_REDUCTION_FACTOR_FOR_Rbt_TO_BE_APPLIED] = {"type": "boolean"};


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

    let Rb = null, Rbt = null, Eb = null, eb0 = null, eb1 = null, eb2 = null, ebt0 = null, ebt1 = null, ebt2 = null;

    Eb = Young_modulus_function(obj).answer;
    let array_Rb_Rbt = limit_strength_function(obj).answer;

    if (Eb === null || array_Rb_Rbt === null) {
        return null;
    }

    [Rb, Rbt] = array_Rb_Rbt;
    let Ebt = Eb;

    // console.log('Rb: ' + Rb + ', Rbt: ' + Rbt + ', Eb: ' + Eb);

    let sigma_b1 = 0.6 * Rb;
    let sigma_bt1 = 0.6 * Rbt;

    if (obj[CONST.VAR_LOAD_TYPE] === CONST.SHORT_TERM_LOAD) {

        eb0 = 0.002;
        ebt0 = 0.0001;

        eb1 = sigma_b1 / Eb;
        ebt1 = sigma_bt1 / Ebt;

        eb2 = getShortTermEb2(obj[CONST.VAR_CONCRETE_CLASS]);
        ebt2 = 0.00015;
    }

    if (obj[CONST.VAR_LOAD_TYPE] === CONST.LONG_TERM_LOAD) {

        obj[CONST.VAR_STRESS_TYPE] = CONST.COMPRESSION;
        let array_compression = strain_function(obj).answer;

        obj[CONST.VAR_STRESS_TYPE] = CONST.TENSION;
        let array_tension = strain_function(obj).answer;

        if (array_compression === null || array_tension === null) {
            return null;
        }

        [eb0, eb2,] = array_compression;
        [ebt0, ebt2,] = array_tension;

        let Fi = Fi_b_cr_function(obj).answer;

        if (Fi === null) {
            return null;
        }

        let inputObject = {};
        inputObject[CONST.VAR_Eb] = Eb;
        inputObject[CONST.VAR_FI] = Fi;
        eb1 = sigma_b1 / long_term_Eb_function(inputObject).answer;

        inputObject[CONST.VAR_Eb] = Ebt;
        ebt1 = sigma_bt1 / long_term_Eb_function(inputObject).answer;
    }

    if (
        eb0 === null || eb1 === null || eb2 === null ||
        ebt0 === null || ebt1 === null || ebt2 === null
    ) {
        return null;
    }

    return [
        [-eb2, -Rb],
        [-eb0, -Rb],
        [-eb1, -sigma_b1],
        [0, 0],
        [ebt1, sigma_bt1],
        [ebt0, Rbt],
        [ebt2, Rbt]
    ];

}

export default function (json) {

    Object.keys(defaultProperties).map(function (key, index) {
        if (!(key in json)) json[key] = defaultProperties[key];
    });

    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}