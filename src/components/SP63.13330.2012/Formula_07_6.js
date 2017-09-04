export default function (N = null, Ncr = null) {

    if (
        typeof N === "number" &&
        typeof Ncr === "number" &&
        N >= 0 && Ncr > 0
    ) {
        var result = 1 / (1 - N / Ncr);

        if (isFinite(result)) return result;
    }

    return null;
}