export default function (Rbt = null, A = null, I = null, e0 = null, nu = null, Yt = null) {

    if (
        typeof Rbt === "number" &&
        typeof A === "number" &&
        typeof I === "number" &&
        typeof e0 === "number" &&
        typeof nu === "number" &&
        typeof Yt === "number" &&
        Rbt >= 0 && A >= 0 && I > 0 && e0 >= 0 && nu >= 0 && Yt >= 0
    ) {
        var result = Rbt * A / (A / I * e0 * nu * Yt - 1);

        if (isFinite(result)) return result;
    }

    return null;
}