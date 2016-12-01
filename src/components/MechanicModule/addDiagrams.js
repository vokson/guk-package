import * as CONST from './Constants';
import {default as make_N_diagram} from './make_N_diagram';
import {default as make_M_diagram} from './make_M_diagram';

export default function (objArray) {

    let arr = objArray.slice();
    
    for (let i = 0; i < arr.length; i++) {

        let obj = arr[i];

        if (
            obj[CONST.IS_ALIVE] === true &&
            obj.hasOwnProperty(CONST.BASE_DIAGRAM) &&
            obj.hasOwnProperty(CONST.SQUARE) &&
            obj.hasOwnProperty(CONST.X_GRAVITY_POINT) &&
            obj.hasOwnProperty(CONST.Y_GRAVITY_POINT)
        ) {
            obj[CONST.DIAGRAM_N] = make_N_diagram(obj[CONST.BASE_DIAGRAM], obj[CONST.SQUARE]);

            if (obj[CONST.Y_GRAVITY_POINT] !== 0) {
                obj[CONST.DIAGRAM_Mx] = make_M_diagram(obj[CONST.BASE_DIAGRAM], obj[CONST.SQUARE], obj[CONST.Y_GRAVITY_POINT]);
            }

            if (obj[CONST.X_GRAVITY_POINT] !== 0) {
                obj[CONST.DIAGRAM_My] = make_M_diagram(obj[CONST.BASE_DIAGRAM], obj[CONST.SQUARE], obj[CONST.X_GRAVITY_POINT]);
            }
        }

    }

    return arr;
}
