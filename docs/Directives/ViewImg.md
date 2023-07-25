<script setup>
  import ViewImg from './Components/ViewImg/index.vue'
</script>

# ViewImg

<ContainerBox title="介绍">
<template #desc>
简易的点击查看图片功能，支持旋转、滚轮缩放、鼠标拖动
</template>
</ContainerBox>

<ContainerBox title="使用">

<template #desc>

引入参考 [准备工作](/Directives/base/start.html#准备工作)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
给需要查看图片的父盒子设置自定义指令

查看时，鼠标滚轮控制放大缩小，可拖动，以窗口中心放大为准
</template>

::: danger
只要点击的元素是 img 标签，就会触发查看图片，确保你的图片没有设置额外的点击事件
:::

<div class="demoBox">
<ViewImg />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div v-viewImg>
    <img src="https://lengyibai.gitee.io/img-bed/lib.png" alt="" />
    <img src="/images/cat.png" alt="" />
  </div>
</template>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```js
const viewImg = {
  mounted(el: HTMLElement) {
    el.addEventListener('click', (e) => {
      new Lyb(e.target);
    });
    const svg = {
      CLOSE: `<svg t="1662135922951" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2662"><path d="M1022.583467 127.803733 894.779733 0 511.291733 383.4624 127.8464 0 0 127.803733 383.496533 511.274667 0 894.737067 127.8464 1022.5408 511.291733 639.0784 894.779733 1022.5408 1022.583467 894.737067 639.138133 511.274667Z" p-id="2663" fill="#ffffff"></path></svg>`,
      CLOCKWISE: `<svg t="1662135824052" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1399"><path d="M482.773333 66.517333l148.181334 151.168a21.333333 21.333333 0 0 1 0 29.866667l-147.84 150.826667a21.333333 21.333333 0 0 1-28.16 2.090666l-2.346667-2.090666-27.050667-27.605334a21.333333 21.333333 0 0 1 0-29.866666l69.888-71.338667a304.64 304.64 0 1 0 318.421334 352.682667l1.024-6.826667c0.170667-1.408 0.426667-3.285333 0.64-5.632a21.333333 21.333333 0 0 1 22.314666-19.114667l42.666667 2.261334a21.333333 21.333333 0 0 1 20.224 22.4l-0.085333 1.024-1.194667 10.496A389.973333 389.973333 0 1 1 484.821333 184.746667l-59.306666-60.458667a21.333333 21.333333 0 0 1 0-29.866667l27.093333-27.605333a21.333333 21.333333 0 0 1 30.165333-0.298667z" p-id="1400" fill="#ffffff"></path></svg>`,
      COUNTER: `<svg t="1662135840330" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1590"><path d="M541.226667 66.517333L393.045333 217.685333a21.333333 21.333333 0 0 0 0 29.866667l147.84 150.826667a21.333333 21.333333 0 0 0 28.16 2.090666l2.346667-2.090666 27.050667-27.605334a21.333333 21.333333 0 0 0 0-29.866666l-69.888-71.338667a304.64 304.64 0 1 1-318.421334 352.682667l-1.024-6.826667a176.554667 176.554667 0 0 1-0.64-5.632 21.333333 21.333333 0 0 0-22.314666-19.114667l-42.666667 2.261334a21.333333 21.333333 0 0 0-20.224 22.4l0.085333 1.024 1.194667 10.496A389.973333 389.973333 0 1 0 539.178667 184.746667l59.306666-60.458667a21.333333 21.333333 0 0 0 0-29.866667l-27.093333-27.605333a21.333333 21.333333 0 0 0-30.165333-0.298667z" p-id="1591" fill="#ffffff"></path></svg>`,
    };
    class Lyb {
      x = 0;
      y = 0;
      size = 1;
      rotate = 0;
      status = 0;
      transform = '';
      origin = [0, 0];
      position = [0, 0];
      pic: HTMLElement;
      tool: HTMLElement;
      mask: HTMLElement;
      boxDom: HTMLElement;
      counter: HTMLElement;
      closeBtn: HTMLElement;
      clonedBox: HTMLElement;
      clockwise: HTMLElement;
      constructor(el) {
        document.body.style.overflow = 'hidden';
        this.boxDom = el;
        this.createdMask();
        this.createPic();
        this.createBtn();
        this.createCloseBtn();
        if (this.boxDom.tagName !== 'IMG') return;
        this.initImg();
        this.addEventListener();
      }
      createdMask() {
        this.mask = document.createElement('div');
        this.mask.style.cssText = ` display: none; position: fixed; inset: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.75); transition: all 0.25s; opacity: 0; z-index: 999; `;
        document.body.appendChild(this.mask);
      }
      createPic() {
        this.pic = document.createElement('div');
        this.pic.style.cssText = ` position: fixed; inset: 0; width: 100%; height: 100%; transition: all 0.25s; z-index: 1000; display: none; transform: scale(0.75); opacity: 0; `;
        document.body.appendChild(this.pic);
      }
      createBtn() {
        this.tool = document.createElement('div');
        this.clockwise = document.createElement('div');
        this.counter = document.createElement('div');
        this.tool.style.cssText = ` position: fixed; display: none; justify-content: space-between; width: 110px; left: 50%; bottom: 30px; transform: translateX(-50%); background-color: #606266; border-radius: 50px; z-index: 1001; padding: 10px 23px; opacity: 0; transition: all 0.25s; `;
        const base = `width: 23px; height: 23px; `;
        this.clockwise.style.cssText = base;
        this.counter.style.cssText = base;
        this.clockwise.innerHTML = svg.CLOCKWISE;
        this.counter.innerHTML = svg.COUNTER;
        this.tool.appendChild(this.counter);
        this.tool.appendChild(this.clockwise);
        document.body.appendChild(this.tool);
        this.clockwise.addEventListener('click', (e) => {
          e.stopPropagation();
          this.setPosition('clockwise');
        });
        this.counter.addEventListener('click', (e) => {
          e.stopPropagation();
          this.setPosition('counter');
        });
      }
      createCloseBtn() {
        this.closeBtn = document.createElement('div');
        this.closeBtn.innerHTML = svg.CLOSE;
        this.closeBtn.style.cssText = ` position: fixed; display: none; top: 60px; right: 60px; width: 40px; height: 40px; z-index: 1001; padding: 11px; background-color: #606266; transition: all 0.25s; opacity: 0; border-radius: 50%; `;
        document.body.appendChild(this.closeBtn);
      }
      initImg() {
        this.clonedBox = this.boxDom.cloneNode(true) as HTMLElement;
        this.clonedBox.style.cssText = ` position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); max-width: 100%; max-height: 100%; object-fit: contain; transition: all 0.25s; `;
        this.pic.appendChild(this.clonedBox);
        this.pic.style.display = 'block';
        this.mask.style.display = 'block';
        this.tool.style.display = 'flex';
        this.closeBtn.style.display = 'block';
        setTimeout(() => {
          this.mask.style.opacity = '1';
          this.pic.style.opacity = '1';
          this.pic.style.transform = 'scale(1)';
          this.tool.style.opacity = '1';
          this.closeBtn.style.opacity = '1';
          this.origin = [this.clonedBox.offsetWidth / 2, this.clonedBox.offsetHeight / 2];
        });
      }
      setPosition(name) {
        const obj = {
          clockwise() {
            this.rotate += 90;
            this.status++;
          },
          counter() {
            this.rotate -= 90;
            this.status--;
          },
        };
        obj[name].call(this);
        this.setStyle();
      }
      setStyle() {
        this.clonedBox.style.transform = `translate(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px)) rotate(${this.rotate}deg) scale(${this.size})`;
        this.clonedBox.style.transformOrigin = `${this.origin[0]}px ${this.origin[1]}px`;
      }
      addEventListener() {
        this.pic.addEventListener('mousewheel', this.wheel.bind(this));
        this.clonedBox.addEventListener('click', (e) => {
          e.stopPropagation();
        });
        this.closeBtn.addEventListener('click', this.close.bind(this));
        this.pic.addEventListener('click', this.close.bind(this));
        const _this = this;
        let startX = 0;
        let startY = 0;
        let moveX = 0;
        let moveY = 0;
        let originX = 0;
        let originY = 0;
        function fn(e) {
          const status = _this.status;
          if (status % 4 === 0) {
            _this.x = moveX + (e.pageX - startX) / _this.size;
            _this.y = moveY + (e.pageY - startY) / _this.size;
            _this.origin[0] = originX - (e.pageX - startX) / _this.size;
            _this.origin[1] = originY - (e.pageY - startY) / _this.size;
          }
          if (status % 4 === 1 || status % 4 === -3) {
            _this.x = moveX + (e.pageY - startY) / _this.size;
            _this.y = moveY - (e.pageX - startX) / _this.size;
            _this.origin[0] = originX - (e.pageY - startY) / _this.size;
            _this.origin[1] = originY + (e.pageX - startX) / _this.size;
          }
          if (status % 4 === 2 || status % 4 === -2) {
            _this.x = moveX - (e.pageX - startX) / _this.size;
            _this.y = moveY - (e.pageY - startY) / _this.size;
            _this.origin[0] = originX + (e.pageX - startX) / _this.size;
            _this.origin[1] = originY + (e.pageY - startY) / _this.size;
          }
          if (status % 4 === 3 || status % 4 === -1) {
            _this.x = moveX - (e.pageY - startY) / _this.size;
            _this.y = moveY + (e.pageX - startX) / _this.size;
            _this.origin[0] = originX + (e.pageY - startY) / _this.size;
            _this.origin[1] = originY - (e.pageX - startX) / _this.size;
          }
          _this.setStyle();
        }
        this.clonedBox.addEventListener('mousedown', (e) => {
          e.preventDefault();
          startX = e.pageX;
          startY = e.pageY;
          moveX = this.x;
          moveY = this.y;
          originX = this.origin[0];
          originY = this.origin[1];
          this.clonedBox.style.transition = 'all 0s';
          this.clonedBox.addEventListener('mousemove', fn);
        });
        this.clonedBox.addEventListener('mouseup', () => {
          this.clonedBox.style.transition = 'all 0.25s';
          this.clonedBox.removeEventListener('mousemove', fn);
        });
      }
      wheel(e) {
        if (e.deltaY > 0) {
          this.size /= 1.25;
          if (this.size < 0.1) this.size = 0.1;
        } else {
          this.size *= 1.25;
        }
        this.setStyle();
      }
      close() {
        document.body.style.overflow = 'auto';
        this.pic.removeEventListener('mousewheel', this.wheel.bind(this));
        this.mask.style.opacity = '0';
        this.tool.style.opacity = '0';
        this.closeBtn.style.opacity = '0';
        this.pic.style.opacity = '0';
        this.pic.style.transform = 'scale(0.75)';
        setTimeout(() => {
          this.mask.style.display = 'none';
          this.tool.style.display = 'none';
          this.pic.style.display = 'none';
          this.pic.innerHTML = '';
          this.closeBtn.style.display = 'none';
        }, 250);
      }
    }
  },
};
```

</template>
</ShowCode>
</ContainerBox>
