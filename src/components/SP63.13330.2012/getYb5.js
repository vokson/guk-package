import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {
        "isColdTemperatureMoreThanMinus40": {"type": "boolean"}
    },
    "required": [
        "isColdTemperatureMoreThanMinus40",
    ]
};


function calculate(obj) {

    if (obj.isColdTemperatureMoreThanMinus40 === false) {
        return null;
    }

    return 1.0;
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}