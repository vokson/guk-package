export default function (e0 = null, nu = null, h0 = null, a1 = null) {

    if (
        typeof e0 === "number" &&
        typeof nu === "number" &&
        typeof h0 === "number" &&
        typeof a1 === "number" &&
        e0 >= 0 && nu >= 0 && h0 >= 0 && a1 >= 0
    ) {
        return e0 * nu + (h0 - a1) / 2;
    }

    return null;
}