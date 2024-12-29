# _BitText

<ContainerBox title="介绍" noGap>
<template #desc>

基于 `TextBitmapText` 对的二次封装
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<CodeBox>
<template #codes>

```ts
import { BitmapText } from "pixi.js";

/** @description 位图文本使用 */
export class _BitText {
  /** 字体名称，需要打印加载的字体资源来获取字体的Family名称 */
  private fontName: string;
  /* 字体大小 */
  private fontSize?: number;

  constructor(fontName: string, fontSize?: number) {
    this.fontName = fontName;
    this.fontSize = fontSize;
  }

  /** @description 生成位图文本 */
  createText(text: string | number, fontSize?: number) {
    const bitMapText = new BitmapText(text.toString(), {
      fontName: this.fontName,
      fontSize: this.fontSize || fontSize,
    });

    return bitMapText;
  }
}

```
</template>
</CodeBox>
</ContainerBox>
