export default function (Rb = null, Ab = null) {

    if (
        typeof Rb === "number" &&
        typeof Ab === "number" &&
        Rb >= 0 && Ab > 0
    ) {
        return Rb * Ab;
    }

    return null;
}