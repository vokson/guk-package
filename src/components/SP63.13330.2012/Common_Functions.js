export function getGradeNumberValue(grade, countOfSymbolsInPrefix = 1) {

    if (
        typeof grade === "string" &&
        typeof countOfSymbolsInPrefix === "number" &&
        Number.isInteger(countOfSymbolsInPrefix) &&
        grade.length > countOfSymbolsInPrefix
    ) {
        let value = parseFloat(grade.substr(countOfSymbolsInPrefix).replace(',', '.'));
        if (Number.isFinite(value)) {
            return value;
        }
    }

    return null;
}

export function singleInterpolation(a1, a2, b1, b2, x) {
    return b1 + (x - a1) / (a2 - a1) * (b2 - b1);
}

var Ajv = require('ajv');

function validateJSON(schema, data) {
    var ajv = new Ajv({allErrors: true});
    var validate = ajv.compile(schema);

    var valid = validate(data);

    var result = {
        isValid: valid,
        errors: ajv.errorsText(validate.errors)
    };

    return result;
}

function addDefaultRulesToProperties(schema, defaultProperties) {
    schema.required.forEach(function (name) {
        if (!schema.properties.hasOwnProperty(name)) {
            schema.properties[name] = defaultProperties;
        }
    });
}

export function prepareFeedbackObject(jsonSchema, defaultProperties, inputJSON, functionForCalculation) {
    addDefaultRulesToProperties(jsonSchema, defaultProperties);

    // console.log(jsonSchema);

    var result = validateJSON(jsonSchema, inputJSON);
    result.answer = null;

    if (result.isValid) {
        result.answer = functionForCalculation(inputJSON);
        if (!isFinite(result.answer)) result.answer = null;

    }

    // console.log(result);


    return result;
}