# _degToRad

<ContainerBox title="介绍">
<template #desc>
角度转弧度
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
_degToRad(90);
```
<CodeBox>
<template #codes>

```ts
/** @description 随机颜色
 * @param deg 角度
 */
export const _degToRad = (deg: number) => (deg * Math.PI) / 180;
```
</template>
</CodeBox>
</ContainerBox>