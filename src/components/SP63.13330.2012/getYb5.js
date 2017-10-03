import * as FUNC from './Common_Functions';
import * as CONST from './Constants';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {
        [CONST.VAR_IS_COLD_TEMPERATURE_MORE_THAN_MINUS40]: {"type": "boolean"}
    },
    "required": [
        CONST.VAR_IS_COLD_TEMPERATURE_MORE_THAN_MINUS40
    ]
};


function calculate(obj) {

    if (obj[CONST.VAR_IS_COLD_TEMPERATURE_MORE_THAN_MINUS40] === false) {
        return null;
    }

    return 1.0;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}