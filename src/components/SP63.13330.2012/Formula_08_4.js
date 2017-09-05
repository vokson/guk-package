export default function (Rb = null, Rsc = null, As1 = null, b = null, h0 = null, x = null, a1 = null,) {

    if (
        typeof Rb === "number" &&
        typeof Rsc === "number" &&
        typeof As1 === "number" &&
        typeof b === "number" &&
        typeof a1 === "number" &&
        typeof h0 === "number" &&
        typeof x === "number" &&
        Rb >= 0 && Rsc >= 0 && As1 >= 0 && b >= 0 && a1 >= 0 && h0 >= 0 && x >= 0
    ) {
        return Rb * b * x * (h0 - 0.5 * x) + Rsc * As1 * (h0 - a1);
    }

    return null;
}