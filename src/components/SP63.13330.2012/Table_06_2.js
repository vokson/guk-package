import * as CONST from './Constants';

export default function (type) {
    const HEAVY_CONCRETE_MARKS = ['Bt0,8', 'Bt1,2', 'Bt1,6', 'Bt2,0', 'Bt2,4', 'Bt2,8', 'Bt3,2', 'Bt3,6', 'Bt4,0'];
    const LIGHT_CONCRETE_MARKS = ['Bt0,8', 'Bt1,2', 'Bt1,6', 'Bt2,0', 'Bt2,4', 'Bt2,8', 'Bt3,2'];

    if (
        type === CONST.HEAVY_CONCRETE ||
        type === CONST.PRESTRESSED_CONCRETE ||
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
