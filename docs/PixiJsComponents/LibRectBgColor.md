# LibRectBgColor

<ContainerBox title="介绍" noGap>
<template #desc>

基于 `Graphics` 的二次封装，需要 `npm i gsap`
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<CodeBox>
<template #codes>

```ts
import { Graphics } from "pixi.js";
import gsap from "gsap";

interface BgColorOptions {
  /** 宽度 */
  width?: number;
  /** 高度 */
  height?: number;
  /** 背景颜色 */
  bgColor?: string | number;
  /** x轴偏移 */
  x?: number;
  /** y轴偏移 */
  y?: number;
  /** 透明度 */
  alpha?: number;
  /** 圆角半径 */
  radius?: number | number[];
  /** 边框宽度 */
  borderWidth?: number;
  /** 边框颜色 */
  borderColor?: string;
  /** 是否启用变色功能 */
  enableTint?: boolean;
  /** 是否启用溢出隐藏，当组件作为容器时 */
  overflowHide?: boolean;
}

/** @description 自定义矩形背景色，支持设置圆边 */
export class LibRectBgColor extends Graphics {
  /** 圆边大小 */
  private radius: number | number[] = 0;
  /** 启用着色 */
  private enableTint = true;
  /** 背景颜色 */
  private bgColor: string | number = "#fff";
  /** 边框宽度 */
  private borderWidth = 0;
  /** 边框颜色 */
  private borderColor = "black";
  /** 背景色 */
  private bgAlpha = 1;

  constructor(options: BgColorOptions) {
    super();

    const {
      x = 0,
      y = 0,
      width = 0,
      height = 0,
      bgColor = "#fff",
      alpha = 1,
      radius = 0,
      borderWidth = 0,
      borderColor = "black",
      enableTint = true,
      overflowHide = false,
    } = options;

    this.x = x;
    this.y = y;
    this.bgAlpha = alpha;
    this.radius = radius;
    this.enableTint = enableTint;
    this.bgColor = bgColor;
    this.borderWidth = borderWidth;
    this.borderColor = borderColor;
    this.renderBg(width, height);

    if (overflowHide) {
      const mask = new Graphics();
      mask.beginFill(0xffffff);
      mask.drawRect(0, 0, width, height);
      mask.endFill();
      this.addChild(mask);
      this.mask = mask;
    }
  }

  /** @description 重新绘制并添加颜色 */
  updateColor(tint: string) {
    gsap.to(this, { tint, duration: 0.25 });
  }

  /** @description 更新宽度 */
  renderBg(width: number, height: number) {
    this.clear();

    if (this.enableTint) {
      this.beginFill("#fff", this.bgAlpha);
      this.tint = this.bgColor;
    } else {
      this.beginFill(this.bgColor, this.bgAlpha);
      this.borderWidth && this.lineStyle(this.borderWidth, this.borderColor, 1);
    }

    this.borderWidth && this.lineStyle(this.borderWidth, this.borderColor, 1);

    if (this.radius !== 0) {
      if (typeof this.radius === "number") {
        this.drawRoundedRect(0, 0, width, height, this.radius);
      } else {
        // 绘制顶部边
        this.moveTo(0 + this.radius[0], 0);
        this.lineTo(0 + width - this.radius[1], 0);

        // 绘制右上角的圆角
        if (this.radius[1] > 0) {
          this.arcTo(0 + width, 0, 0 + width, 0 + this.radius[1], this.radius[1]);
        } else {
          this.lineTo(0 + width, 0);
        }

        // 绘制右侧边
        this.lineTo(0 + width, 0 + height - this.radius[2]);

        // 绘制右下角的圆角
        if (this.radius[2] > 0) {
          this.arcTo(0 + width, 0 + height, 0 + width - this.radius[2], 0 + height, this.radius[2]);
        } else {
          this.lineTo(0 + width, 0 + height);
        }

        // 绘制底部边
        this.lineTo(0 + this.radius[3], 0 + height);

        // 绘制左下角的圆角
        if (this.radius[3] > 0) {
          this.arcTo(0, 0 + height, 0, 0 + height - this.radius[3], this.radius[3]);
        } else {
          this.lineTo(0, 0 + height);
        }

        // 绘制左侧边
        this.lineTo(0, 0 + this.radius[0]);

        // 绘制左上角的圆角
        if (this.radius[0] > 0) {
          this.arcTo(0, 0, 0 + this.radius[0], 0, this.radius[0]);
        } else {
          this.lineTo(0, 0);
        }

        this.closePath();
      }
    } else {
      this.drawRect(0, 0, width, height);
    }

    this.endFill();
  }

  /** @description 是否显示边框 */
  showBorder(show: boolean) {
    this.borderWidth = show ? 2 : 0;
    this.renderBg(this.width, this.height);
  }
}
```
</template>
</CodeBox>
</ContainerBox>
