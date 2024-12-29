# _ProbabilityResult

<ContainerBox title="介绍">
<template #desc>
传递百分比概率，返回结果
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<CodeBox>
<template #codes>

```ts
/** @description 百分比概率结果
 * @param probability 触发概率，百分比，0-100
 */
export const _probability = (probability: number) => Math.random() * 100 < probability;
```
</template>
</CodeBox>
</ContainerBox>