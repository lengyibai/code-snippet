# $ScaleImage

<ContainerBox title="介绍">
<template #desc>
调用方法立即创建容器并显示图片，关闭后自动销毁元素
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
new $ScaleImage("图片链接");
```

<ShowCode>
<template #codes>

```ts
export class $ScaleImage {
  src: string;
  scale: number;
  x: number;
  y: number;
  overlay!: HTMLElement;
  zoomInButton!: HTMLElement;
  zoomOutButton!: HTMLElement;
  closeButton!: HTMLElement;
  img!: HTMLImageElement;
  isDragging!: boolean;
  startX!: number;
  startY!: number;

  constructor(src: string) {
    this.src = src;
    this.scale = 1;
    this.x = 0;
    this.y = 0;

    this.createOverlay();
    this.creatButton();
    this.createImage();
    this.bindEvents();
  }

  /* 创建容器 */
  createOverlay() {
    this.overlay = document.createElement("div");
    this.overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.75);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s;
      z-index: 9;
      opacity: 0;
    `;
    document.body.appendChild(this.overlay);

    setTimeout(() => {
      this.overlay.style.opacity = "1";
    });
  }

  /* 创建图片 */
  createImage() {
    this.img = document.createElement("img");
    this.img.style.cssText = `
      max-width: 75%;
      max-height: 75%;
      transform: scale(${this.scale});
      transition: all 0.25s;
    `;
    this.img.src = this.src;
    this.overlay.appendChild(this.img);
  }

  /* 创建按钮 */
  creatButton() {
    const button_style = `
    position: absolute;
    font-size: 3.125rem;
    color: #fff;
    z-index: 1;
    `;

    //关闭按钮
    this.closeButton = document.createElement("button");
    this.closeButton.style.cssText = button_style;
    this.closeButton.className += "cursor-pointer iconfont icon-guanbi";
    this.closeButton.style.top = "0";
    this.closeButton.style.right = "0";
    this.closeButton.style.transform = "translate(-100%, 100%) scale(0.75)";

    //放大按钮
    this.zoomInButton = document.createElement("button");
    this.zoomInButton.style.cssText = button_style;
    this.zoomInButton.className += "cursor-pointer iconfont icon-fangda";
    this.zoomInButton.style.bottom = "0";
    this.zoomInButton.style.left = "50%";
    this.zoomInButton.style.transform = "translate(-150%, -100%)";

    //缩小按钮
    this.zoomOutButton = document.createElement("button");
    this.zoomOutButton.style.cssText = button_style;
    this.zoomOutButton.className += "cursor-pointer iconfont icon-suoxiao";
    this.zoomOutButton.style.bottom = "0";
    this.zoomOutButton.style.left = "50%";
    this.zoomOutButton.style.transform = "translate(50%, -100%)";

    this.overlay.appendChild(this.closeButton);
    this.overlay.appendChild(this.zoomInButton);
    this.overlay.appendChild(this.zoomOutButton);
  }

  /* 绑定事件 */
  bindEvents() {
    this.overlay.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        this.scale /= 1.25;
        if (this.scale < 0.25) this.scale = 0.25;
      } else {
        this.scale *= 1.25;
        if (this.scale > 20) this.scale = 20;
      }
      this.img.style.transform = `scale(${this.scale}) translate(${this.x}px, ${this.y}px)`;
    });

    this.img.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });

    /* 拖动 */
    document.addEventListener("mousedown", (event) => {
      this.startX = event.clientX;
      this.startY = event.clientY;
      this.isDragging = true;
      this.img.style.transition = "all 0s";
    });
    document.addEventListener("mouseup", () => {
      this.isDragging = false;
      this.img.style.transition = "all 0.25s";
    });
    document.addEventListener("mousemove", (event) => {
      if (!this.isDragging) return;
      const deltaX = event.clientX - this.startX;
      const deltaY = event.clientY - this.startY;
      this.startX = event.clientX;
      this.startY = event.clientY;
      this.x += deltaX / this.scale;
      this.y += deltaY / this.scale;
      this.img.style.transform = `scale(${this.scale}) translate(${this.x}px, ${this.y}px)`;
    });

    /* 兼容移动端 */
    document.addEventListener("touchstart", (event) => {
      this.startX = event.changedTouches[0].clientX;
      this.startY = event.changedTouches[0].clientY;
      this.isDragging = true;
      this.img.style.transition = "all 0s";
    });
    document.addEventListener("touchend", () => {
      this.isDragging = false;
      this.img.style.transition = "all 0.25s";
    });
    document.addEventListener("touchmove", (event) => {
      if (!this.isDragging) return;
      const deltaX = event.changedTouches[0].clientX - this.startX;
      const deltaY = event.changedTouches[0].clientY - this.startY;
      this.startX = event.changedTouches[0].clientX;
      this.startY = event.changedTouches[0].clientY;
      this.x += deltaX / this.scale;
      this.y += deltaY / this.scale;
      this.img.style.transform = `scale(${this.scale}) translate(${this.x}px, ${this.y}px)`;
    });

    this.closeButton.addEventListener("click", () => {
      this.overlay.style.opacity = "0";
      setTimeout(() => {
        this.overlay.remove();
      }, 250);
    });

    /* 缩放 */
    const fn1 = () => {
      this.scale *= 1.25;
      this.scale = Math.min(this.scale, 20);
      this.img.style.transform = `scale(${this.scale}) translate(${this.x}px, ${this.y}px)`;
    };
    const fn2 = () => {
      this.scale /= 1.25;
      this.scale = Math.max(this.scale, 0.25);
      this.img.style.transform = `scale(${this.scale}) translate(${this.x}px, ${this.y}px)`;
    };
    this.zoomInButton.addEventListener("mouseup", fn1);
    this.zoomInButton.addEventListener("touchend", fn1);
    this.zoomOutButton.addEventListener("mouseup", fn2);
    this.zoomOutButton.addEventListener("touchend", fn2);
  }
}
```

</template>
</ShowCode>
</ContainerBox>
