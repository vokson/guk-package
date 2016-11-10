import * as CONST from './Constants';

export default function (type) {
    const HEAVY_CONCRETE_MARKS = ['F50','F75','F100','F150','F200','F300','F400','F500','F600','F700','F800','F1000'];
    const LIGHT_CONCRETE_MARKS = ['F25','F35','F50','F75','F100','F150','F200','F300','F400','F500'];
    const POROUS_CONCRETE_MARKS = ['F15', 'F25','F35','F50','F75','F100'];

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

    if (
        type === CONST.CELL_CONCRETE||
        type === CONST.CELL_AUTOCLAVE_CONCRETE ||
        type === CONST.POROUS_CONCRETE
    ) {
        return POROUS_CONCRETE_MARKS;
    }

    return [];

}
