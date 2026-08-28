---
outline: false
prev:
  text: Base 基础
  link: /docs/Tool/Base
next:
  text: Data 数据
  link: /docs/Tool/Data
---

# Browser-浏览器

## LibJsColorConsole-有色打印

给 `console.log` 增加标题色块和结构化信息，适合调试接口和业务流程。

```ts
import { libJsColorConsole } from "lyb-js/Browser/LibJsColorConsole";

libJsColorConsole("请求成功", "green", [
  { label: "接口", value: "/api/user" },
  { label: "状态码", value: 200 },
]);

libJsColorConsole("调试信息", "blue", { page: "home", loaded: true });
```

## LibJsCopy-复制文本到剪贴板

复制字符串到剪贴板，内部兼容 `navigator.clipboard` 和降级方案。

```ts
import { libJsCopy } from "lyb-js/Browser/LibJsCopy";

button.addEventListener("click", () => {
  libJsCopy("Hello World!");
});
```

## LibJsGetRowValue-按点路径获取对象值

按点路径读取对象中的嵌套值，路径不存在时返回 `undefined`。

```ts
import { libJsGetRowValue } from "lyb-js/Browser/LibJsGetRowValue";

const row = {
  user: {
    profile: {
      name: "Tom",
    },
  },
};

console.log(libJsGetRowValue(row, "user.profile.name")); // "Tom"
console.log(libJsGetRowValue(row, "user.profile.age")); // undefined
```

## LibJsIsMobile-判断手机

通过 `userAgent` 判断当前设备是否为手机端。

```ts
import { libJsIsMobile } from "lyb-js/Browser/LibJsIsMobile";

if (libJsIsMobile()) {
  console.log("当前是手机设备");
}
```

## LibJsIsPad-判断平板

结合 `userAgent`、屏幕尺寸、宽高比判断是否为平板设备。

```ts
import { libJsIsPad } from "lyb-js/Browser/LibJsIsPad";

console.log(libJsIsPad()); // true 或 false
```

## LibJsObjToUrlParams-对象转Url参数

把普通对象拼接成查询字符串。

```ts
import { libJsObjToUrlParams } from "lyb-js/Browser/LibJsObjToUrlParams";

const query = libJsObjToUrlParams({
  name: "John",
  age: 30,
  active: true,
});

console.log(query); // "name=John&age=30&active=true"
```

## LibJsParseQueryString-URL参数转对象

把查询字符串转回对象。注意导入路径文件名是小写 `libJsParseQueryString`。

```ts
import { libJsParseQueryString } from "lyb-js/Browser/libJsParseQueryString";

console.log(libJsParseQueryString("name=lengyibai&age=18"));
// { name: "lengyibai", age: "18" }
```

## LibJsPathParams-地址栏参数

读取当前地址栏参数，也可以传入一段完整 URL 进行解析。

```ts
import { libJsPathParams } from "lyb-js/Browser/LibJsPathParams";

console.log(libJsPathParams("https://example.com?a=1&b=hello"));
// { a: "1", b: "hello" }
```

## LibJsSetTitleIcon-网站标题图标

动态设置网页标题和 favicon。

```ts
import { libJsSetTitleIcon } from "lyb-js/Browser/LibJsSetTitleIcon";

libJsSetTitleIcon("我的网站", "/favicon.ico");
```

## LibJsTagTitleTip-网站标题交互

页面隐藏和返回时切换标题，适合网页消息提醒。

```ts
import { libJsTagTitleTip } from "lyb-js/Browser/LibJsTagTitleTip";

libJsTagTitleTip("欢迎回来", "你有新的消息");
```
