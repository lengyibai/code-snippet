export default class {
  x = 0;
  y = 0;
  startX = 0;
  startY = 0;
  parent;
  options = [];
  follow;
  reverse;
  unit;
  outinit;
  constructor(parent, { follow = true, reverse = false, unit = "px", outinit = true }) {
    this.parent = parent;
    this.follow = !follow;
    this.reverse = reverse;
    this.unit = unit;
    this.outinit = outinit;
    this.enterEvent();
    this.moveEvent();
    this.leaveEvent();
  }
  initStyle() {
    for (const { el, options } of this.options) {
      const { blur: initblur = 0 } = options.init || {};
      el.style.transform = `translate(0px,0px)`;
      el.style.transition = `all 0.5s ease-in-out`;
      el.style.filter = `blur(${initblur}px)`;
    }
  }
  enterEvent() {
    this.parent.addEventListener("mouseenter", (e) => {
      let X = e.clientX - this.parent.getBoundingClientRect().x;
      let Y = e.clientY - this.parent.getBoundingClientRect().y;
      if (this.follow) {
        this.startX = e.clientX;
        this.startY = e.clientY;
        return;
      }
      this.startX = X;
      this.startY = Y;
    });
  }
  leaveEvent() {
    if (this.outinit) {
      this.parent.addEventListener("mouseleave", this.initStyle.bind(this));
    }
  }
  moveEvent() {
    const flag = this.reverse ? -1 : 1;
    this.parent.addEventListener("mousemove", (e) => {
      window.requestAnimationFrame(() => {
        let X = e.clientX - this.parent.getBoundingClientRect().x;
        let Y = e.clientY - this.parent.getBoundingClientRect().y;
        if (this.follow) {
          this.x = Number(((flag * (e.clientX - this.startX)) / this.parent.clientWidth).toFixed(2));
          this.y = Number(((flag * (e.clientY - this.startY)) / this.parent.clientHeight).toFixed(2));
        } else {
          this.x = Number(flag * (X / this.parent.clientWidth - 0.5).toFixed(2));
          this.y = Number(flag * (Y / this.parent.clientHeight - 0.5).toFixed(2));
        }
        this.enable();
      });
    });
  }
  setOption(el, options) {
    this.options.push({ el, options });
    this.initStyle();
  }
  enable() {
    for (const { el, options } of this.options) {
      const { x = 0, y = 0, blur = false, init = {} } = options;
      const { blur: initblur = 0 } = init;
      el.style.transition = `all 0.25s ease-out`;
      el.style.transform = `translate(${x * this.x}${this.unit},${y * this.y}${this.unit})`;
      if (this.follow) {
        if (blur !== false) {
          el.style.filter = `blur(${Math.abs(-initblur + Math.abs(this.x) * initblur + blur * Math.abs(this.x))}px)`;
        } else {
          el.style.filter = `blur(${initblur}px)`;
        }
      } else {
        el.style.filter = `blur(${blur * Math.abs(this.x) + initblur}px)`;
      }
    }
  }
}
