import * as CONST from './Constants';

export default function(type) {
    const LIGHT_CONCRETE_DENSITIES = [800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
    const POROUS_CONCRETE_DENSITIES = [800, 900, 1000, 1100, 1200, 1300, 1400];
    const CELL_CONCRETE_DENSITIES = [600, 700, 800, 900, 1000, 1100, 1200];
    const CELL_AUTOCLAVE_CONCRETE_DENSITIES = [500, 600, 700, 800, 900, 1000, 1100, 1200];

    let values = [];

    if (type === CONST.LIGHT_CONCRETE) {
        values = LIGHT_CONCRETE_DENSITIES;
    }
    if (type === CONST.POROUS_CONCRETE) {
        values = POROUS_CONCRETE_DENSITIES;
    }
    if (type === CONST.CELL_CONCRETE) {
        values = CELL_CONCRETE_DENSITIES;
    }
    if (type === CONST.CELL_AUTOCLAVE_CONCRETE) {
        values = CELL_AUTOCLAVE_CONCRETE_DENSITIES;
    }

    return values.map(function (number) {
        return CONST.DENSITY_PREFIX + number.toString();
    });
}