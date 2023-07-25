# $objToExc

<ContainerBox title="介绍">
<template #desc>
用于导出表格

需要安装依赖：`npm i xlsx@0.17.4`，且只能安装`0.17.4`版本

还需在源码上方引入`import XLSX from "xlsx"`
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```html
<template>
  <button @click="$objToExc">点击导出</button>
</template>
<script>
  import { $objToExc } from "./lib.js";
  export default {
    data() {
      return {
        data = [
          { a: 0, name: '张三', age: 20, b: 0 },
          { a: 1, name: '李四', age: 21, b: 1 },
          { a: 2, name: '王五', age: 22, b: 2 },
        ],
      };
    },
    methods: {
      $objToExc() {
        //将对象的name和age替换为姓名和年龄，在表格内就会展示姓名和年龄的表头，且只会导出姓名和年龄两列，不填则导出所有列
        $objToExc({data:this.data, format:{ name: '姓名', age: '年龄' }});
      },
    },
  };
</script>
```

<ShowCode>
<template #codes>

```js
import XLSX from 'xlsx';
export function $objToExc(obj = {}) {
  let { name = '未命名表格', data = [], format = {} } = obj;
  function $fmtObj(data, format) {
    return data.map((i) =>
      Object.assign(
        ...Object.keys(format).map((j) => ({
          [format[j]]: i[j],
        }))
      )
    );
  }
  const ws = XLSX.utils.json_to_sheet(JSON.stringify(format) === '{}' ? data : $fmtObj(data, format));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'People');
  XLSX.writeFile(wb, name + '.xlsx');
}
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
<template #desc>

| 对象属性 | 说明                                                                                  | 类型   | 是否必填 | 默认值     |
| -------- | ------------------------------------------------------------------------------------- | ------ | -------- | ---------- |
| name     | 导出的文件名                                                                          | String | 否       | 未命名表格 |
| data     | 需要导出为 Excel 表格的数据                                                           | Array  | 是       | -          |
| format   | 主要功能是更改对象的属性，来作为 Excel 的表头，<br />不填则导出所有列，填一列导出一列 | Object | 否       | {}         |

</template>
</ContainerBox>
