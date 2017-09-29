import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {
        "isOnlyConcrete": {"type": "boolean"}
    },
    "required": [
        "isOnlyConcrete",
    ]
};


function calculate(obj) {

    if (obj.isOnlyConcrete === true) {
        return 0.9;
    }

    return 1.0;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}