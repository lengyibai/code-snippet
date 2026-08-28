---
outline: false
prev:
  text: Misc 杂项
  link: /docs/Tool/Misc
next:
  text: Time 时间
  link: /docs/Tool/Time
---

# Random-随机

## LibJsProbabilityResult-概率触发

按百分比返回是否触发成功。

```ts
import { libJsProbabilityResult } from "lyb-js/Random/LibJsProbabilityResult";

console.log(libJsProbabilityResult(30)); // 30% 概率返回 true
```

## LibJsRandom-随机数

获取指定范围内的随机数，可设置保留小数位。

```ts
import { libJsRandom } from "lyb-js/Random/LibJsRandom";

console.log(libJsRandom(1, 10)); // 1 ~ 10
console.log(libJsRandom(1, 10, 2)); // 例如 6.38
```

## LibJsRandomColor-随机色

生成随机 RGBA 颜色字符串。

```ts
import { libJsRandomColor } from "lyb-js/Random/LibJsRandomColor";

console.log(libJsRandomColor()); // "rgba(...)"
console.log(libJsRandomColor(0.5)); // 半透明
```

## LibJsUniqueRandomNumbers-随机数数组

在指定区间中生成不重复的随机数数组。

```ts
import { libJsUniqueRandomNumbers } from "lyb-js/Random/LibJsUniqueRandomNumbers";

console.log(libJsUniqueRandomNumbers(1, 10, 4));
// 例如 [3, 7, 1, 9]
```
