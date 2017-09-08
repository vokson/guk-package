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
#### Таблица 6.1
*[string]* __table_06_1__ (jsonObject)
Возвращает массив классов бетона на сжатие из Таблицы 6.1. Поля объекта jsonObject:
* *number* __type__ - тип бетона;
* *string*  __density = null__ - марка бетона по средней плотности;

---
#### Таблица 6.2
*[string]* __table_06_2__ (jsonObject)

Возвращает массив классов бетона на растяжение из Таблицы 6.2. Поля объекта jsonObject:
* *number* __type__ - тип бетона;

---
#### Таблица 6.3
*[string]* __table_06_3__ (jsonObject)

Возвращает массив марок бетона по морозостойкости из Таблицы 6.3. Поля объекта jsonObject:
* *number* __type__ - тип бетона;

---
#### Таблица 6.4
*[string]* __table_06_4__ (jsonObject)

Возвращает массив марок бетона по водонепроницаемости из Таблицы 6.4. Поля объекта jsonObject:
* *number* __type__ - тип бетона;

---
#### Таблица 6.5
*[string]* __table_06_5__ (jsonObject)

Возвращает массив марок бетона по средней плотности из Таблицы 6.5. Поля объекта jsonObject:
* *number* __type__ - тип бетона;

---
#### Таблица 6.6
*[string]* __table_06_6__ (jsonObject)

Возвращает массив марок бетона по самонапряжению из Таблицы 6.6. Поля объекта jsonObject:
* *number* __type__ - тип бетона;

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
#### Таблица 6.7
*[number]* __table_06_7__ (jsonObject)

Возвращает массив нормативных сопротивлений бетона **[Rb,n ; Rbt,n]** из Таблицы 6.7 (МПа). Поля объекта jsonObject:
* *number* __type__ - тип бетона;
* *string* __class__ - класс бетона по прочности на сжатие;
* *number* __Ybi = 1.0__ - коэффициент, понижающий **Rb**, > 0;
* *number* __Ybti = 1.0__ - коэффициент, понижающий **Rbt**, > 0;
* *boolean* __isReductionFactorToBeApplied = false__ - следует ли умножать Rbt,n на коэффициент 0.8 (прим. 2 Таблица 6.7);

---
#### Таблица 6.8
*[number]* __table_06_8__ (jsonObject)

Возвращает массив расчетных сопротивлений бетона **[Rb ; Rbt]** из Таблицы 6.8 (МПа). Поля объекта jsonObject:
* *number* __type__ - тип бетона;
* *string* __class__ - класс бетона по прочности на сжатие;
* *number* __Ybi = 1.0__ - коэффициент, понижающий **Rb**, > 0;
* *number* __Ybti = 1.0__ - коэффициент, понижающий **Rbt**, > 0;
* *boolean8 __isReductionFactorToBeApplied = false__ - следует ли умножать Rbt,n на коэффициент 0.8 (прим. 2 Таблица 6.8);

---
#### Таблица 6.9
*[number]* __table_06_9__ (jsonObject)

Возвращает расчетное сопротивление бетона **Rbt** из Таблицы 6.9 (МПа). Поля объекта jsonObject:
* *number* __type__ - тип бетона;
* *string* __class__ - класс бетона по прочности на осевое растяжение;

---
#### Таблица 6.10
*[number]* __table_06_10__ (jsonObject)

Возвращает массив относительных деформаций бетона из Таблицы 6.10 (МПа). Поля объекта jsonObject:

**[Eb0; Eb2; Eb1,red]** - при сжатии, **[Ebt0; Ebt2; Ebt1,red]** - при растяжении
* *number* __type__ - тип бетона;
* *string* __class__ - класс бетона по прочности на осевое растяжение;
* *number* __humidity__ - группа относительной влажности;
* *number* __stress__ - вид напряженного состояния (см. константы);

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
*[[number, number]]* __get3LinearDiagramForConcrete__ (*number* __type__, *string* __class__, *number* __Ybi = 1.0__, *number* __Ybti = 1.0__, *number* __loadType__, *number* __humidity = null__, *boolean* __isReductionFactorToBeApplied = false__)

Возвращает 3-х линейную диаграмму состояния бетона сразу для сжатой (-) и растянутой(+) зон в виде двумерного массива координат точек (Рис. 6.1), включая нулевую точку.

