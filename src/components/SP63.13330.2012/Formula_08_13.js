import * as FUNC from './Common_Functions';

var defaultProperties = {"type": "number", "minimum": 0};

var schema = {
    "type": "object",
    "properties": {},
    "required": [
        "N",
        "Rb",
        "Rs",
        "Rsc",
        "As",
        "A1s",
        "b",
        "h0",
        "Xi_R"
    ]
};

function calculate(obj) {
    return (obj.N + obj.Rs * obj.As * (1 + obj.Xi_R) / (1 - obj.Xi_R) - obj.Rsc * obj.A1s) /
        (obj.Rb * obj.b + 2 * obj.Rs * obj.As / obj.h0 / (1 - obj.Xi_R));
}

export default function (json) {
    return FUNC.prepareFeedbackObject(schema, defaultProperties, json, calculate);
}

