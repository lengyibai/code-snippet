# LibFillClick

<ContainerBox title="介绍">
<template #desc>
专门用于填充容器（仅仅用于让容器支持点击事件）
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<CodeBox>
<template #codes>

```ts
import { Sprite } from "pixi.js";

/** @description 专门用于填充容器（仅仅用于让容器支持点击事件） */
export class LibFillClick extends Sprite {
  constructor(width: number, height: number) {
    super();

    this.width = width;
    this.height = height;
  }
}
```
</template>
</CodeBox>
</ContainerBox>
