# _objToExc

<ContainerBox title="介绍">
<template #desc>
用于导出表格

需要安装依赖：`npm i xlsx@0.17.4`，且只能安装`0.17.4`版本

还需在源码上方引入`import XLSX from "xlsx"`
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
const data = [
  { a: 0, name: '张三', age: 20, b: 0 },
  { a: 1, name: '李四', age: 21, b: 1 },
  { a: 2, name: '王五', age: 22, b: 2 },
]

_objToExc({ data: data.value, format: { name: '姓名', age: '年龄' } });
```
<CodeBox>
<template #codes>

```ts
import XLSX from 'xlsx';

/**
 * @description 将对象数据转换为Excel文件并导出。
 * @param obj 包含name、data和format的对象。
 */
export function _objToExc(obj: { name?: string, data?: any[], format?: Record<string, string> } = {}) {
  let { name = '未命名表格', data = [], format = {} } = obj;

  function _fmtObj(data: any[], format: Record<string, string>) {
    return data.map((i) =>
      Object.assign(
        ...Object.keys(format).map((j) => ({
          [format[j]]: i[j],
        }))
      )
    );
  }

  const ws = XLSX.utils.json_to_sheet(JSON.stringify(format) === '{}' ? data : _fmtObj(data, format));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, name);
  XLSX.writeFile(wb, `${name}.xlsx`);
}
```
</template>
</CodeBox>
</ContainerBox>