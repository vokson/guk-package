import * as CONST from './Constants';
import * as FUNC from './Common_Functions';
import {default as table_06_14} from './Table_06_14';
import {default as formula_06_11} from './Formula_06_11';
import {default as formula_06_12} from './Formula_06_12';
import {default as clause_06_2_12} from './Clause_06_2_12';

const LIST_FORMULA_06_11 = ['A240', 'A400', 'A500', 'B500', 'Bp500'];
const LIST_FORMULA_06_12 = ['A600', 'A800', 'A1000', 'Bp1200', 'Bp1300', 'Bp1400', 'Bp1500', 'Bp1600', 'K1400', 'K1500', 'K1600', 'K1700'];

let defaultValidationProperties = {"type": "number", "minimum": 0};
let defaultProperties = {
    "Ysi": 1.0,
};

let schema = {
    "type": "object",
    "properties": {
        "classname": {"type": "string"},
        "loadType": {
            "oneOf": [
                {"const": CONST.SHORT_TERM_LOAD},
                {"const": CONST.LONG_TERM_LOAD},
            ]
        },
    },
    "required": [
        "classname",
        "Ysi",
        "loadType",
    ]
};

function calculate(obj) {
    let Rs = null, Rsc = null, es0 = null, esc0 = null;
    const es2 = 0.025;
    debugger;

    let Es = clause_06_2_12(obj).answer;
    debugger;
    let array_Rs_Rsc = table_06_14(obj).answer;
    debugger;

    if (array_Rs_Rsc === null || Es === null) {
        debugger;
        return null;
    }

    [Rs, Rsc] = array_Rs_Rsc
    debugger;

    if (LIST_FORMULA_06_11.indexOf(obj.classname) !== -1) {
        debugger;
        es0 = formula_06_11({"Rs": Rs, "Es": Es}).answer;
        debugger;
        esc0 = formula_06_11({"Rs": Rsc, "Es": Es}).answer;
        debugger;
    }
    if (LIST_FORMULA_06_12.indexOf(obj.classname) !== -1) {
        debugger;
        es0 = formula_06_12({"Rs": Rs, "Es": Es}).answer;
        debugger;
        esc0 = formula_06_12({"Rs": Rsc, "Es": Es}).answer;
        debugger;
    }
    if (es0 === null || esc0 === null) {
        debugger;
        return null;
    }

    debugger;

    return [
        [-es2, -Rsc],
        [-esc0, -Rsc],
        [0, 0],
        [es0, Rs],
        [es2, Rs]
    ];
}

export default function (json) {

    Object.keys(defaultProperties).map(function (key, index) {
        if (!(key in json)) json[key] = defaultProperties[key];
    });

    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}
