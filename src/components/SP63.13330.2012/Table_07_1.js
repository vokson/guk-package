function interpolate(a1, a2, b1, b2, x) {
    return b1 + (x - a1) / (a2 - a1) * (b2 - b1);
}

var input = [0, 6, 10, 15, 20];
var output = [1.0, 0.92, 0.9, 0.8, 0.6];

export default function (e0_h = null) {

    console.log("e0_h = "+e0_h);
    if (
        typeof e0_h === "number" && e0_h >= 0 && e0_h <= 20
    ) {
        if (e0_h == 0) return output[0];

        for (var i = 1; i < input.length; i++) {
            if (input[i] >= e0_h) {
                return interpolate(input[i - 1], input[i], output[i - 1], output[i], e0_h);
            }
        };

    }

    return null;
}