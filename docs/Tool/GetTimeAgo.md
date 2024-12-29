# _getTimeAgo

<ContainerBox title="介绍" noGap>
<template #desc>

计算当前传递的时间戳距离当前时间的时长，如：距离当前时间3分钟前、1小时前、昨天、前天等。
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<CodeBox>
<template #codes>

```ts
/** @description 时间差计算
 * @param timestamp 时间戳
 * @returns 距离当前时间的时间差
 */
export const _getTimeAgo = (timestamp: number) => {
  const timeUnits = [
    { unit: "年", milliseconds: 365 * 24 * 60 * 60 * 1000 },
    { unit: "月", milliseconds: 30 * 24 * 60 * 60 * 1000 },
    { unit: "周", milliseconds: 7 * 24 * 60 * 60 * 1000 },
    { unit: "天", milliseconds: 24 * 60 * 60 * 1000 },
    { unit: "小时", milliseconds: 60 * 60 * 1000 },
    { unit: "分钟", milliseconds: 60 * 1000 },
  ];

  const currentTime = Date.now();
  const timeDifference = currentTime - timestamp;

  for (const { unit, milliseconds } of timeUnits) {
    if (timeDifference >= milliseconds) {
      const count = Math.floor(timeDifference / milliseconds);
      return `${count} ${unit}前`;
    }
  }

  return "刚刚";
};
```

</template>
</CodeBox>
</ContainerBox>