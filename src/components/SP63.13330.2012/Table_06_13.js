const Rsn = {
    'A240': 240,
    'A400': 400,
    'A500': 500,
    'A600': 600,
    'A800': 800,
    'A1000': 1000,
    'B500': 500,
    'Bp500': 500,
    'Bp1200': 1200,
    'Bp1300': 1300,
    'Bp1400': 1400,
    'Bp1500': 1500,
    'Bp1600': 1600,
    'K1400': 1400,
    'K1500': 1500,
    'K1600': 1600,
    'K1700': 1700
};


export default function (classname = null, Ysi = 1.0) {

    if (!Rsn.hasOwnProperty(classname) || typeof Ysi !== "number") {
        return null;
    }

    if (Ysi < 0) {
        return null;
    }

    return Rsn[classname] * Ysi;
}