* __type__ - тип бетона;
* __class__ - класс бетона по прочности на сжатие (только тяжелый, напрягающий, мелкозернистый);
* __Ybi__ - коэффициент, понижающий **Rb**, > 0;
* __Ybti__ - коэффициент, понижающий **Rbt**, > 0;
* __loadType__ - тип нагрузки: кратковременная или длительная (см. константы);
* __humidity__ - группа относительной влажности (только для длительных нагрузок);
* __isReductionFactorToBeApplied__ - следует ли умножать Rbt,n на коэффициент 0.8 (прим. 2 Таблица 6.8);

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
#### 2-х линейная диаграмма состояния бетона
*[[number, number]]* __get2LinearDiagramForConcrete__ (jsonObject)

Возвращает 2-х линейную диаграмму состояния бетона сразу для сжатой (-) и растянутой(+) зон в виде двумерного массива координат точек (Рис. 6.1), включая нулевую точку. Поля объекта jsonObject:

* *number* __type__ - тип бетона;
* *string* __class__ - класс бетона по прочности на сжатие (только тяжелый, напрягающий, мелкозернистый);
* *number* __Ybi = 1.0__ - коэффициент, понижающий **Rb**, > 0;
* *number* __Ybti = 1.0__ - коэффициент, понижающий **Rbt**, > 0;
* *number* __loadType__ - тип нагрузки: кратковременная или длительная (см. константы);
* *number* __humidity__ - группа относительной влажности (только для длительных нагрузок);
* *boolean* __isReductionFactorToBeApplied = false__ - следует ли умножать Rbt,n на коэффициент 0.8 (прим. 2 Таблица 6.8);

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

#### Формула 7.1
*number* __formula_07_1__ (jsonObject)

Возвращает значение **N** по формуле 7.1
* *number* __Rb__ - предел прочности бетона при сжатии, >= 0;
* *number* __Ab__ - площадь сжатой зоны бетона, определяемая из условия, что ее центр тяжести совпадает с точкой приложения продольной силы N (с учетом прогиба), >= 0;

---

#### Таблица 7.1
*number* __table_07_1__ (jsonObject)

Возвращает значение **Fi** по таблице 7.1 для длительных нагрузок, по формуле 7.3 - для кратковременных. Поля jsonObject:
* *number* __e0_h__ - отношение e0/h, >= 0, <=20;
* *number* __loadType__ - тип нагрузки: кратковременная или длительная (см. константы);

---
#### Формула 7.2
*number* __formula_07_2__ (jsonObject)

Возвращает значение **Ab** по формуле 7.2. Поля jsonObject:
* *number* __b__ - ширина прямоугольного сечения, >= 0;
* *number* __h__ - высота прямоугольного сечения, >= 0;
* *number* __e0__ - эксцентриситет приложения силы, >= 0;
* *number* __nu__ - коэффициент, учитывающий влияния прогиба, >= 0;

---
#### Формула 7.3
*number* __formula_07_3__ (jsonObject)

Возвращает значение **N** по формуле 7.3. Поля jsonObject:
* *number* __Fi__ - коэффициент, принимаемый по Таблице 7.1, >= 0;
* *number* __Rb__ - предел прочности бетона при сжатии, >= 0;
* *number* __Ab__ - площадь поперечного сечения, >= 0;

---
#### Формула 7.4
*number* __formula_07_4__ (jsonObject)

Возвращает значение **N** по формуле 7.4. Поля jsonObject:
* *number* __Rbt__ - предел прочности бетона при растяжении, >= 0;
* *number* __A__ - площадь поперечного сечения, >= 0;
* *number* __I__ - момент инерции сечения от-но его центра тяжести, >= 0;
* *number* __e0__ - эксцентриситет приложения силы, >= 0;
* *number* __nu__ - коэффициент, определяемый по п.7.1.11, >= 0;
* *number* __Yt__ - расстояние от наиболее растянутого волокна до центра тяжести сечения, >= 0;

---
#### Формула 7.5
*number* __formula_07_5__ (jsonObject)

Возвращает значение **N** по формуле 7.5. Поля jsonObject:
* *number* __Rbt__ - предел прочности бетона при растяжении, >= 0;
* *number* __b__ - ширина поперечного сечения, >= 0;
* *number* __h__ - высота поперечного сечения, >= 0;
* *number* __e0__ - эксцентриситет приложения силы, >= 0;
* *number* __nu__ - коэффициент, определяемый по п.7.1.11, >= 0;

---
#### Формула 7.6
*number* __formula_07_6__ (jsonObject)

Возвращает значение **nu** по формуле 7.6. Поля jsonObject:
* *number* __N__ - продольная сила, >= 0;
* *number* __Ncr__ - условная критическая сила, определяемая по формуле 7.7, >= 0;

---
#### Формула 7.7
*number* __formula_07_7__ (jsonObject)

