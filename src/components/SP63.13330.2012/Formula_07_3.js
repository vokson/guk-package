export default function (Fi = null, Rb = null, Ab = null) {

    if (
        typeof Fi === "number" &&
        typeof Rb === "number" &&
        typeof Ab === "number" &&
        Fi >=0 && Rb >= 0 && Ab >= 0
    ) {
        return Fi * Rb * Ab;
    }

    return null;
}