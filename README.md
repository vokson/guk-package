# СП 63.13330.2012 (Изм.1)
## Константы
```
const HEAVY_CONCRETE = 0 - Тяжелый бетон

const PRESTRESSED_CONCRETE = 1 - Напрягающий бетон

const FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A = 2
Мелкозернистый бетон естественного твердения (группа А)

const FINE_GRAIN_HEATED_CONCRETE_GROUP_A = 3
Мелкозернистый бетон, подвергнутый тепловой обработке при атмосферном давлении, (группа А)

const FINE_GRAIN_AUTOCLAVE_CONCRETE_GROUP_B = 4
Мелкозернистый бетон, подвергнутый автоклавной обработке, (группа Б)

const LIGHT_CONCRETE = 5
Легкий бетон плотной структуры ("легкий" бетон)

const POROUS_CONCRETE = 6
Легкий бетон поризованной структуры со степенью поризации > 6% ("поризованный" бетон)

const CELL_AUTOCLAVE_CONCRETE = 7
Ячеистый автоклавный бетон

const CELL_CONCRETE = 8
Ячеистый неавтоклавный бетон

const CONCRETE_TYPES_DESCRIPTION []- массив описаний типов бетона

const HIGH_HUMIDITY = 0 - Выше 75%
const MIDDLE_HUMIDITY = 1 - 40-75%
const LOW_HUMIDITY = 2 - Ниже 40%

const HUMIDITY_DESCRIPTION = [] - массив описаний относительной влажности

const SHORT_TERM_LOAD = 0 - Кратковременная нагрузка
const LONG_TERM_LOAD = 1 - Длительная нагрузка

export const LOADS_DESCRIPTION = [] - массив описаний типов нагрузок

export const COMPRESSION = 0 - Сжатие
export const TENSION = 1 - Растяжение

export const STRESS_TYPE_DESCRIPTION = [] - массив описаний типов напряженного состояния
```

## Функции
*[string]* __table_06_1__ (*number* __type__, *string* __density__)
Возвращает массив классов бетона на сжатие из Таблицы 6.1
* __type__ - тип бетона;
* __density__ - марка бетона по средней плотности;
#### Example

```javascript
var NORM = require('module_name');

NORM.table_06_1(1)
// ['B20', 'B25', 'B30', 'B35', 'B40', 'B45', 'B50', 'B55', 'B60', 'B70']

NORM.table_06_1(NORM.LIGHT_CONCRETE, 'D900')
// ['B2,5', 'B3,5', 'B5', 'B7,5']
```
---
*[string]* __table_06_2__ (*number* __type__)

Возвращает массив классов бетона на растяжение из Таблицы 6.2
* __type__ - тип бетона;

#### Example
```javascript
NORM.table_06_2(NORM.LIGHT_CONCRETE)
// ['Bt0,8', 'Bt1,2', 'Bt1,6', 'Bt2,0', 'Bt2,4', 'Bt2,8', 'Bt3,2']
```
---
*[string]* __table_06_3__ (*number* __type__)

Возвращает массив марок бетона по морозостойкости из Таблицы 6.3
* __type__ - тип бетона;

#### Example

```javascript
NORM.table_06_3(NORM.LIGHT_CONCRETE)
// ['F25', 'F35', 'F50', 'F75', 'F100', 'F150', 'F200', 'F300', 'F400', 'F500']
```
---
*[string]* __table_06_4__ (*number* __type__)

Возвращает массив марок бетона по водонепроницаемости из Таблицы 6.4
* __type__ - тип бетона;

#### Example

```javascript
NORM.table_06_4(NORM.LIGHT_CONCRETE)
// ['W2', 'W4', 'W6', 'W8', 'W10', 'W12']
```
---
*[string]* __table_06_5__ (*number* __type__)

Возвращает массив марок бетона по средней плотности из Таблицы 6.5
* __type__ - тип бетона;

#### Example

```javascript
NORM.table_06_5(NORM.POROUS_CONCRETE)
// ['D800', 'D900', 'D1000', 'D1100', 'D1200', 'D1300', 'D1400']
```
---
*[string]* __table_06_6__ (*number* __type__)