Возвращает значение **Ncr** по формуле 7.7. Поля jsonObject:
* *number* __D__ - жесткость ж.б. эл-та без учета арматуры, определяемая по 8.1.15, >= 0;
* *number* __L0__ - расчетная длина элемента, >= 0;

---
#### Формула 7.9
*number* __formula_07_9__ (jsonObject)

Возвращает значение **M** по формуле 7.9. Поля jsonObject:
* *number* __Rbt__ - предел прочности бетона при растяжении, >= 0;
* *number* __W__ - момент сопротивления сечения эл-та для крайнего растянутого волокна, >= 0;

---
#### Формула 8.1
*[number]* __formula_08_1__ (jsonObject)

Возвращает массив расчетных сопротивлений бетона **Xi_R** по формуле 8.1. Поля jsonObject:
* *number* __type__ - тип бетона (см. константы);
* *string* __class__ - класс бетона по прочности на сжатие;
* *number* __e_sel__ - относительная деформация растянутой арматуры при напряжениях, равных **Rs**, >= 0;
* *number* __e_b2__ - относительная деформация сжатого бетона при напряжениях, равных **Rb**, принимаемая по указаниям п.6.1.20 при непродолжительном действии нагрузки, >= 0;

---
#### Формула 8.2
*number* __formula_08_2__ (jsonObject)

Возвращает значение **e_sel** по формуле 8.2. Поля jsonObject:
* *number* __Rs__ - предел прочности арматуры на растяжение, >= 0;
* *number* __Es__ - модуль упругости арматуры, >= 0;

---
#### Формула 8.4
*number* __formula_08_4__ (jsonObject)

Возвращает значение **Mult** по формуле 8.4. Поля jsonObject:
* *number* __Rb__ - предел прочности бетона на сжатие, >= 0;
* *number* __Rsc__ - предел прочности арматуры на сжатие, >= 0;
* *number* __A1s__ - площадь сжатой арматуры, >= 0;
* *number* __b__ - ширина прямоугольного сечения, >= 0;
* *number* __h0__ - рабочая высота сечения, >= 0;
* *number* __x__ - высота сжатой зоны бетона, >= 0;
* *number* __a1__ - расстояние от равнодействующей в арматуре S' до ближайшей грани сечения, >= 0;

---
#### Формула 8.5
*number* __formula_08_5__ (jsonObject)

Возвращает значение **x** по формуле 8.5. Поля jsonObject:
* *number* __Rb__ - предел прочности бетона на сжатие, >= 0;
* *number* __Rs__ - предел прочности арматуры на растяжение, >= 0;
* *number* __Rsc__ - предел прочности арматуры на сжатие, >= 0;
* *number* __As__ - площадь растянутой арматуры, >= 0;
* *number* __A1s__ - площадь сжатой арматуры, >= 0;
* *number* __b__ - ширина прямоугольного сечения, >= 0;

---
#### Формула 8.6
*number* __formula_08_6__ (jsonObject)

Возвращает значение выражения **Rsc\*As'+Rb\*bf'\*hf'-Rs\*As** по формуле 8.6, которое должно быть >= 0. Поля jsonObject:
* *number* __Rb__ - предел прочности бетона на сжатие, >= 0;
* *number* __Rs__ - предел прочности арматуры на растяжение, >= 0;
* *number* __Rsc__ - предел прочности арматуры на сжатие, >= 0;
* *number* __As__ - площадь растянутой арматуры, >= 0;
* *number* __A1s__ - площадь сжатой арматуры, >= 0;
* *number* __b1f__ - ширина полки таврового сечения, >= 0;
* *number* __h1f__ - высота полки таврового сечения, >= 0;

---
#### Формула 8.7
*number* __formula_08_7__ (jsonObject)

Возвращает значение **Mult** по формуле 8.7. Поля jsonObject:
* *number* __Rb__ - предел прочности бетона на сжатие, >= 0;
* *number* __Rsc__ - предел прочности арматуры на сжатие, >= 0;
* *number* __A1s__ - площадь сжатой арматуры, >= 0;
* *number* __b__ - ширина ребра таврового сечения, >= 0;
* *number* __h0__ - рабочая высота сечения, >= 0;
* *number* __x__ - высота сжатой зоны бетона, >= 0;
* *number* __a1__ - расстояние от равнодействующей в арматуре S' до ближайшей грани сечения, >= 0;
* *number* __b1f__ - ширина полки таврового сечения, >= 0;
* *number* __h1f__ - высота полки таврового сечения, >= 0;

---
#### Формула 8.8
*number* __formula_08_8__ (jsonObject)

