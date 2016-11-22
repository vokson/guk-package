import {default as es0_function} from './Formula_06_11';

export default function (Rs = null, Es = null) {

    let es0 = es0_function(Rs, Es);

    return (es0 === null) ? null : (es0 + 0.002);
}