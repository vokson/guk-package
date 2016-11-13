export default function (Eb = null, Fi = null) {

    if (
        typeof Eb === "number" &&
        typeof Fi === "number" &&
        Eb >= 0 && Fi >= 0
    ) {
        return Eb/(1+Fi);
    }

    return null;
}