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