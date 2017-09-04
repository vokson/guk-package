import * as CONST from './Constants';

function isTypeCorrect(type) {
    if (
        type === CONST.HEAVY_CONCRETE ||
        type === CONST.PRESTRESSED_CONCRETE ||
        type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B ||
        type === CONST.LIGHT_CONCRETE ||
        type === CONST.POROUS_CONCRETE ||
        type === CONST.CELL_AUTOCLAVE_CONCRETE ||
        type === CONST.CELL_CONCRETE
    ) {
        return true;
    }

    return false;
}


export default function (type = null, classname = null, e_sel = null, e_b2 = null) {

    if (
        isTypeCorrect(type) &&
        typeof e_sel === "number" &&
        typeof e_b2 === "number" &&
        e_sel >= 0 && e_b2 > 0
    ) {
        var a = 0.8;

        if (
            (type === CONST.HEAVY_CONCRETE &&
                (classname === 'B70' || classname === 'B80' || classname === 'B90' || classname === 'B100')
            ) ||
            type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
            type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
            type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
        ) {
            a = 0.7
        }
        return a / (1 + e_sel / e_b2);
    }

    return null;
}