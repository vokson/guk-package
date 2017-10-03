export const HEAVY_CONCRETE = 0;
export const PRESTRESSED_CONCRETE = 1;
export const FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A = 2;
export const FINE_GRAIN_HEATED_CONCRETE_GROUP_A = 3;
export const FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B = 4;
export const LIGHT_CONCRETE = 5;
export const POROUS_CONCRETE = 6;
export const CELL_AUTOCLAVE_CONCRETE = 7;
export const CELL_CONCRETE = 8;

export const DENSITY_PREFIX = 'D';

export const CONCRETE_TYPES_DESCRIPTION = [
    'Тяжелый бетон',
    'Напрягающий бетон',
    'Мелкозернистый бетон естественного твердения (группа А)',
    'Мелкозернистый бетон, подвергнутый тепловой обработке при атмосферном давлении, (группа А)',
    'Мелкозернистый бетон, подвергнутый автоклавной обработке, (группа Б)',
    'Легкий бетон плотной структуры ("легкий" бетон)',
    'Легкий бетон поризованной структуры со степенью поризации > 6% ("поризованный" бетон)',
    'Ячеистый автоклавный бетон',
    'Ячеистый неавтоклавный бетон'
];

export const HIGH_HUMIDITY = 0;
export const MIDDLE_HUMIDITY = 1;
export const LOW_HUMIDITY = 2;

export const HUMIDITY_DESCRIPTION = [
    'Выше 75%',
    '40-75%',
    'Ниже 40%',
];

export const SHORT_TERM_LOAD = 0;
export const LONG_TERM_LOAD = 1;

export const LOADS_DESCRIPTION = [
    'Кратковременная',
    'Длительная',
];

export const COMPRESSION = 0;
export const TENSION = 1;

export const STRESS_TYPE_DESCRIPTION = [
    'Сжатие',
    'Растяжение',
];

// В обозначениях переменных используется "$" вместо "'"
export const VAR_a$ = "a1";
export const VAR_Ab = "Ab";
export const VAR_As = "As";
export const VAR_As$ = "A1s";
export const VAR_CONCRETE_CLASS = "classname";
export const VAR_CONCRETE_TENSION_CLASS = "classname";
export const VAR_CONCRETE_DENSITY = "density";
export const VAR_CONCRETE_HUMIDITY_IN_PERCENTS = "humidityPercentage";
export const VAR_CONCRETE_TYPE = "type";
export const VAR_D = "D";
export const VAR_DELTA_e = "delta_e";
export const VAR_e = "e";
export const VAR_e0 = "e0";
export const VAR_e_b2 = "e_b2";
export const VAR_e_sel = "e_sel";
export const VAR_Eb = "Eb";
export const VAR_Es = "Es";
export const VAR_FI = "Fi";
export const VAR_FI_B_CR = "Fi_b,cr";
export const VAR_FI_L = "Fi_L";
export const VAR_H0 = "h0";
export const VAR_HUMIDITY_GROUP = "humidity";
export const VAR_IS_COLD_TEMPERATURE_MORE_THAN_MINUS40 = "isColdTemperatureMoreThanMinus40";
export const VAR_IS_HEIGHT_MORE_THAN_LIMIT = "isHeightMoreThanLimit";
export const VAR_IS_ONLY_CONCRETE = "isOnlyConcrete";
export const VAR_IS_REDUCTION_FACTOR_FOR_Rbt_TO_BE_APPLIED = "isReductionFactorToBeApplied";
export const VAR_L0 = "L0";
export const VAR_L0_DIVIDE_H = "L0_h";
export const VAR_LOAD_TYPE = "loadType";
export const VAR_Kb = "Kb";
export const VAR_N = "N";
export const VAR_Ncr = "Ncr";
export const VAR_NU = "nu";
export const VAR_Rb = "Rb";
export const VAR_Rbt = "Rbt";
export const VAR_REBAR_CLASS = "classname";
export const VAR_REBAR_INERTIA_MOMENT = "Is";
export const VAR_Rs = "Rs";
export const VAR_Rsc = "Rsc";
export const VAR_SECTION_INERTIA_MOMENT = "I";
export const VAR_SECTION_HEIGHT = "h";
export const VAR_SECTION_SQUARE = "A";
export const VAR_SECTION_RESISTANCE_MOMENT = "W";
export const VAR_SECTION_WIDTH = "b";
export const VAR_STRESS_TYPE = "stress";
export const VAR_T_SECTION_FLANGE_WIDTH = "b1f";
export const VAR_T_SECTION_FLANGE_HEIGHT = "h1f";
export const VAR_X = "x";
export const VAR_Xi_R = "Xi_R";
export const VAR_Ybi = "Ybi";
export const VAR_Ybti = "Ybti";
export const VAR_Ysi = "Ysi";
export const VAR_Yt = "Yt";