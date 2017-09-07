import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

const HEAVY_CONCRETE_Rb = {
    'B3,5': 2.1,
    'B5': 2.8,
    'B7,5': 4.5,
    'B10': 6,
    'B12,5': 7.5,
    'B15': 8.5,
    'B20': 11.5,
    'B25': 14.5,
    'B30': 17,
    'B35': 19.5,
    'B40': 22,
    'B45': 25,
    'B50': 27.5,
    'B55': 30,
    'B60': 33,
    'B70': 37,
    'B80': 41,
    'B90': 44,
    'B100': 47.5
};

const LIGHT_CONCRETE_Rb = {
    'B2,5': 1.5,
    'B3,5': 2.1,
    'B5': 2.8,
    'B7,5': 4.5,
    'B10': 6,
    'B12,5': 7.5,
    'B15': 8.5,
    'B20': 11.5,
    'B25': 14.5,
    'B30': 17,
    'B35': 19.5,
    'B40': 22,
};

const CELL_CONCRETE_Rb = {
    'B1,5': 0.95,
    'B2': 1.3,
    'B2,5': 1.6,
    'B3,5': 2.2,
    'B5': 3.1,
    'B7,5': 4.6,
    'B10': 6.0,
    'B12,5': 7.0,
    'B15': 7.7
};

const HEAVY_CONCRETE_Rbt = {
    'B3,5': 0.26,
    'B5': 0.37,
    'B7,5': 0.48,
    'B10': 0.56,
    'B12,5': 0.66,
    'B15': 0.75,
    'B20': 0.9,
    'B25': 1.05,
    'B30': 1.15,
    'B35': 1.3,
    'B40': 1.4,
    'B45': 1.5,
    'B50': 1.6,
    'B55': 1.7,
    'B60': 1.8,
    'B70': 1.9,
    'B80': 2.1,
    'B90': 2.15,
    'B100': 2.2
};

const LIGHT_CONCRETE_Rbt = {
    'B2,5': 0.2,
    'B3,5': 0.26,
    'B5': 0.37,
    'B7,5': 0.48,
    'B10': 0.56,
    'B12,5': 0.66,
    'B15': 0.75,
    'B20': 0.9,
    'B25': 1.05,
    'B30': 1.15,
    'B35': 1.3,
    'B40': 1.4,
};

const CELL_CONCRETE_Rbt = {
    'B1,5': 0.09,
    'B2': 0.12,
    'B2,5': 0.14,
    'B3,5': 0.18,
    'B5': 0.24,
    'B7,5': 0.28,
    'B10': 0.39,
    'B12,5': 0.44,
    'B15': 0.46
};

function isClassCorrect(type, classname) {
    if (
        type === CONST.HEAVY_CONCRETE ||
        type === CONST.PRESTRESSED_CONCRETE ||
        type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
    ) {
        return HEAVY_CONCRETE_Rb.hasOwnProperty(classname);
    }

    if (
        type === CONST.LIGHT_CONCRETE ||
        type === CONST.POROUS_CONCRETE
    ) {
        return LIGHT_CONCRETE_Rb.hasOwnProperty(classname);
    }

    if (
        type === CONST.CELL_AUTOCLAVE_CONCRETE ||
        type === CONST.CELL_CONCRETE
    ) {
        return CELL_CONCRETE_Rb.hasOwnProperty(classname);
    }

    return false;
}

function getRb(type, classname) {
    if (
        type === CONST.HEAVY_CONCRETE ||
        type === CONST.PRESTRESSED_CONCRETE ||
        type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
    ) {
        return HEAVY_CONCRETE_Rb[classname];
    }

    if (
        type === CONST.LIGHT_CONCRETE ||
        type === CONST.POROUS_CONCRETE
    ) {
        return LIGHT_CONCRETE_Rb[classname];
    }

    if (
        type === CONST.CELL_AUTOCLAVE_CONCRETE ||
        type === CONST.CELL_CONCRETE
    ) {
        return CELL_CONCRETE_Rb[classname];
    }
}

function getRbt(type, classname) {
    if (
        type === CONST.HEAVY_CONCRETE ||
        type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
        type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B
    ) {
        return HEAVY_CONCRETE_Rbt[classname];
    }

    if (type === CONST.PRESTRESSED_CONCRETE) {
        return HEAVY_CONCRETE_Rbt[classname] * 1.2;
    }

    if (type === CONST.LIGHT_CONCRETE) {
        return LIGHT_CONCRETE_Rbt[classname];
    }

    if (type === CONST.POROUS_CONCRETE) {
        return LIGHT_CONCRETE_Rbt[classname] * 0.7;
    }

    if (
        type === CONST.CELL_AUTOCLAVE_CONCRETE ||
        type === CONST.CELL_CONCRETE
    ) {
        return CELL_CONCRETE_Rbt[classname];
    }
}

let defaultValidationProperties = {"type": "number", "minimum": 0};
let defaultProperties = {"Ybi": 1.0, "Ybti": 1.0, "isReductionFactorToBeApplied": false};

let schema = {
    "type": "object",
    "properties": {
        "type": {
            "oneOf": [
                {"const": CONST.HEAVY_CONCRETE},
                {"const": CONST.PRESTRESSED_CONCRETE},
                {"const": CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A},
                {"const": CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A},
                {"const": CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B},
                {"const": CONST.LIGHT_CONCRETE},
                {"const": CONST.POROUS_CONCRETE},
                {"const": CONST.CELL_AUTOCLAVE_CONCRETE},
                {"const": CONST.CELL_CONCRETE},
            ]
        },
        "classname": {"type": "string"},
        "isReductionFactorToBeApplied": {"type": "boolean"},
    },
    "required": [
        "type",
        "classname",
        "Ybi",
        "Ybti",
        "isReductionFactorToBeApplied",
    ]
};

function calculate(obj) {
    if (!isClassCorrect(obj.type, obj.classname)) {
        return null;
    }

    let reductionFactor = 1;
    if (
        (obj.isReductionFactorToBeApplied === true) &&
        (
            obj.type === CONST.FINE_GRAIN_HEATED_CONCRETE_GROUP_A ||
            obj.type === CONST.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A ||
            obj.type === CONST.FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B ||
            obj.type === CONST.LIGHT_CONCRETE
        )
    ) {
        reductionFactor = 0.8;
    }

    return [getRb(obj.type, obj.classname) * obj.Ybi, getRbt(obj.type, obj.classname) * obj.Ybti * reductionFactor];
}

export default function (json) {

    Object.keys(defaultProperties).map(function(key, index) {
        if (!(key in json)) json[key] = defaultProperties[key];
    });

    return FUNC.prepareFeedbackObject(schema, defaultValidationProperties, json, calculate);
}