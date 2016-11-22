import * as CONST from './Constants';

export default function (type = null, humidity = null) {

    if (
        type === CONST.HEAVY_CONCRETE ||
        type === CONST.PRESTRESSED_CONCRETE ||
        type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B ||
        type === CONST.LIGHT_CONCRETE ||
        type === CONST.POROUS_CONCRETE
    ) {
        return 1.0;
    }

    if (
        (type === CONST.CELL_CONCRETE || type === CONST.CELL_AUTOCLAVE_CONCRETE) &&
        (humidity >= 0 && humidity <= 100)
    ) {
        if (humidity <= 10) {
            return 1.0;
        }

        if (humidity > 10 && humidity < 25) {
            return 1.0 + (humidity - 10) / (25 - 10) * (0.85 - 1.0);
        }

        if (humidity >= 25) {
            return 0.85;
        }

    }

    return null;
}