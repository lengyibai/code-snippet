---
outline: false
prev:
  text: Math 数学
  link: /docs/Tool/Math
next:
  text: Random 随机
  link: /docs/Tool/Random
---

# Misc-杂项

## LibJsClassObservable-类属性监听器

给普通对象状态加上监听、按键更新、批量订阅等能力。

```ts
import { LibJsClassObservable } from "lyb-js/Misc/LibJsClassObservable";

const store = new LibJsClassObservable({
  count: 0,
  visible: false,
});

const off = store.onValue("count", (value) => {
  console.log("count changed:", value);
});

store.setValue("count", 1);
store.setNumberValue("count", "add", 2);
store.setBooleanValue("visible");
off();
```

## LibJsEmitter-事件发射器

创建一个带类型约束的轻量事件中心。

```ts
import { LibJsEmitter } from "lyb-js/Misc/LibJsEmitter";

type Events = {
  loaded: { page: string };
  resize: [number, number];
};

const emitter = LibJsEmitter<Events>();

emitter.on("loaded", (payload) => {
  console.log(payload.page);
});

emitter.on("resize", (w, h) => {
  console.log(w, h);
});

emitter.emit("loaded", { page: "home" });
emitter.emit("resize", 1920, 1080);
emitter.clear();
```

## LibJsEmitterClose-一次性关闭监听

注册一个事件名对应的回调，触发后会执行并自动清空这一组监听。

```ts
import { LibJsEmitterClose } from "lyb-js/Misc/LibJsEmitterClose";

LibJsEmitterClose.on("dialog-close", () => {
  console.log("弹窗关闭后执行一次");
});

LibJsEmitterClose.emit("dialog-close");
LibJsEmitterClose.emit("dialog-close"); // 第二次不会再次触发上面的回调
```

## LibJsHorizontal-游戏横版状态

根据当前窗口或指定模式返回横竖屏状态和参考宽高。

```ts
import { libJsHorizontal } from "lyb-js/Misc/LibJsHorizontal";

console.log(libJsHorizontal("auto"));
console.log(libJsHorizontal("h")); // 强制横版参考尺寸
console.log(libJsHorizontal("v")); // 强制竖版参考尺寸
```

## LibJsNumberStepper-数字步进器

用于长按按钮连续加减数字。

```ts
import { LibJsNumberStepper } from "lyb-js/Misc/LibJsNumberStepper";

let count = 0;
const stepper = new LibJsNumberStepper((type) => {
  count = type === "add" ? count + 1 : count - 1;
  console.log(count);
});

addButton.addEventListener("pointerdown", () => stepper.down("add"));
subButton.addEventListener("pointerdown", () => stepper.down("sub"));
```

## LibJsDiffObject-筛出已修改的值

深度对比对象差异，只返回新对象中发生变更的字段。

```ts
import { libDiffObject } from "lyb-js/Misc/LibJsDiffObject";

const oldObj = {
  name: "Tom",
  profile: { city: "Shanghai", age: 18 },
  tags: [{ id: 1 }, { id: 2 }],
};

const newObj = {
  name: "Jerry",
  profile: { city: "Shanghai", age: 20 },
  tags: [{ id: 1 }, { id: 3 }],
};

console.log(libDiffObject(oldObj, newObj));
// { name: "Jerry", profile: { age: 20 }, tags: [{ id: 1 }, { id: 3 }] }
```

## LibJsPruneEmpty-对象属性去空值

递归移除对象中的空字符串、`null`、`undefined` 和空对象；空数组也会被去掉。`Date` 会保留原值，不会被递归处理。

```ts
import { libJsPruneEmpty } from "lyb-js/Misc/LibJsPruneEmpty";

const result = libJsPruneEmpty({
  name: "Tom",
  createdAt: new Date("2026-05-07T00:00:00.000Z"),
  empty: "",
  profile: {
    age: undefined,
    city: "Shanghai",
  },
  tags: [],
});

console.log(result);
// { name: "Tom", createdAt: 2026-05-07T00:00:00.000Z, profile: { city: "Shanghai" } }
```

## LibJsPullUpLoad-上拉加载

给滚动容器添加“滚到底部自动触发加载”的能力，并可观察当前加载状态。

```ts
import { LibJsPullUpLoad } from "lyb-js/Misc/LibJsPullUpLoad";

const pull = new LibJsPullUpLoad({
  scrollEl: document.querySelector(".list") as HTMLElement,
  loadStatusEl: document.querySelector(".load-status") as HTMLElement,
  onLoad() {
    console.log("触发加载更多");
  },
});

pull.onValue("statusText", (text) => {
  console.log("状态文案:", text);
});

pull.setValue("loadStatus", "idle");
```

## LibJsRegFormValidate-表单验证

通过正则或自定义函数批量校验表单字段。

```ts
import { libJsRegFormValidate } from "lyb-js/Misc/LibJsRegFormValidate";

const result = libJsRegFormValidate(
  { phone: "13800138000", code: "12" },
  [
    {
      key: "phone",
      name: "手机号",
      verify: /^1\\d{10}$/,
      msg: "手机号格式错误",
    },
    {
      key: "code",
      name: "验证码",
      verify: (value) => String(value).length === 6,
      msg: "验证码长度错误",
    },
  ]
);

console.log(result);
```

## LibJsRetryRequest-请求重连

请求失败后自动按次数重试。

```ts
import { libJsRetryRequest } from "lyb-js/Misc/LibJsRetryRequest";

const data = await libJsRetryRequest({
  promiseFn: (id?: number) => fetch(`/api/user/${id}`).then((res) => res.json()),
  params: 1,
  maxRetries: 3,
  retryDelay: 1000,
});

console.log(data);
```
