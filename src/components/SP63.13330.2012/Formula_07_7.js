export default function (D = null, L0 = null) {

    if (
        typeof D === "number" &&
        typeof L0 === "number" &&
        D >= 0 && L0 > 0
    ) {
        return Math.pow(Math.PI, 2) * D / Math.pow(L0, 2);
    }

    return null;
}