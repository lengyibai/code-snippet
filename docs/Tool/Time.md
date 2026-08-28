---
outline: false
prev:
  text: Random 随机
  link: /docs/Tool/Random
next: false
---

# Time-时间

## LibJsCountdown-倒计时

根据结束时间返回倒计时对象，可指定保留的最小单位。

```ts
import { libJsCountdown } from "lyb-js/Time/LibJsCountdown";

const endTime = Date.now() + 5 * 60 * 1000;
console.log(libJsCountdown(endTime, "minute"));
// { years, months, days, hours, minutes, seconds, ended }
```

## LibJsSameTimeCheck-时间比对

比较传入时间和当前时间是否处于同一个时间单位。

```ts
import { libJsSameTimeCheck } from "lyb-js/Time/LibJsSameTimeCheck";

console.log(libJsSameTimeCheck(Date.now(), "day")); // 0
console.log(libJsSameTimeCheck(Date.now() - 86400000, "day")); // 1
```

返回值说明：

- `0`：同一时间单位
- `1`：比当前更早
- `-1`：比当前更晚

## LibJsTimeAgo-中文时间差

把时间戳转成“多久前 / 多久后”形式的中文文案。

```ts
import { libJsTimeAgo } from "lyb-js/Time/LibJsTimeAgo";

console.log(libJsTimeAgo(Date.now() - 60 * 60 * 1000));
console.log(libJsTimeAgo(Date.now() + 2 * 24 * 60 * 60 * 1000));
```

## LibJsTimeGreeting-时间问候

根据当前时间返回默认问候语，也可以传入自定义文案。

```ts
import { libJsTimeGreeting } from "lyb-js/Time/LibJsTimeGreeting";

console.log(libJsTimeGreeting());

console.log(
  libJsTimeGreeting({
    morning: "早安",
    afternoon: "下午好",
    evening: "晚上好",
  })
);
```
