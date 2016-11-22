const Rsw = {
    'A240': 170,
    'A400': 280,
    'A500': 300,
    'B500': 300
};

export default function (classname = null, Ysi = 1.0) {

    if (!Rsw.hasOwnProperty(classname) || typeof Ysi !== "number") {
        return null;
    }

    if (Ysi < 0) {
        return null;
    }

    return Rsw[classname] * Ysi;
}