export default {
  translate1(el: HTMLElement) {
    el.style.transform = `translateY(-100%)`;
  },
  translate2(el: HTMLElement) {
    el.style.transform = 'translateY(100%)';
  },
  translate3(el: HTMLElement) {
    el.style.transform = 'translateX(-200%)';
  },
  translate4(el: HTMLElement) {
    el.style.transform = 'translateX(200%)';
  },
  rotate1(el: HTMLElement) {
    el.style.transform = 'rotateX(180deg)';
  },
  rotate2(el: HTMLElement) {
    el.style.transform = 'rotateY(-180deg)';
  },
  scale1(el: HTMLElement) {
    el.style.transform = 'scale(0.1)';
  },
  scale2(el: HTMLElement) {
    el.style.transform = 'scale(2)';
  },
  scale3(el: HTMLElement) {
    el.style.transform = 'scale3d(2,1,1)';
  },
  mixedT1(el: HTMLElement) {
    el.style.transform = 'translateX(-200%) translateY(100%)';
  },
  mixedT2(el: HTMLElement) {
    el.style.transform = 'translateX(-200%) translateY(-100%)';
  },
  mixedT3(el: HTMLElement) {
    el.style.transform = 'translateX(200%) translateY(-100%)';
  },
  mixedT4(el: HTMLElement) {
    el.style.transform = 'translateX(200%) translateY(100%)';
  },
  mixedTR1(el: HTMLElement) {
    el.style.transform = 'translateY(-100%) rotateX(180deg)';
  },
  mixedTR2(el: HTMLElement) {
    el.style.transform = 'translateY(100%) rotateX(-180deg)';
  },
  mixedTR3(el: HTMLElement) {
    el.style.transform = 'translateX(-200%) rotateY(180deg)';
  },
  mixedTR4(el: HTMLElement) {
    el.style.transform = 'translateX(200%) rotateY(-180deg)';
  },
  mixedTR5(el: HTMLElement) {
    el.style.transform = 'translateX(-200%) rotateZ(-180deg)';
  },
  mixedTR6(el: HTMLElement) {
    el.style.transform = 'translateX(200%) rotateZ(180deg)';
  },
  mixedTS1(el: HTMLElement) {
    el.style.transform = 'translateX(-200%) scale(0.1)';
  },
  mixedTS2(el: HTMLElement) {
    el.style.transform = 'translateX(200%) scale(0.1)';
  },
  mixedTS3(el: HTMLElement) {
    el.style.transform = 'translateX(200%) scale(2)';
  },
  mixedTS4(el: HTMLElement) {
    el.style.transform = 'translateX(-200%) scale(2)';
  },
  mixedTS5(el: HTMLElement) {
    el.style.transform = 'translateY(-100%) scale(2)';
  },
  mixedTS6(el: HTMLElement) {
    el.style.transform = 'translateY(100%) scale(0.1)';
  },
  mixedTS7(el: HTMLElement) {
    el.style.transform = 'translateY(100%) scale(2)';
  },
  mixedRS1(el: HTMLElement) {
    el.style.transform = 'rotateZ(180deg) scale(0.1)';
  },
  mixedRS2(el: HTMLElement) {
    el.style.transform = 'rotateZ(-180deg) scale(2)';
  },
  opacity(el: HTMLElement) {
    el.style.opacity = '0';
  },
} as {
  [propsName: string]: any;
};
