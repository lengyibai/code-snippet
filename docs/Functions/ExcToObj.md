# _excToObj

<ContainerBox title="介绍">
<template #desc>
相当于解析文件，很少遇到这种需求，但将`Excel`解析和过滤再导出也挺不错

需要安装依赖：`npm i xlsx@0.17.4`，且只能安装`0.17.4`版本

还需在源码上方引入`import XLSX from "xlsx"`
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```vue
<template>
  <input type="file" accept=".xls, .xlsx" @change="handleExcToObj" />
</template>

<script>
const handleExcToObj = (e:Event) => {
  console.log(_excToObj(e));
}
</script>
```
<CodeBox>
<template #codes>

```ts
import XLSX from 'xlsx';

/**
 * @description 将Excel文件转换为对象数组。
 * @param e 文件输入事件。
 * @returns Promise 对象，解析后的数据。
 */
export function _excToObj(e: Event) {
  return new Promise((resolve, reject) => {
    const file = (e.target as HTMLInputElement).files[0];
    if (!file) {
      return reject('未选择文件');
    }
    const reader = new FileReader();
    let resultArray = [];
    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      workbook.SheetNames.forEach((sheetName) => {
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
        const mainData = data.slice(1);
        if (mainData.length > 0) {
          for (const row of mainData) {
            const rowData = {};
            for (let col = 0; col < data[0].length; col++) {
              rowData[data[0][col]] = row[col] || '';
            }
            resultArray.push(rowData);
          }
          resolve(resultArray);
        } else {
          alert('至少需要一行有效数据');
          reject('至少需要一行有效数据');
        }
      });
    };
    reader.readAsBinaryString(file);
  });
}
```
</template>
</CodeBox>
</ContainerBox>
