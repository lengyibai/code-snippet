# $excToObj

<ContainerBox title="介绍">
<template #desc>
相当于解析文件，很少遇到这种需求，但将`Excel`解析和过滤再导出也挺不错

需要安装依赖：`npm i xlsx@0.17.4`，且只能安装`0.17.4`版本

还需在源码上方引入`import XLSX from "xlsx"`
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```html
<template>
  <input type="file" accept=".xls, .xlsx" @change="$excToObj" />
</template>
<script>
  import { $excToObj } from "./lib.js";
  export default {
    methods: {
      $excToObj(e) {
        console.log($excToObj(e)); //打印的是解析Excel后的数据
      },
    },
  };
</script>
```
<ShowCode>
<template #codes>

```js
export function $excToObj(e) {
  return new Promise((resolve) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    let resultArray = [];
    reader.onload = (event) => {
      let data = event.target.result;
      const workbook = XLSX.read(data, {
        type: 'binary',
      });
      workbook.SheetNames.forEach(function (sheetName) {
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
          header: 1,
        });
        let mainData = data.slice(1);
        if (mainData.length > 0) {
          for (let row = 0; row < mainData.length; row++) {
            let rowData = {};
            for (let col = 0; col < data[0].length; col++) {
              rowData[data[0][col]] = mainData[row][col] || '';
            }
            resultArray.push(rowData);
          }
          resolve(resultArray);
        } else {
          alert('至少需要一行有效数据');
        }
      });
    };
    reader.readAsBinaryString(file);
  });
}
```

</template>
</ShowCode>
</ContainerBox>
