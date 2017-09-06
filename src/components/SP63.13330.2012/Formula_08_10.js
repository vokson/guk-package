export default function (N = null, e = null, Rsc = null, A1s = null, Rb = null, b = null, x = null, h0 = null, a1 = null) {

    if (
        typeof N === "number" &&
        typeof e === "number" &&
        typeof Rsc === "number" &&
        typeof A1s === "number" &&
        typeof Rb === "number" &&
        typeof b === "number" &&
        typeof x === "number" &&
        typeof h0 === "number" &&
        typeof a1 === "number" &&
        N >= 0 && e >= 0 && Rsc >= 0 && A1s >= 0 && Rb >= 0 && b >= 0 && x >= 0 && h0 >= 0 && a1 >= 0
    ) {
        return Rb * b * x * (h0 - 0.5 * x) + Rsc * A1s * (h0 - a1) - N * e;
    }

    return null;
}