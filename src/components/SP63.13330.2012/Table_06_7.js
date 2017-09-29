import * as CONST from './Constants';
import * as FUNC from './Common_Functions';

const HEAVY_CONCRETE_Rb = {
    'B3,5': 2.7,
    'B5': 3.5,
    'B7,5': 5.5,
    'B10': 7.5,
    'B12,5': 9.5,
    'B15': 11,
    'B20': 15,
    'B25': 18.5,
    'B30': 22,
    'B35': 25.5,
    'B40': 29,
    'B45': 32,
    'B50': 36,
    'B55': 39.5,
    'B60': 43,
    'B70': 50,
    'B80': 57,
    'B90': 64,
    'B100': 71
};

const LIGHT_CONCRETE_Rb = {
    'B2,5': 1.9,
    'B3,5': 2.7,
    'B5': 3.5,
    'B7,5': 5.5,
    'B10': 7.5,
    'B12,5': 9.5,
    'B15': 11,
    'B20': 15,
    'B25': 18.5,
    'B30': 22,
    'B35': 25.5,
    'B40': 29
};

const CELL_CONCRETE_Rb = {
    'B1,5': 1.4,
    'B2': 1.9,
    'B2,5': 2.4,
    'B3,5': 3.3,
    'B5': 4.6,
    'B7,5': 6.9,
    'B10': 9,
    'B12,5': 10.5,
    'B15': 11.5
};

const HEAVY_CONCRETE_Rbt = {
    'B3,5': 0.39,
    'B5': 0.55,
    'B7,5': 0.7,
    'B10': 0.85,
    'B12,5': 1,
    'B15': 1.1,
    'B20': 1.35,
    'B25': 1.55,
    'B30': 1.75,
    'B35': 1.95,
    'B40': 2.10,
    'B45': 2.25,
    'B50': 2.45,
    'B55': 2.60,
    'B60': 2.75,
    'B70': 3,
    'B80': 3.3,
    'B90': 3.6,
    'B100': 3.8
};

const LIGHT_CONCRETE_Rbt = {
    'B2,5': 0.29,
    'B3,5': 0.39,
    'B5': 0.55,
    'B7,5': 0.7,
    'B10': 0.85,
    'B12,5': 1,
    'B15': 1.1,
    'B20': 1.35,
    'B25': 1.55,
    'B30': 1.75,
    'B35': 1.95,
    'B40': 2.10,
};

const CELL_CONCRETE_Rbt = {
    'B1,5': 0.22,
    'B2': 0.26,
    'B2,5': 0.31,
    'B3,5': 0.41,
    'B5': 0.55,
    'B7,5': 0.63,
    'B10': 0.89,
    'B12,5': 1,
    'B15': 1.05
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
