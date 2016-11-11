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