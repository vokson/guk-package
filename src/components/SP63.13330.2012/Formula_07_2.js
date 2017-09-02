export default function (b = null, h = null, e0 = null, nu = null) {

    if (
        typeof b === "number" &&
        typeof h === "number" &&
        typeof e0 === "number" &&
        typeof nu === "number" &&
        b >= 0 && h > 0 && e0 >= 0 && nu >= 0
    ) {
        return b * h * (1 - (2 * e0 * nu) / h);
    }

    return null;
}