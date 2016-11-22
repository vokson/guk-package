export default function (isHeightMoreThanLimit = false) {

    if (typeof isHeightMoreThanLimit !== "boolean") {
        return null;
    }

    if (isHeightMoreThanLimit === true) {
        return 0.85;
    }

    if (isHeightMoreThanLimit === false) {
        return 1.0;
    }

}