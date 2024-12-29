# _getCoordsAngle

<ContainerBox title="介绍">
<template #desc>
计算两点角度
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<CodeBox>
<template #codes>

```ts
/** @description 计算两点角度
 * @param coord1 起点坐标
 * @param coord2 终点坐标
 */
export const _getCoordsAngle = (
  coord1: { x: number; y: number },
  coord2: { x: number; y: number },
) => {
  // 计算相对于第一个坐标的水平和垂直距离
  const deltaX = coord2.x - coord1.x;
  const deltaY = coord2.y - coord1.y;

  // 使用反三角函数计算角度（以弧度为单位）
  const angleRad = Math.atan2(deltaY, deltaX);

  // 将弧度转换为角度
  let angleDeg = angleRad * (180 / Math.PI);

  // 将角度转换为顺时针方向为正方向的角度
  angleDeg = -angleDeg + 90;

  // 调整角度使得右边成为 360 度的位置变为 0 度
  if (angleDeg < 0) {
    angleDeg += 360;
  }

  return angleDeg;
};
```
</template>
</CodeBox>
</ContainerBox>