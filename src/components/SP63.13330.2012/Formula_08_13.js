export default function (N = null, Rs = null, As = null, Rsc = null, A1s = null, Rb = null, b = null, h0 = null, Xi_R = null) {

    if (
        typeof N === "number" &&
        typeof Rs === "number" &&
        typeof Rsc === "number" &&
        typeof Rb === "number" &&
        typeof As === "number" &&
        typeof A1s === "number" &&
        typeof b === "number" &&
        typeof h0 === "number" &&
        typeof Xi_R === "number" &&
        N >= 0 && Rs >= 0 && Rsc >= 0 && Rb >= 0 && As >= 0 && A1s >= 0 && b > 0 && h0 > 0 && Xi_R >= 0
    ) {
        var result = (N + Rs * As * (1 + Xi_R) / (1 - Xi_R) - Rsc * A1s) / (Rb * b + 2 * Rs * As / h0 / (1 - Xi_R));
        if (isFinite(result)) return result;
    }

    return null;
}