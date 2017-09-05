export default function (Rb = null, Rsc = null, A1s = null, b = null, h0 = null, x = null, a1 = null, b1f = null, h1f = null) {

    if (
        typeof Rb === "number" &&
        typeof Rsc === "number" &&
        typeof A1s === "number" &&
        typeof b === "number" &&
        typeof a1 === "number" &&
        typeof h0 === "number" &&
        typeof x === "number" &&
        typeof b1f === "number" &&
        typeof h1f === "number" &&
        Rb >= 0 && Rsc >= 0 && A1s >= 0 && b >= 0 && a1 >= 0 && h0 >= 0 && x >= 0 && b1f >= 0 && h1f >= 0
    ) {
        return Rb * b * x * (h0 - 0.5 * x) + Rsc * A1s * (h0 - a1) + Rb * (b1f - b) * h1f * (h0 - 0.5 * h1f);
    }

    return null;
}