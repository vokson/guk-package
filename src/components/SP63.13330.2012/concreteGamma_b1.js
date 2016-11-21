import * as CONST from './Constants';

export default function (loadType = null, type = null) {

    if (loadType === CONST.SHORT_TERM_LOAD) {
        return 1.0;
    }

    if (loadType === CONST.LONG_TERM_LOAD) {

        if (
            type === CONST.HEAVY_CONCRETE ||
            type === CONST.LIGHT_CONCRETE ||
            type === CONST.PRESTRESSED_CONCRETE ||
            type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
            type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
            type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
        ) {
            return 0.9;
        }

        if (
            type === CONST.CELL_CONCRETE ||
            type === CONST.CELL_AUTOCLAVE_CONCRETE ||
            type === CONST.POROUS_CONCRETE
        ) {
            return 0.85;
        }
    }

    return null;
}