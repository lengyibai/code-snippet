---
outline: false
prev:
  text: Browser 浏览器
  link: /docs/Tool/Browser
next:
  text: File 文件
  link: /docs/Tool/File
---

# Data-数据

## LibJsChunkArray-数组拆分

把数组按固定长度拆成多个小数组。

```ts
import { libJsChunkArray } from "lyb-js/Data/LibJsChunkArray";

console.log(libJsChunkArray([1, 2, 3, 4, 5, 6], 2));
// [[1, 2], [3, 4], [5, 6]]
```

## LibJsDeepJSONParse-深度解析JSON

递归解析对象或数组中嵌套的 JSON 字符串。

```ts
import { libJsDeepJSONParse } from "lyb-js/Data/LibJsDeepJSONParse";

const data = '{"user":"{\\"name\\":\\"Tom\\",\\"age\\":18}"}';
console.log(libJsDeepJSONParse(data));
// { user: { name: "Tom", age: 18 } }
```

## LibJsGroupArrayByKey-分类汇总

按对象中的某个字段分组。

```ts
import { libJsGroupArrayByKey } from "lyb-js/Data/LibJsGroupArrayByKey";

const list = [
  { type: "fruit", name: "apple" },
  { type: "fruit", name: "banana" },
  { type: "drink", name: "tea" },
];

console.log(libJsGroupArrayByKey(list, "type"));
// {
//   fruit: [{...}, {...}],
//   drink: [{...}]
// }
```

## LibJsMatchEmail-匹配E-Mail

根据当前输入自动补全邮箱后缀。

```ts
import { libJsMatchEmail } from "lyb-js/Data/LibJsMatchEmail";

const result = libJsMatchEmail("user@g", ["@gmail.com", "@github.com"]);
console.log(result); // ["user@gmail.com", "user@github.com"]
```

## LibJsPinyinSearch-拼音模糊搜索

按指定字段做拼音模糊搜索，适合中文姓名、城市名、标签名这类检索场景。

```ts
import { libJsPinyinSearch } from "lyb-js/Data/LibJsPinyinSearch";

const list = [
  { id: 1, name: "张三", city: "上海" },
  { id: 2, name: "李四", city: "北京" },
  { id: 3, name: "王五", city: "深圳" },
];

console.log(libJsPinyinSearch(list, "zhang", ["name"]));
// [{ id: 1, name: "张三", city: "上海" }]
```

```ts
const contacts = [
  { id: 1, name: "赵敏", department: "市场部" },
  { id: 2, name: "周杰伦", department: "内容中心" },
];

console.log(libJsPinyinSearch(contacts, "shi", ["department"]));
// [{ id: 1, name: "赵敏", department: "市场部" }]
```

## libJsPickUnique-随机选择未使用元素

从候选数组中随机选一个还没有被使用过的元素。

```ts
import { libJsPickUnique } from "lyb-js/Data/libJsPickUnique";

const pool = ["A", "B", "C", "D"];
const used = ["A", "B"];

console.log(libJsPickUnique(pool, used)); // "C" 或 "D"
console.log(libJsPickUnique(["A"], ["A"])); // undefined
```

## LibJsShuffleArray-数组乱序

返回一个打乱顺序的新数组，不会直接修改原数组。

```ts
import { libJsShuffleArray } from "lyb-js/Data/LibJsShuffleArray";

console.log(libJsShuffleArray([1, 2, 3, 4, 5]));
// [3, 5, 1, 4, 2] 结果每次不同
```

## LibJsStepArray-数组偏移

让数组整体循环移动；正数向右移，负数向左移。

```ts
import { libJsStepArray } from "lyb-js/Data/LibJsStepArray";

console.log(libJsStepArray([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]

console.log(libJsStepArray([1, 2, 3, 4, 5], -1));
// [2, 3, 4, 5, 1]
```

## LibReverseArrayFromIndex-数组定位翻转

保留某个索引之前的内容，把该索引后面的数组反转。

```ts
import { libReverseArrayFromIndex } from "lyb-js/Data/LibReverseArrayFromIndex";

console.log(libReverseArrayFromIndex([1, 2, 3, 4, 5], 1));
// [1, 2, 5, 4, 3]
```
