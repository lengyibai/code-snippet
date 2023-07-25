import animates from './animates';

/* 将动画名转换为动画函数 */
const conversion = (name: string | ((el: HTMLElement) => void) | undefined): ((el: HTMLElement) => void) => {
  return typeof name === 'string' ? animates[name] : name;
};

/* 默认动画 */
const defaultAnimate = { name: animates['opacity'], into: 1, time: 0.5 };

interface AnimateParams {
  name?: string | ((el: HTMLElement) => void);
  time?: number;
  into?: number;
}

interface Animate {
  name: (el: HTMLElement) => void;
  time: number;
  into: number;
}

interface ScrollParams {
  father: HTMLElement;
  childBox: HTMLElement[];
  childEl: HTMLElement[];
  animates: Animate[];
}

export class ScrollInto {
  scrollAnimate: (obj: ScrollParams) => void = () => {}; //当前滚动动画
  parent: HTMLElement = document.documentElement; //滚动容器
  childBox: HTMLElement[] = []; //子元素的容器
  childEl: HTMLElement[] = []; //子元素
  globalAnimate: Animate = defaultAnimate; //全局动画
  childAnimate: Animate[] = []; //子元素的动画组

  constructor(obj: { parent: HTMLElement; animate?: AnimateParams }) {
    const { parent = document.body, animate = this.globalAnimate } = obj;
    this.parent = parent;

    const animates = {
      ...this.globalAnimate,
      ...animate,
    };

    /* 覆盖默认动画效果 */
    this.globalAnimate = { ...animates, name: conversion(animates.name) };
  }

  /* 添加动画 */
  setOption(elBox: HTMLElement, animate?: AnimateParams) {
    this.childBox.push(elBox); //存储动画盒子容器
    this.childEl.push(elBox.children[0] as HTMLElement); //存储动画盒子

    animate ??= {};

    const animates = {
      ...this.globalAnimate,
      ...animate,
    };

    /* 先设置为全局动画，再拿动画盒子的属性进行覆盖 */
    this.childAnimate.push({
      ...animates,
      name: conversion(animates.name),
    });
  }

  /* 挂载动画 */
  mountAnimate(type = 'repeat') {
    /* 判断是否为播放一次的动画 */
    if (type === 'once') {
      this.scrollAnimate = this.scrollOnce;
    } else {
      this.scrollAnimate = this.scrollRepeat;
    }

    /* 整合动画 */
    const animate = {
      name: this.globalAnimate.name,
      names: this.childAnimate,
    };

    /* 设置动画 */
    this.childEl.forEach((item, index) => {
      item.style.opacity = '0';
      animate.names[index].name(item);
    });
  }

  updateAnimate(obj: AnimateParams, index: number) {
    const animate = {
      ...this.globalAnimate,
      ...obj,
      name: conversion(obj.name),
    };
    this.childAnimate[index] = animate;
    this.mountAnimate();
  }

  /* 滚动触发 */
  scroll() {
    this.scrollAnimate({
      father: this.parent,
      childBox: this.childBox,
      childEl: this.childEl,
      animates: this.childAnimate,
    });
  }

  /* 重复播放动画 */
  scrollRepeat = (obj: ScrollParams) => {
    let { childBox, childEl, father = document.documentElement, animates } = obj;
    function fn(el: HTMLElement, son: HTMLElement, i: number) {
      let a = father.scrollTop - el.offsetTop + father.clientHeight - el.clientHeight * animates[i].into;

      son.style.transition = `all ${animates[i].time}s`;
      if (a > 0) {
        son.style.transform = '';
        son.style.opacity = '1';
      } else if (a < -el.clientHeight * animates[i].into) {
        son.style.opacity = '0';
        son.style.transition = `all 0s`; //是否开启还原位置动画
        animates[i].name(son);
      }
    }
    childBox.forEach((item: HTMLElement, index: number) => {
      fn(item, childEl[index], index);
    });
  };

  /* 只播放一次动画 */
  scrollOnce = (obj: ScrollParams) => {
    let { childBox, childEl, father, animates } = obj;

    function fn(el: HTMLElement, son: HTMLElement, i: number) {
      son.style.transition = `all ${animates[i].time}s`;
      let a = father.scrollTop - el.offsetTop + father.clientHeight - el.clientHeight * animates[i].into;
      if (a > 0) {
        son.style.transform = '';
        son.style.opacity = '1';
      }
    }
    childBox.forEach((item: HTMLElement, index: number) => {
      fn(item, childEl[index], index);
    });
  };
}
