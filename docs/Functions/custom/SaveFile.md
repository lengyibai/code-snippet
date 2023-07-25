# $savefile

<ContainerBox title="介绍">
<template #desc>
将文本导出为json或txt文件
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
$savefile(JSON.stringify({ name: "冷弋白" }), "lyb.json");
```

<ShowCode>

<template #codes>

```js
export function $savefile(data, name) {
  var urlObject = window.URL || window.webkitURL || window;
  var export_blob = new Blob([data]);
  var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
  save_link.href = urlObject.createObjectURL(export_blob);
  save_link.download = name;
  save_link.click();
}
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
<template #desc>

| 对象属性 | 说明               | 类型   | 是否必填 | 默认值 |
| -------- | ------------------ | ------ | -------- | ------ |
| data     | 无                 | Any    | 是       | -      |
| name     | 带文件后缀的文件名 | String | 是       | -      |

</template>
</ContainerBox>
