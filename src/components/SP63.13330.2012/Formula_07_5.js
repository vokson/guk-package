export default function (Rbt = null, b = null, h = null, e0 = null, nu = null) {

    if (
        typeof Rbt === "number" &&
        typeof b === "number" &&
        typeof h === "number" &&
        typeof e0 === "number" &&
        typeof nu === "number" &&
        Rbt >= 0 && b >= 0 && h > 0 && e0 >= 0 && nu >= 0
    ) {
        var result = Rbt * b * h / (6 * e0 * nu / h - 1);

        if (isFinite(result)) return result;
    }

    return null;
}