import * as CONST from './Constants';
import {default as makeDiagram} from './makeDiagram';

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
            let diagram = obj[CONST.BASE_DIAGRAM];
            let x = obj[CONST.X_GRAVITY_POINT];
            let y = obj[CONST.Y_GRAVITY_POINT];
            let square = obj[CONST.SQUARE];

            obj[CONST.DIAGRAM_N_e] = makeDiagram(diagram, 1, square);
            obj[CONST.DIAGRAM_Mx_e] = makeDiagram(diagram, 1, square * x);
            obj[CONST.DIAGRAM_My_e] = makeDiagram(diagram, 1, square * y);


            if (x !== 0) {
                obj[CONST.DIAGRAM_N_rx] = makeDiagram(diagram, 1 / x, square);
                obj[CONST.DIAGRAM_Mx_rx] = makeDiagram(diagram, 1 / x, square * x);
                obj[CONST.DIAGRAM_My_rx] = makeDiagram(diagram, 1 / x, square * y);
            }

            if (y !== 0) {
                obj[CONST.DIAGRAM_N_ry] = makeDiagram(diagram, 1 / y, square);
                obj[CONST.DIAGRAM_Mx_ry] = makeDiagram(diagram, 1 / y, square * x);
                obj[CONST.DIAGRAM_My_ry] = makeDiagram(diagram, 1 / y, square * y);
            }

        }

    }

    return arr;
}