Возвращает массив марок бетона по самонапряжению из Таблицы 6.6
* __type__ - тип бетона;

#### Example

```javascript
NORM.table_06_6(NORM.PRESTRESSED_CONCRETE)
// ['Sp0,6','Sp0,8', 'Sp1', 'Sp1,2', 'Sp1,5', 'Sp2', 'Sp3', 'Sp4']
```
---
*number* __getYb1__ (*number* __loadType__, *number* __type__)

Возвращает коэффициент гамма_b1 для **Rb, Rbt** из п.6.1.12 а)
* __loadType__ - тип нагрузки: кратковременная или длительная (см. константы);
* __type__ - тип бетона;

#### Example

```javascript
NORM.getYb1(NORM.LONG_TERM_LOAD, NORM.CELL_CONCRETE)
// 0.85
```
---
*number* __getYb2__ (*boolean* __isOnlyConcrete__)

Возвращает коэффициент гамма_b2 для **Rb** из п.6.1.12 б)
* __isOnlyConcrete__ - конструкция состоит только из бетона?;

#### Example

```javascript
NORM.getYb2(true)
// 0.9
```
---
*number* __getYb3__ (*boolean* __isHeightMoreThanLimit__)

Возвращает коэффициент гамма_b3 для **Rb** из п.6.1.12 в)
* __isHeightMoreThanLimit__ - высота слоя бетонирования более 1.5м?;

#### Example

```javascript
NORM.getYb3(true)
// 0.85
```
---
*number* __getYb4__ (*number* __type__, *number* __humidity__)

Возвращает коэффициент гамма_b4 для **Rb** из п.6.1.12 г)
* __type__ - тип бетона;
* __humidity__ - относительная влажность в %;

#### Example

```javascript
NORM.getYb4(NORM.CELL_CONCRETE, 15)
// 0.95
```
---
*number* __getYb5__ (*boolean* __isColdTemperatureMoreThanMinus40__)

Возвращает коэффициент гамма_b5 из п.6.1.12
* __isColdTemperatureMoreThanMinus40__ - расчетная температура наружного воздуха в холодный период минус 40 и выше;

#### Example

```javascript
NORM.concreteGamma_b4(NORM.CELL_CONCRETE, 15)
// 0.95
```
---
*[number]* __table_06_7__ (*number* __type__, *string* __class__, *number* __Ybi = 1.0__, *number* __Ybti = 1.0__, *boolean* __isDecreaseFactorToBeApplied = false__)

Возвращает массив нормативных сопротивлений бетона **[Rb,n ; Rbt,n]** из Таблицы 6.7 (МПа)
* __type__ - тип бетона;
* __class__ - класс бетона по прочности на сжатие;
* __Ybi__ - коэффициент, понижающий **Rb**, > 0;
* __Ybti__ - коэффициент, понижающий **Rbt**, > 0;
* __isDecreaseFactorToBeApplied__ - следует ли умножать Rbt,n на коэффициент 0.8 (прим. 2 Таблица 6.7);

#### Example

```javascript
NORM.table_06_7(NORM.HEAVY_CONCRETE, 'B25')
// [18.5, 1.55]

NORM.table_06_7(NORM.LIGHT_CONCRETE, 'B15', 1.0, 1.0, true)
// [11.0, 0.88]
```
---
*[number]* __table_06_8__ (*number* __type__, *string* __class__, *number* __Ybi = 1.0__, *number* __Ybti = 1.0__, *boolean* __isDecreaseFactorToBeApplied = false__)

Возвращает массив расчетных сопротивлений бетона **[Rb ; Rbt]** из Таблицы 6.8 (МПа)
* __type__ - тип бетона;
* __class__ - класс бетона по прочности на сжатие;
* __Ybi__ - коэффициент, понижающий **Rb**, > 0;
* __Ybti__ - коэффициент, понижающий **Rbt**, > 0;
* __isDecreaseFactorToBeApplied__ - следует ли умножать Rbt,n на коэффициент 0.8 (прим. 2 Таблица 6.8);

