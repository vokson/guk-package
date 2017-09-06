export default function (N = null, Rs = null, As = null, Rsc = null, A1s = null, Rb = null, b = null) {

    if (
        typeof N === "number" &&
        typeof Rs === "number" &&
        typeof Rsc === "number" &&
        typeof Rb === "number" &&
        typeof As === "number" &&
        typeof A1s === "number" &&
        typeof b === "number" &&
        N >= 0 && Rs >= 0 && Rsc >= 0 && Rb > 0 && As >= 0 && A1s >= 0 && b > 0
    ) {
        return (N + Rs * As - Rsc * A1s) / (Rb * b)
    }

    return null;
}