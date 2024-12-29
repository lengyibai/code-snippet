# _formatSecondsToChinese

<ContainerBox title="介绍">
<template #desc>
将秒数格式化成中文
</template>
</ContainerBox>

<ContainerBox title="基础用法">

<CodeBox>
<template #codes>

```ts
/** @description 将秒数格式化成中文
 * @param second 秒数
 */
export const _formatSecondsToChinese = (second: number) => {
  //计算小时、分钟和剩余秒数
  const hour = Math.floor(second / 3600);
  const minute = Math.floor((second % 3600) / 60);
  const remainingSecond = second % 60;
  const timeParts = [];

  if (hour > 0) {
    timeParts.push(`${hour}小时`);
  }

  if (minute > 0) {
    timeParts.push(`${minute}分`);
  }

  if (!hour && !minute) {
    return `${remainingSecond}秒`;
  }

  if (remainingSecond > 0) {
    timeParts.push(`${remainingSecond}秒`);
  }

  return timeParts.join("");
};
```
</template>
</CodeBox>
</ContainerBox>