#### Example

```javascript
NORM.table_06_8(NORM.HEAVY_CONCRETE, 'B25')
// [14.5, 1.05]

NORM.table_06_8(NORM.LIGHT_CONCRETE, 'B15', 1.0, 1.0, true)
// [8.5, 0.60]
```
---
*[number]* __table_06_9__ (*number* __type__, *string* __class__)

Возвращает расчетное сопротивление бетона **Rbt** из Таблицы 6.9 (МПа)
* __type__ - тип бетона;
* __class__ - класс бетона по прочности на осевое растяжение;

#### Example

```javascript
NORM.table_06_9(NORM.PRESTRESSED_CONCRETE, 'Bt2,4')
// 1.85

NORM.table_06_9(NORM.CELL_CONCRETE, 'Bt2,4')
// null
```
---
*[number]* __table_06_10__ (*number* __type__, *string* __class__, *number* __humidity__, *number* __stressCondition__)

Возвращает массив относительных деформаций бетона из Таблицы 6.10 (МПа)

**[Eb0; Eb2; Eb1,red]** - при сжатии, **[Ebt0; Ebt2; Ebt1,red]** - при растяжении
* __type__ - тип бетона;
* __class__ - класс бетона по прочности на осевое растяжение;
* __humidity__ - группа относительной влажности;
* __stressCondition__ - вид напряженного состояния;

#### Example

```javascript
NORM.table_06_10(NORM.HEAVY_CONCRETE, 'B80', NORM.HIGH_HUMIDITY, NORM.COMPRESSION)
// [0.003, 0.0038, 0.0024]

NORM.table_06_10(NORM.PRESTRESSED_CONCRETE, 'B20', NORM.LOW_HUMIDITY, NORM.TENSION)
// [0.00028, 0.00036, 0.00026]
```
---
*number* __table_06_11__ (*number* __type__, *string* __class__, *string* __density = null__)

Возвращает начальный модуль упругости **Eb** бетона из Таблицы 6.11 (МПа)
* __type__ - тип бетона;
* __class__ - класс бетона по прочности на сжатие;
* __density__ - марка бетона по средней плотности;

#### Example

```javascript
NORM.table_06_11(NORM.HEAVY_CONCRETE, 'B15')
// 24000
NORM.table_06_11(NORM.LIGHT_CONCRETE, 'B2,5', 'D900')
// 4500
```
---
*number* __table_06_12__ (*string* __class__, *number* __humidity__)

Возвращает коэффициент ползучести бетона из Таблицы 6.12 (МПа)

* __class__ - класс бетона по прочности на осевое растяжение;
* __humidity__ - группа относительной влажности;

#### Example

```javascript
NORM.table_06_12('B15', NORM.HIGH_HUMIDITY)
// 2.4
```
---
*number* __formula_06_3__ (*number* __Eb__, *number* __Fi_b,cr__)

Возвращает значение модуля деформации бетона при продолжительном действии нагрузки, вычисленное по Формуле 6.3.

* __Eb__ - начальный модуль упругости бетона;
* __Fi_b,cr__ - коэффициент ползучести бетона;

#### Example

```javascript
var Eb = NORM.table_06_11(NORM.HEAVY_CONCRETE, 'B15');
// 24000
var Fi = NORM.table_06_12('B15', NORM.HIGH_HUMIDITY);
// 2.4
NORM.formula_06_3(Eb, Fi)
// 7058.8235
```
---
*[[number, number]]* __get3LinearDiagramForConcrete__ (*number* __type__, *string* __class__, *number* __Ybi = 1.0__, *number* __Ybti = 1.0__, *number* __loadType__, *number* __humidity = null__, *boolean* __isDecreaseFactorToBeApplied = false__)

Возвращает 3-х линейную диаграмму состояния бетона сразу для сжатой (-) и растянутой(+) зон в виде двумерного массива координат точек (Рис. 6.1), включая нулевую точку.

