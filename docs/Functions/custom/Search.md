# _search

<ContainerBox title="介绍">
<template #desc>
支持各种关键属性搜索、支持拼音搜索、支持拼音简写搜索、不区分大小写、支持模糊查询

如果输入框清空查询，则返回所有数据
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<template #desc>

依赖于`pinyin-pro`插件
</template>

```ts
const obj = [
  { id: 1, name: "张三", age: 20 },
  { id: 2, name: "李四", age: 24 },
  { id: 3, name: "王五", age: 24 },
  { id: 4, name: "赵六", age: 23 },
];

console.log(_search(obj, 24, ["name", "age"]));
/* [ { id: 2, name: '李四', age: '24' },
  { id: 3, name: '王五', age: '24' } ] */

console.log(_search(obj, ["zs"], ["name", "age"]));
/* [ { id: 1, name: '张三', age: '20' } ] */

console.log(_search(obj, "LiS", ["name", "age"]));
/* [ { id: 2, name: '李四', age: '24' } ] */

console.log(_search(obj, ["张三", "ww", 23], ["name", "age"]));
/* [ { id: 1, name: '张三', age: '20' },
  { id: 3, name: '王五', age: '24' },
  { id: 4, name: '赵六', age: '23' } ] */
```

<CodeBox>
<template #codes>

```ts
import { match as _pinyinMatch } from "pinyin-pro";

/**
 * @description 正则搜索
 * @param data 需要搜索的数据
 * @param value 搜索的值
 * @param keys 搜索的键名
 * @param highlight 是否高亮
 */
export const _search = <T>(
  data: T[],
  value: string | string[],
  keys: string | string[],
  highlight = false,
): T[] => {
  const arr: T[] = [];

  // 根据给定的值和键名进行搜索
  const fn = (searchValue: string, key: string): void => {
    const reg = new RegExp(searchValue.toLowerCase(), "i"); // 创建正则表达式
    data.forEach((item: any) => {
      item[key] = item[key].toString(); // 确保属性为字符串

      if (_pinyinMatch(item[key], searchValue, { precision: "start" })) {
        // 匹配拼音或属性值
        if (highlight && searchValue) {
          item[key] = item[key].replace(
            reg,
            (match: string) => `<i style="color:#2980b9">${match}</i>`,
          ); // 高亮匹配部分
        }
        arr.push(item);
      }
    });
  };

  if (Array.isArray(keys)) {
    keys.forEach((key: string) => fn(value as string, key)); // 遍历键名进行搜索
  } else if (Array.isArray(value)) {
    value.forEach((val: string) => {
      if (Array.isArray(keys)) {
        keys.forEach((key: string) => fn(val, key)); // 遍历值和键名进行搜索
      } else {
        fn(val, keys); // 单个键名和多个值进行搜索
      }
    });
  } else {
    fn(value, keys); // 单个值和单个键名进行搜索
  }

  return arr;
};
```
</template>
</CodeBox>
</ContainerBox>

<ContainerBox title="针对 Element UI 的下拉多选进行查询">
<template #desc>
此时不需要依赖任何函数，但不支持拼音查询，况且也不可能拼音查询

如果下拉框清空查询，则需要使用`[""]`去查询，这样查询才能返回所有数据
</template>

```ts
$searchMul(data, value, key);
```

```ts
const obj = [
  { id: 1, name: "张三", age: 20 },
  { id: 2, name: "李四", age: 24 },
  { id: 3, name: "王五", age: 24 },
  { id: 4, name: "赵六", age: 24 },
];

console.log(_searchMul(obj, ["张三", "李四"], "name"));
// [ { name: '张三', age: 20 }, { name: '王五', age: 24 } ]
```

<CodeBox>
<template #codes>

```ts
export function _searchMul(data, value, key) {
  let arr = [];

  function fn(item) {
    let reg = new RegExp(item, "i");
    arr.push(
      ...data.filter((item) => {
        return reg.test(item[key]);
      })
    );
  }
  value.forEach((item) => {
    fn(item);
  });
  return arr;
}
```
</template>
</CodeBox>
</ContainerBox>
