# _savefile

<ContainerBox title="介绍">
<template #desc>
将文本导出为json或txt文件
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
_savefile(JSON.stringify({ name: "冷弋白" }), "lyb.json");
```
<CodeBox>

<template #codes>

```ts
/**
 * @description 保存文件到本地。
 * @param data 要保存的数据。
 * @param name 文件名。
 */
export function _savefile(data: BlobPart, name: string) {
  const urlObject = window.URL || window.webkitURL;
  const exportBlob = new Blob([data]);
  const saveLink = document.createElement('a');
  saveLink.href = urlObject.createObjectURL(exportBlob);
  saveLink.download = name;
  saveLink.click();
  urlObject.revokeObjectURL(saveLink.href); // 释放URL对象
}
```
</template>
</CodeBox>
</ContainerBox>