* __type__ - тип бетона;
* __class__ - класс бетона по прочности на сжатие (только тяжелый, напрягающий, мелкозернистый);
* __Ybi__ - коэффициент, понижающий **Rb**, > 0;
* __Ybti__ - коэффициент, понижающий **Rbt**, > 0;
* __loadType__ - тип нагрузки: кратковременная или длительная (см. константы);
* __humidity__ - группа относительной влажности (только для длительных нагрузок);
* __isDecreaseFactorToBeApplied__ - следует ли умножать Rbt,n на коэффициент 0.8 (прим. 2 Таблица 6.8);

#### Example

```javascript
NORM.get3LinearDiagram(NORM.HEAVY_CONCRETE, 'B15', 1.0, 1.0,  NORM.SHORT_TERM_LOAD)
// [
// [ -0.0035, -8.5 ],
// [ -0.002, -8.5 ],
// [ -0.0002125, -5.1 ],
// [ 0, 0 ],
// [ 0.00001875, 0.45],
// [ 0.0001, 0.75 ],
// [ 0.00015, 0.75 ]
// ]

NORM.get3LinearDiagram(NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A, 'B15', 1.0, 1.0, 
 NORM.LONG_TERM_LOAD, NORM.LOW_HUMIDITY, true)
// [
// [ -0.0056, -8.5 ],
// [ -0.004, -8.5 ],
// [ -0.0015169230769230767, -5.1 ],
// [ 0, 0 ],
// [ 0.00010707692307692309, 0.36 ],
// [ 0.00028, 0.6 ],
// [ 0.00036, 0.6 ]
// ]
```
---
*[[number, number]]* __get2LinearDiagramForConcrete__ (*number* __type__, *string* __class__, *number* __Ybi = 1.0__, *number* __Ybti = 1.0__, *number* __loadType__, *number* __humidity = null__, *boolean* __isDecreaseFactorToBeApplied = false__)

Возвращает 2-х линейную диаграмму состояния бетона сразу для сжатой (-) и растянутой(+) зон в виде двумерного массива координат точек (Рис. 6.1), включая нулевую точку.

* __type__ - тип бетона;
* __class__ - класс бетона по прочности на сжатие (только тяжелый, напрягающий, мелкозернистый);
* __Ybi__ - коэффициент, понижающий **Rb**, > 0;
* __Ybti__ - коэффициент, понижающий **Rbt**, > 0;
* __loadType__ - тип нагрузки: кратковременная или длительная (см. константы);
* __humidity__ - группа относительной влажности (только для длительных нагрузок);
* __isDecreaseFactorToBeApplied__ - следует ли умножать Rbt,n на коэффициент 0.8 (прим. 2 Таблица 6.8);

#### Example

```javascript
NORM.get2LinearDiagram(NORM.HEAVY_CONCRETE, 'B15', 1.0, 1.0, NORM.SHORT_TERM_LOAD)
// [
// [ -0.0035, -8.5 ],
// [ -0.0015, -8.5 ],
// [ 0, 0 ],
// [ 0.00008, 0.75 ],
// [ 0.00015, 0.75 ]
// ]

NORM.get2LinearDiagram(NORM.FINE_GRAIN_NOT_HEATED_CONCRETE_GROUP_A, 'B15', 1.0, 1.0,
 NORM.LONG_TERM_LOAD, NORM.LOW_HUMIDITY, true)
// [
// [ -0.0056, -8.5 ],
// [ -0.0034, -8.5 ],
// [ 0, 0 ],
// [ 0.00026, 0.6 ],
// [ 0.00036, 0.6 ]
// ]
```
---
*number* __table_06_13__ (*string* __class__, *number* __Ysi = 1.0__)

Возвращает нормативное сопротивление арматуры растяжению **Rs,n** из Таблицы 6.13 (МПа)
* __class__ - класс арматуры;
* __Ysi__ - коэффициент, понижающий **Rs,n**, > 0;

#### Example

```javascript
NORM.table_06_13('A500', 1.0)
// 500
```
---
*[number]* __table_06_14__ (*string* __class__, *number* __Ysi = 1.0__, *number* __loadType__)

