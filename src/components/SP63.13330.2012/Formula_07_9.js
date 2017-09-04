export default function (Rbt = null, W = null) {

    if (
        typeof Rbt === "number" &&
        typeof W === "number" &&
        Rbt >= 0 && W >= 0
    ) {
        return Rbt * W;
    }

    return null;
}