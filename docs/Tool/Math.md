---
outline: false
prev:
  text: Formatter 格式化
  link: /docs/Tool/Formatter
next:
  text: Misc 杂项
  link: /docs/Tool/Misc
---

# Math-数学

## LibJsCalculateExpression-表达式字符串

计算只包含加减乘除和括号的表达式字符串。

```ts
import { libJsCalculateExpression } from "lyb-js/Math/LibJsCalculateExpression";

console.log(libJsCalculateExpression("(1+2)-(3*4)/5"));
// 0.6

console.log(libJsCalculateExpression("10/3", 2));
// 3.33
```

## LibJsConvertAngle-角弧度互转

在角度和弧度之间转换。

```ts
import { libJsConvertAngle } from "lyb-js/Math/LibJsConvertAngle";

console.log(libJsConvertAngle(180, "rad")); // 3.141592653589793
console.log(libJsConvertAngle(Math.PI, "deg")); // 180
```

## LibJsCoordsAngle-两点角度

计算两点连线角度，默认返回角度制。

```ts
import { libJsCoordsAngle } from "lyb-js/Math/LibJsCoordsAngle";

console.log(libJsCoordsAngle({ x: 0, y: 0 }, { x: 1, y: 0 }));
console.log(libJsCoordsAngle({ x: 0, y: 0 }, { x: 1, y: 1 }, "rad"));
```

## LibJsCoordsDistance-两点距离

计算两点之间的直线距离。

```ts
import { libJsCoordsDistance } from "lyb-js/Math/LibJsCoordsDistance";

console.log(libJsCoordsDistance({ x: 0, y: 0 }, { x: 3, y: 4 }));
// 5
```

## LibJsDecimal-高精度计算

使用 `decimal.js` 处理高精度加减乘除。

```ts
import { libJsDecimal } from "lyb-js/Math/LibJsDecimal";

console.log(libJsDecimal(0.1, 0.2, "+", 2)); // 0.3
console.log(libJsDecimal(1.5, 0.3, "*", 2)); // 0.45
```

## LibJsLerp-线性插值

文件名是 `LibJsLerp`，导出的方法名也是 `LibJsLerp`。

```ts
import { LibJsLerp } from "lyb-js/Math/LibJsLerp";

console.log(LibJsLerp(0, 100, 0.25)); // 25
console.log(LibJsLerp(10, 20, 0.5)); // 15
```

## LibJsNormalizeInRange-范围归一化

把一个值映射到 `0 ~ 1` 区间。

```ts
import { LibJsNormalizeInRange } from "lyb-js/Math/LibJsNormalizeInRange";

console.log(LibJsNormalizeInRange(0, 100, 50)); // 0.5
console.log(LibJsNormalizeInRange(0, 100, 120)); // 1
```

## LibJsPiecewiseLerp-分段线性插值

根据多个节点做分段线性插值；当值落在全部区间外时返回兜底值。

```ts
import {
  LibJsPiecewiseLerp,
  type LibJsPiecewiseLerpPoint,
} from "lyb-js/Math/LibJsPiecewiseLerp";

const points: LibJsPiecewiseLerpPoint[] = [
  { h: 0, v: 0 },
  { h: 6, v: 30 },
  { h: 12, v: 100 },
];

console.log(LibJsPiecewiseLerp(points, 3, 0)); // 15
console.log(LibJsPiecewiseLerp(points, 9, 0)); // 65
```

```ts
const brightnessPoints = [
  { h: 8, v: 0.2 },
  { h: 12, v: 0.8 },
  { h: 18, v: 0.4 },
];

console.log(LibJsPiecewiseLerp(brightnessPoints, 10, 0)); // 0.5
console.log(LibJsPiecewiseLerp(brightnessPoints, 20, -1)); // -1
```