Возвращает массив расчетных сопротивлений арматуры **[Rs ; Rsc]** из Таблицы 6.14 (МПа)
* __class__ - класс арматуры;
* __Ysi__ - коэффициент, понижающий **Rs, Rsc**, > 0;
* __loadType__ - тип нагрузки: кратковременная или длительная (см. константы);

#### Example

```javascript
NORM.table_06_14('A500', 1.0, NORM.SHORT_TERM_LOAD)
// [ 435, 400 ]
```
---
*number* __table_06_15__ (*string* __class__, *number* __Ysi = 1.0__)

Возвращает расчетное сопротивление поперечной арматуры растяжению **Rsw** из Таблицы 6.15 (МПа)
* __class__ - класс арматуры;
* __Ysi__ - коэффициент, понижающий **Rsw**, > 0;

#### Example

```javascript
NORM.table_06_15('A500', 1.0)
// 300
```
---
*number* __formula_06_11__ (*number* __Rs__, *number* __Es__)

Возвращает значение **es0** по формуле 6.11 (МПа)
* __Rs__ - расчетное сопротивление арматуры, >= 0;
* __Es__ - модуль упругости арматуры, > 0;

#### Example

```javascript
NORM.formula_06_11(500, 200000)
// 0.0025
```
---
*number* __formula_06_12__ (*number* __Rs__, *number* __Es__)

Возвращает значение **es0** по формуле 6.12 (МПа)
* __Rs__ - расчетное сопротивление арматуры, >= 0;
* __Es__ - модуль упругости арматуры, > 0;

#### Example

```javascript
NORM.formula_06_12(500, 200000)
// 0.0045
```
---
*number* __clause_06_2_12__ (*string* __class__)

Возвращает значение модуля упругости **Es** по п.6.2.12 (МПа)
* __class__ - класс арматуры;

#### Example

```javascript
NORM.clause_06_2_12('A400')
// 200000
```
---
*[[number, number]]* __get2LinearDiagramForRebar__ (*string* __class__, *number* __Ysi = 1.0__, *number* __loadType__)

Возвращает 2-х линейную диаграмму состояния арматуры сразу для сжатой (-) и растянутой(+) зон в виде двумерного массива координат точек (Рис. 6.2), включая нулевую точку.

* __class__ - класс арматуры;
* __Ysi__ - коэффициент, понижающий **Rs, Rsc**, > 0;
* __loadType__ - тип нагрузки: кратковременная или длительная (см. константы);

#### Example

```javascript
NORM.get2LinearDiagramForRebar('A500', 1.0, NORM.SHORT_TERM_LOAD)
// [
// [ -0.0025, -400 ],
// [ -0.002,  -400 ],
// [ 0, 0 ],
// [ 0.002175, 435 ],
// [ 0.025, 435 ]
// ]
```
---
*[[number, number]]* __get3LinearDiagramForRebar__ (*string* __class__, *number* __Ysi = 1.0__, *number* __loadType__)

Возвращает 3-х линейную диаграмму состояния арматуры сразу для сжатой (-) и растянутой (+) зон в виде двумерного массива координат точек (Рис. 6.2), включая нулевую точку.

* __class__ - класс арматуры;
* __Ysi__ - коэффициент, понижающий **Rs, Rsc**, > 0;
* __loadType__ - тип нагрузки: кратковременная или длительная (см. константы);

#### Example

```javascript
NORM.get3LinearDiagramForRebar('A500', 1.0, NORM.SHORT_TERM_LOAD)
// [
// [ -0.015, -440 ],
// [ -0.0022, -440 ],
// [ -0.0018, -360 ],
// [ 0, 0 ],
// [ 0.0019575, 391.5 ],
// [ 0.0023925, 478.5 ],
// [ 0.015, 478.5 ]
// ]
```
---
*number* __formula_07_1__ (*number* __Rb__, *number* __Ab__)

Возвращает значение **N** по формуле 7.1
* __Rb__ - предел прочности бетона при сжатии, >= 0;
* __Ab__ - площадь сжатой зоны бетона, определяемая из условия, что ее центр тяжести совпадает с точкой приложения продольной силы N (с учетом прогиба), >= 0;

#### Example

