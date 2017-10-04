import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

const VALUES_Rs = {
    'A240': 210,
    'A400': 350,
    'A500': 435,
    'A600': 520,
    'A800': 695,
    'A1000': 870,
    'B500': 435,
    'Bp500': 415,
    'Bp1200': 1050,
    'Bp1300': 1130,
    'Bp1400': 1215,
    'Bp1500': 1300,
    'Bp1600': 1390,
    'K1400': 1215,
    'K1500': 1300,
    'K1600': 1390,
    'K1700': 1475
};

const VALUES_SHORT_TERM_Rsc = {
    'A240': 210,
    'A400': 350,
    'A500': 400,
    'A600': 400,
    'A800': 400,
    'A1000': 400,
    'B500': 380,
    'Bp500': 360,
    'Bp1200': 400,
    'Bp1300': 400,
    'Bp1400': 400,
    'Bp1500': 400,
    'Bp1600': 400,
    'K1400': 400,
    'K1500': 400,
    'K1600': 400,
    'K1700': 400
};

const VALUES_LONG_TERM_Rsc = {
    'A240': 210,
    'A400': 350,
    'A500': 435,
    'A600': 470,
    'A800': 500,
    'A1000': 500,
    'B500': 415,
    'Bp500': 390,
    'Bp1200': 500,
    'Bp1300': 500,
    'Bp1400': 500,
    'Bp1500': 500,
    'Bp1600': 500,
    'K1400': 500,
    'K1500': 500,
    'K1600': 500,
    'K1700': 500
};

let defaultValidationProperties = {"type": "number", "minimum": 0};
let defaultProperties = {
    [CONST.VAR_Ysi]: 1.0
};

let schema = {
    "type": "object",
    "properties": {
        [CONST.VAR_REBAR_CLASS]: {"type": "string"},
        [CONST.VAR_LOAD_TYPE]: {
            "oneOf": [
                {"const": CONST.SHORT_TERM_LOAD},
                {"const": CONST.LONG_TERM_LOAD},
            ]
        },
    },
    "required": [
        CONST.VAR_Ysi,
        CONST.VAR_REBAR_CLASS,
        CONST.VAR_LOAD_TYPE
    ]
};

function calculate(obj) {

    if (!VALUES_Rs.hasOwnProperty(obj[CONST.VAR_REBAR_CLASS])) return null;

    let Rs = VALUES_Rs[obj[CONST.VAR_REBAR_CLASS]], Rsc;

    if (obj[CONST.VAR_LOAD_TYPE] === CONST.SHORT_TERM_LOAD) {
        Rsc = VALUES_SHORT_TERM_Rsc[obj[CONST.VAR_REBAR_CLASS]];
    } else if (obj[CONST.VAR_LOAD_TYPE] === CONST.LONG_TERM_LOAD){
        Rsc = VALUES_LONG_TERM_Rsc[obj[CONST.VAR_REBAR_CLASS]];
    }

    return [Rs * obj[CONST.VAR_Ysi], Rsc * obj[CONST.VAR_Ysi]];
}

export default function (json) {

    Object.keys(defaultProperties).map(function (key, index) {
        if (!(key in json)) json[key] = defaultProperties[key];
    });

    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}