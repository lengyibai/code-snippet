---
outline: false
prev:
  text: lyb-js
  link: /docs/Tool/index
next:
  text: Browser 浏览器
  link: /docs/Tool/Browser
---

# Base-基础

## LibJsGetDataType-数据类型

返回标准化后的数据类型字符串。

```ts
import { libJsGetDataType } from "lyb-js/Base/LibJsGetDataType";

console.log(libJsGetDataType(123)); // "number"
console.log(libJsGetDataType("hello")); // "string"
console.log(libJsGetDataType([1, 2, 3])); // "array"
console.log(libJsGetDataType(() => {})); // "function"
```

## LibJsIsNull-是否为空值

判断值是否为 `null`、`undefined` 或空字符串 `""`。

```ts
import { libJsIsNull } from "lyb-js/Base/LibJsIsNull";

console.log(libJsIsNull(null)); // true
console.log(libJsIsNull(undefined)); // true
console.log(libJsIsNull("")); // true
console.log(libJsIsNull(0)); // false
```

## LibJsPromiseTimeout-延时执行

延时执行回调；页面切到后台时会暂停计时，回到当前页后继续。

```ts
import { libJsPromiseTimeout } from "lyb-js/Base/LibJsPromiseTimeout";

await libJsPromiseTimeout(1000, () => {
  console.log("1 秒后执行");
});

console.log("延时结束");
```

## LibJsResizeWatcher-窗口监听

监听窗口尺寸变化，适合做画布缩放、布局适配或横竖屏比例计算。

```ts
import { LibJsResizeWatcher } from "lyb-js/Base/LibJsResizeWatcher";

const watcher = new LibJsResizeWatcher();

const off = watcher.on((w, h, scale) => {
  console.log("窗口宽高", w, h);
  console.log("缩放比例", scale);
});

off();
```

```ts
const fixedHorizontal = new LibJsResizeWatcher("h");
fixedHorizontal.on((w, h, scale) => {
  console.log(w, h, scale); // 1920 1080 ...
});
```
