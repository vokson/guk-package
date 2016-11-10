import * as CONST from './Constants';

export default function (type) {
    const HEAVY_CONCRETE_MARKS = ['W2', 'W4', 'W6', 'W8', 'W10', 'W12', 'W14', 'W16', 'W18', 'W20'];
    const LIGHT_CONCRETE_MARKS = ['W2', 'W4', 'W6', 'W8', 'W10', 'W12'];

    if (
        type === CONST.HEAVY_CONCRETE ||
        type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
    ) {
        return HEAVY_CONCRETE_MARKS;
    }

    if (type === CONST.LIGHT_CONCRETE) {
        return LIGHT_CONCRETE_MARKS;
    }

    return [];

}
