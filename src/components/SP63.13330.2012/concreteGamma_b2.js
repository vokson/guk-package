export default function (isOnlyConcrete = false) {

    if (typeof isOnlyConcrete !== "boolean") {
        return null;
    }

    if (isOnlyConcrete === true) {
        return 0.9;
    }

    if (isOnlyConcrete === false) {
        return 1.0;
    }

}