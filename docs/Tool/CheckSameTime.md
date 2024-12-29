# _checkSameTime

<ContainerBox title="介绍">
<template #desc>

传入时间戳与当前时间判断是否为同一天或同一周，需要 `npm install dayjs`
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<CodeBox>
<template #codes>

```ts
import dayjs from "dayjs";

/**
 * @description 传入时间戳与当前时间判断是否为同一天或同一周
 * @param timestamp 毫秒时间戳
 * @param unit 判断单位 'day' 或 'week'
 * @returns 0-同一单位时间 1-新单位时间 -1时间戳大于当前时间
 */
export const _checkSameTime = (timestamp: number, unit: "day" | "week") => {
  const inputTime = dayjs(timestamp).startOf(unit);
  const currentTime = dayjs().startOf(unit);

  if (inputTime.isSame(currentTime)) {
    return 0; // 同一单位时间
  } else if (inputTime.isBefore(currentTime)) {
    return 1; // 新单位时间
  } else {
    return -1; // 时间戳大于当前时间
  }
};
```
</template>
</CodeBox>
</ContainerBox>
