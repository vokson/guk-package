import {default as es0_function} from './Formula_06_11';

export default function (json) {
    let es0 = es0_function(json);

    if (es0.answer !== null) {
        es0.answer = es0.answer + 0.002;
    }

    return es0;
}