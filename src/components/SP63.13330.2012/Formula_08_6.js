export default function (Rs = null, As = null, Rsc = null, A1s = null, Rb = null, b1f = null, h1f = null) {

    if (
        typeof Rs === "number" &&
        typeof Rsc === "number" &&
        typeof Rb === "number" &&
        typeof As === "number" &&
        typeof A1s === "number" &&
        typeof b1f === "number" &&
        typeof h1f === "number" &&
        Rs >= 0 && Rsc >= 0 && Rb >= 0 && As >= 0 && A1s >= 0 && b1f >= 0 && h1f >= 0
    ) {
        return Rsc * A1s + Rb * b1f * h1f - Rs * As;
    }

    return null;
}