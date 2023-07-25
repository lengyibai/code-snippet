export default class {
  parent;
  childs = [];
  Y = 0;
  fade;
  unit;
  smooth;
  constructor(el, { fade = true, unit = 'px', smooth = true } = {}) {
    this.parent = el;
    this.fade = fade;
    this.unit = unit;
    this.smooth = smooth;
    this.registerEvent();
  }

  /* 注册事件 */
  registerEvent() {
    this.parent.addEventListener('scroll', (e) => {
      window.requestAnimationFrame(() => {
        this.Y = e.target.scrollTop;
        this.setStyle();
      });
    });
  }

  /* 追加元素配置 */
  setOptions(option) {
    this.childs.push(option);
  }

  /* 设置样式 */
  setStyle() {
    for (const { el, intoY, endY, intoStyle, endStyle } of this.childs) {
      /* 计算百分比 */
      let y =
        el.getBoundingClientRect().top -
        document.documentElement.clientHeight +
        document.documentElement.clientHeight -
        this.parent.getBoundingClientRect().bottom;
      if (y > 0) {
        return;
      }
      y = Math.abs(y);
      let p = 0;
      p = 1 - (y - intoY) / (endY - intoY);
      if (p > 1) p = 1;
      if (p < 0) p = 0;

      /* 设置X轴位移 */
      let offsetX = 0;
      let intoX = intoStyle.left ?? intoStyle.right;
      let endX = endStyle.left ?? endStyle.right;
      if (intoStyle.left !== undefined) {
        offsetX = endX - (endX - intoX) * p;
      } else if (intoStyle.right !== undefined) {
        offsetX = -(endX - (endX - intoX) * p);
      } else {
        offsetX = 0;
      }
      /* 设置大小 */
      let scale = 1;
      if (intoStyle.scale !== undefined) {
        scale = endStyle.scale - (endStyle.scale - intoStyle.scale) * p;
      }

      el.style.transform = `translate(${offsetX}${this.unit}) scale(${scale})`;

      /* 设置淡入淡出 */
      if (this.fade) {
        el.style.opacity = 1 - p;
      }
      let time = this.smooth ? 0.1 : 0;
      el.style.transition = `all ${time}s ease-out`;
    }
  }

  /* 初始化样式 */
  initStyle() {
    for (const { el, intoY, endY, intoStyle, endStyle } of this.childs) {
      const { left, scale, right } = intoStyle;
      el.style.transform = `translate(${left || -right || 0}${this.unit}) scale(${scale || 1})`;
    }
  }
}
