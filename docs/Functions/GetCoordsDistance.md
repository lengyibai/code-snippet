# _getCoordsDistance

<ContainerBox title="介绍">
<template #desc>
计算两点距离
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<CodeBox>
<template #codes>

```ts
/** @description 计算两点距离
 * @param coord1 起点坐标
 * @param coord2 终点坐标
 */
export const _getCoordsDistance = (
  coord1: { x: number; y: number },
  coord2: { x: number; y: number },
) => {
  // 计算两个坐标之间的水平和垂直距离
  const deltaX = coord2.x - coord1.x;
  const deltaY = coord2.y - coord1.y;

  // 使用勾股定理计算两点之间的距离
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  return distance;
};
```
</template>
</CodeBox>
</ContainerBox>