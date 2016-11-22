import * as CONST from './Constants';
import * as FUNC from './Common_Functions';
import {default as limit_strength_function} from './Table_06_8';
import {default as strain_function} from './Table_06_10';
import {default as Young_modulus_function} from './Table_06_11';
import {default as Fi_b_cr_function} from './Table_06_12';
import {default as long_term_Eb_function} from './Formula_06_3';


export default function (type = null, classname = null, Ybi = 1.0, Ybti = 1.0, loadCondition = null, humidity = null, isReductionFactorToBeApplied = false) {

    if (!isTypeCorrect(type)) {
        return null;
    }

    let Rb = null, Rbt = null, Eb = null, eb0 = null, eb1 = null, eb2 = null, ebt0 = null, ebt1 = null, ebt2 = null;

    Eb = Young_modulus_function(type, classname);
    let array_Rb_Rbt = limit_strength_function(type, classname, Ybi, Ybti, isReductionFactorToBeApplied);

    if (Eb === null || array_Rb_Rbt === null) {
        return null;
    }

    [Rb, Rbt] = array_Rb_Rbt
    let Ebt = Eb;

    // console.log('Rb: ' + Rb + ', Rbt: ' + Rbt + ', Eb: ' + Eb);

    let sigma_b1 = 0.6 * Rb;
    let sigma_bt1 = 0.6 * Rbt;

    if (loadCondition === CONST.SHORT_TERM_LOAD) {

        eb0 = 0.002;
        ebt0 = 0.0001;

        eb1 = sigma_b1 / Eb;
        ebt1 = sigma_bt1 / Ebt;

        eb2 = getShortTermEb2(classname);
        ebt2 = 0.00015;
    }

    if (loadCondition === CONST.LONG_TERM_LOAD) {

        let array_compression = strain_function(type, classname, humidity, CONST.COMPRESSION);
        let array_tension = strain_function(type, classname, humidity, CONST.TENSION);

        if (array_compression === null || array_tension === null) {
            return null;
        }

        [eb0, eb2,] = array_compression;
        [ebt0, ebt2,] = array_tension;

        let Fi = Fi_b_cr_function(classname, humidity);

        if (Fi === null) {
            return null;
        }

        eb1 = sigma_b1 / long_term_Eb_function(Eb, Fi);
        ebt1 = sigma_bt1 / long_term_Eb_function(Ebt, Fi);
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


function isTypeCorrect(type) {
    if (
        type === CONST.HEAVY_CONCRETE ||
        type === CONST.PRESTRESSED_CONCRETE ||
        type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
    ) {
        return true;
    }

    return false;
}

function getShortTermEb2(classname) {
    let class_value = FUNC.getGradeNumberValue(classname);

    if (class_value < 70) {
        return 0.0035;
    } else if (class_value <= 100) {
        return 0.0033 + (class_value - 70) / (100 - 70) * (0.0028 - 0.0033);
    }

    return null;
}