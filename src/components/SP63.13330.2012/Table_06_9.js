import * as CONST from './Constants';

const HEAVY_CONCRETE_Rbt = {
   'Bt0,8' : 0.62,
   'Bt1,2' : 0.93,
   'Bt1,6' : 1.25,
   'Bt2,0' : 1.55,
   'Bt2,4' : 1.85,
   'Bt2,8' : 2.15,
   'Bt3,2' : 2.45
};


function isClassCorrect(type, classname) {
    if (
        type === CONST.HEAVY_CONCRETE ||
        type === CONST.PRESTRESSED_CONCRETE ||
        type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B ||
        type === CONST.LIGHT_CONCRETE
        ) 
    {
        return HEAVY_CONCRETE_Rbt.hasOwnProperty(classname);
    }

    return false;
}

export default function (type = null, classname = null, isReductionFactorToBeApplied = false) {

    if (!isClassCorrect(type, classname)) {
        return null;
    }

    return HEAVY_CONCRETE_Rbt[classname];

}