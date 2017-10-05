import * as CONST from './Constants';
import * as FUNC from './Common_Functions';
import {default as table_06_14} from './Table_06_14';
import {default as formula_06_11} from './Formula_06_11';
import {default as formula_06_12} from './Formula_06_12';
import {default as clause_06_2_12} from './Clause_06_2_12';

const LIST_FORMULA_06_11 = ['A240', 'A400', 'A500', 'B500', 'Bp500'];
const LIST_FORMULA_06_12 = ['A600', 'A800', 'A1000', 'Bp1200', 'Bp1300', 'Bp1400', 'Bp1500', 'Bp1600', 'K1400', 'K1500', 'K1600', 'K1700'];

let defaultValidationProperties = {"type": "number", "minimum": 0};
let defaultProperties = {};
defaultProperties[CONST.VAR_Ysi] = 1.0;

let schema = {
    "type": "object",
    "properties": {},
    "required": [
        CONST.VAR_REBAR_CLASS,
        CONST.VAR_Ysi,
        CONST.VAR_LOAD_TYPE
    ]
};

schema.properties[CONST.VAR_REBAR_CLASS] = {"type": "string"};
schema.properties[CONST.VAR_LOAD_TYPE] = {
    "oneOf": [
        {"const": CONST.SHORT_TERM_LOAD},
        {"const": CONST.LONG_TERM_LOAD},
    ]
};

function calculate(obj) {
    let Rs = null, Rsc = null, es0 = null, esc0 = null;
    const es2 = 0.025;

    let Es = clause_06_2_12(obj).answer;
    let array_Rs_Rsc = table_06_14(obj).answer;

    if (array_Rs_Rsc === null || Es === null) {
        return null;
    }

    [Rs, Rsc] = array_Rs_Rsc

    if (LIST_FORMULA_06_11.indexOf(obj[CONST.VAR_REBAR_CLASS]) !== -1) {

        es0 = formula_06_11({
            [CONST.VAR_Rs]: Rs,
            [CONST.VAR_Es]: Es
        }).answer;

        esc0 = formula_06_11({
            [CONST.VAR_Rs]: Rsc,
            [CONST.VAR_Es]: Es
        }).answer;
    }
    if (LIST_FORMULA_06_12.indexOf(obj[CONST.VAR_REBAR_CLASS]) !== -1) {

        es0 = formula_06_12({
            [CONST.VAR_Rs]: Rs,
            [CONST.VAR_Es]: Es
        }).answer;

        esc0 = formula_06_12({
            [CONST.VAR_Rs]: Rsc,
            [CONST.VAR_Es]: Es
        }).answer;
    }

    if (es0 === null || esc0 === null) {
        return null;
    }

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
