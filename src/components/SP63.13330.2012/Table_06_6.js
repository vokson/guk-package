import * as CONST from './Constants';

export default function (type) {
    const PRESTRESSED_CONCRETE_MARKS = ['Sp0,6', 'Sp0,8', 'Sp1', 'Sp1,2', 'Sp1,5', 'Sp2', 'Sp3', 'Sp4'];

    if (type === CONST.PRESTRESSED_CONCRETE) {
        return PRESTRESSED_CONCRETE_MARKS;
    } else {
        return [];
    }
}