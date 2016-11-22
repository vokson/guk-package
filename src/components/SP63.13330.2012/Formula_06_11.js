export default function (Rs = null, Es = null) {

    if (
        typeof Rs === "number" &&
        typeof Es === "number" &&
        Rs >= 0 && Es > 0
    ) {
        return Rs/Es;
    }

    return null;
}