Возвращает значение **x** по формуле 8.8. Поля jsonObject:
* *number* __Rb__ - предел прочности бетона на сжатие, >= 0;
* *number* __Rs__ - предел прочности арматуры на растяжение, >= 0;
* *number* __Rsc__ - предел прочности арматуры на сжатие, >= 0;
* *number* __As__ - площадь растянутой арматуры, >= 0;
* *number* __A1s__ - площадь сжатой арматуры, >= 0;
* *number* __b__ - ширина ребра таврового сечения, >= 0;
* *number* __b1f__ - ширина полки таврового сечения, >= 0;
* *number* __h1f__ - высота полки таврового сечения, >= 0;

---
#### Формула 8.10
*number* __formula_08_10__ (jsonObject)

Возвращает значение выражения **Rb\*b\*x\*(h0-0.5\*x)+Rsc\*A1s\*(h0-a1)-N\*e** по формуле 8.10, которое должно быть >= 0. Поля jsonObject:
* *number* __N__ - продольная сила от внешней нагрузки, >= 0;
* *number* __e__ - расстояние по формуле 8.11, >= 0;
* *number* __Rb__ - предел прочности бетона на сжатие, >= 0;
* *number* __Rsc__ - предел прочности арматуры на сжатие, >= 0;
* *number* __A1s__ - площадь сжатой арматуры, >= 0;
* *number* __b__ - ширина прямоугольного сечения, >= 0;
* *number* __h0__ - рабочая высота сечения, >= 0;
* *number* __x__ - высота сжатой зоны бетона, >= 0;
* *number* __a1__ - расстояние от равнодействующей в арматуре S' до ближайшей грани сечения, >= 0;

---
#### Формула 8.11
*number* __formula_08_11__ (jsonObject)

Возвращает значение **e** по формуле 8.11. Поля jsonObject:
* *number* __e0__ - эксцентриситет приложения силы по п.8.1.7, >= 0;
* *number* __nu__ - коэффициент влияния прогиба на несущую способность, определяемый по п.8.1.15, >= 0;
* *number* __h0__ - рабочая высота сечения, >= 0;
* *number* __a1__ - расстояние от равнодействующей в арматуре S' до ближайшей грани сечения, >= 0;

---
#### Формула 8.12
*number* __formula_08_12__ (jsonObject)

Возвращает значение **x** по формуле 8.12. Поля jsonObject:
* *number* __N__ - продольная сжимающая сила, >= 0;
* *number* __Rb__ - предел прочности бетона на сжатие, >= 0;
* *number* __Rs__ - предел прочности арматуры на растяжение, >= 0;
* *number* __Rsc__ - предел прочности арматуры на сжатие, >= 0;
* *number* __As__ - площадь растянутой арматуры, >= 0;
* *number* __A1s__ - площадь сжатой арматуры, >= 0;
* *number* __b__ - ширина прямоугольного сечения, >= 0;

---
#### Формула 8.13
*number* __formula_08_13__ (jsonObject)

Возвращает значение **x** по формуле 8.13. Поля jsonObject:
* *number* __N__ - продольная сжимающая сила, >= 0;
* *number* __Rb__ - предел прочности бетона на сжатие, >= 0;
* *number* __Rs__ - предел прочности арматуры на растяжение, >= 0;
* *number* __Rsc__ - предел прочности арматуры на сжатие, >= 0;
* *number* __As__ - площадь растянутой арматуры, >= 0;
* *number* __A1s__ - площадь сжатой арматуры, >= 0;
* *number* __b__ - ширина прямоугольного сечения, >= 0;
* *number* __h0__ - рабочая высота сечения, >= 0;
* *number* __Xi_R__ - граничная относительная высота сжатой зоны, >= 0;

---
#### Формула 8.14
__formula_08_14__  =  __formula_07_6__

---
#### Формула 8.15
__formula_08_15__  =  __formula_07_7__

---
#### Пункт 8.1.15
*number* __clause_08_1_15_D__ (jsonObject)

Возвращает значение **D**.
* *number* __Kb__ - коэффициент, >= 0;
* *number* __Eb__ - модуль упругости бетона, >= 0;
* *number* __Es__ - модуль упругости арматуры, >= 0;
* *number* __I__ - момент инерции площади сечения бетона от-но оси, проходящей через центр тяж-ти, >= 0;
* *number* __Is__ - момент инерции площади сечения всей арматуры от-но оси, проходящей через центр тяж-ти, >= 0;

*number* __clause_08_1_15_Kb__ (jsonObject)

Возвращает значение **Kb**.
* *number* __Fi_L__ - коэффициент, учитывающий длительность нагрузки, >= 0;
* *number* __delta_e__ - относительное значение эксцентриситета продольной силы, >= 0;