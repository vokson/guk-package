import * as CONST from './Constants';
import * as FUNC from './Common_Functions';
import {default as limit_strength_function} from './Table_06_8';
import {default as strain_function} from './Table_06_10';


export default function (type = null, classname = null, Ybi = 1.0, Ybti = 1.0, loadCondition = null, humidity = null, isReductionFactorToBeApplied = false) {

    if (!isTypeCorrect(type)) {
        return null;
    }

    let Rb = null, Rbt = null, eb1 = null, ebt1 = null, eb2 = null, ebt2 = null;

    let array_Rb_Rbt = limit_strength_function(type, classname, Ybi, Ybti, isReductionFactorToBeApplied);

    if (array_Rb_Rbt === null) {
        return null;
    }

    [Rb, Rbt] = array_Rb_Rbt

    if (loadCondition === CONST.SHORT_TERM_LOAD) {
        eb1 = 0.0015;
        ebt1 = 0.00008;

        eb2 = getShortTermEb2(classname);
        ebt2 = 0.00015;

    } else if (loadCondition === CONST.LONG_TERM_LOAD) {

        let array_compression = strain_function(type, classname, humidity, CONST.COMPRESSION);
        let array_tension = strain_function(type, classname, humidity, CONST.TENSION);

        // console.log('');
        // console.log('COMPRESSION: ' + array_compression);
        // console.log('TENSION: ' + array_tension);

        if (array_compression === null || array_tension === null) {
            return null;
        }

        [, eb2, eb1] = array_compression;
        [, ebt2, ebt1] = array_tension;

    } else {
        return null;
    }

    return new Array (
        [-eb2, -Rb],
        [-eb1, -Rb],
        [0, 0],
        [ebt1, Rbt],
        [ebt2, Rbt]
    );
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