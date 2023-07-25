# $random

<ContainerBox title="介绍">
<template #desc>
随机生成指定范围的数据，生成的数字会包含两个参数
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
$random(0, 1, 2); //0.57
```

<ShowCode>
<template #codes>

```js
export function $random(min, max, retain = 0) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(retain));
}
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
<template #desc>

| 参数   | 说明         | 类型   | 默认值 |
| ------ | ------------ | ------ | ------ |
| min    | 最小值       | Number | 0      |
| max    | 最大值       | Number | 1      |
| retain | 保留几位小数 | Number | 0      |

</template>
</ContainerBox>
