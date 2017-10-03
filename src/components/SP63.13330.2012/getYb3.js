import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {
        [CONST.VAR_IS_HEIGHT_MORE_THAN_LIMIT]: {"type": "boolean"}
    },
    "required": [
        CONST.VAR_IS_HEIGHT_MORE_THAN_LIMIT
    ]
};


function calculate(obj) {

    if (obj[CONST.VAR_IS_HEIGHT_MORE_THAN_LIMIT] === true) {
        return 0.85;
    }

    return 1.0;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}