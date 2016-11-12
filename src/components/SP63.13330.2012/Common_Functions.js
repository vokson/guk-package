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