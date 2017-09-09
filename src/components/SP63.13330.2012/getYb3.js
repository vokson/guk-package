import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {
        "isHeightMoreThanLimit": {"type": "boolean"}
    },
    "required": [
        "isHeightMoreThanLimit",
    ]
};


function calculate(obj) {

    if (obj.isHeightMoreThanLimit === true) {
        return 0.85;
    }

    return 1.0;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}