```javascript
NORM.formula_07_1(100, 20)
// 2000
```
---
*number* __formula_07_2__ (*number* __b__, *number* __h__, *number* __e0__, *number* __nu__)

Возвращает значение **Ab** по формуле 7.2
* __b__ - ширина прямоугольного сечения, >= 0;
* __h__ - высота прямоугольного сечения, > 0;
* __e0__ - эксцентриситет приложения силы, >= 0;
* __nu__ - коэффициент, учитывающий влияния прогиба, >= 0;

#### Example

```javascript
NORM.formula_07_2(10, 20, 0.1, 0.2)
// 199.6
```
---
*number* __table_07_1__ (*number* __e0_h__, *number* __loadType__)

Возвращает значение **Fi** по таблице 7.1 для длительных нагрузок, по формуле 7.3 - для кратковременных
* __e0_h__ - отношение e0/h, >= 0, <=20;
* __loadType__ - тип нагрузки: кратковременная или длительная (см. константы);

#### Example

```javascript
console.log(NORM.table_07_1(15.0, NORM.SHORT_TERM_LOAD));
// 0.875
console.log(NORM.table_07_1(15.0, NORM.LONG_TERM_LOAD));
// 0.8
```
---
*number* __formula_07_3__ (*number* __Fi__, *number* __Rb__, *number* __Ab__)

Возвращает значение **N** по формуле 7.3
* __Fi__ - коэффициент, принимаемый по Таблице 7.1, >= 0;
* __Rb__ - предел прочности бетона при сжатии, >= 0;
* __Ab__ - площадь поперечного сечения, >= 0;

#### Example

```javascript
NORM.formula_07_3(0.9, 100, 20)
// 1800
```
---
*number* __formula_07_4__ (*number* __Rbt__, *number* __A__, *number* __I__, *number* __e0__, *number* __nu__, *number* __Yt__)

Возвращает значение **N** по формуле 7.4
* __Rbt__ - предел прочности бетона при растяжении, >= 0;
* __A__ - площадь поперечного сечения, >= 0;
* __I__ - момент инерции сечения от-но его центра тяжести, > 0;
* __e0__ - эксцентриситет приложения силы, >= 0;
* __nu__ - коэффициент, определяемый по п.7.1.11, >= 0;
* __Yt__ - расстояние от наиболее растянутого волокна до центра тяжести сечения, >= 0;

Вернет null, если знаменатель = 0.

#### Example

```javascript
NORM.formula_07_4(10, 20, 30, 0.5, 1.5, 2.5)
// 800
```
---
*number* __formula_07_5__ (*number* __Rbt__, *number* __b__, *number* __h__, *number* __e0__, *number* __nu__)

Возвращает значение **N** по формуле 7.5
* __Rbt__ - предел прочности бетона при растяжении, >= 0;
* __b__ - ширина поперечного сечения, >= 0;
* __h__ - высота поперечного сечения, > 0;
* __e0__ - эксцентриситет приложения силы, >= 0;
* __nu__ - коэффициент, определяемый по п.7.1.11, >= 0;

Вернет null, если знаменатель = 0.

#### Example

```javascript
NORM.formula_07_5(10, 20, 20, 2, 5)
// 2000
NORM.formula_07_5(10, 20, 6, 1, 1)
// null
```
---
*number* __formula_07_6__ (*number* __N__, *number* __Ncr__)

Возвращает значение **nu** по формуле 7.6
* __N__ - продольная сила, >= 0;
* __Ncr__ - условная критическая сила, определяемая по формуле 7.7, > 0;

Вернет null, если знаменатель = 0.

#### Example

```javascript
NORM.formula_07_6(100, 200)
// 2
```
---
*number* __formula_07_7__ (*number* __D__, *number* __L0__)

Возвращает значение **Ncr** по формуле 7.7
* __D__ - жесткость ж.б. эл-та без учета арматуры, определяемая по 8.1.15, >= 0;
* __L0__ - расчетная длина элемента, > 0;

#### Example

```javascript
NORM.formula_07_7(100, 2)
// 246.74011...
```
---