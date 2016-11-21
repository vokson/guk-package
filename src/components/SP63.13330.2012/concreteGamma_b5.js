export default function (isColdTemperatureMoreThanMinus40 = true) {

    if (typeof isColdTemperatureMoreThanMinus40 !== "boolean") {
        return null;
    }

    if (isColdTemperatureMoreThanMinus40 === false) {
        return null;
    }

    if (isColdTemperatureMoreThanMinus40 === true) {
        return 1.0;
    }

}