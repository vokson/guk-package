import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {
        [CONST.VAR_IS_ONLY_CONCRETE]: {"type": "boolean"}
    },
    "required": [
        CONST.VAR_IS_ONLY_CONCRETE
    ]
};


function calculate(obj) {

    if (obj[CONST.VAR_IS_ONLY_CONCRETE] === true) {
        return 0.9;
    }

    return 1.0;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}