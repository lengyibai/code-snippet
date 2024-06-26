/**
 * @description 移动动画类。
 */
export default class MoveAnimation {
  running: boolean = false; // 运行状态
  move: HTMLElement; // 移动元素
  middle: HTMLElement; // 中间元素
  right: HTMLElement; // 右侧元素
  speed: number; // 移动速度

  /**
   * 构造函数
   * @param move 移动元素
   * @param middle 中间元素
   * @param right 右侧元素
   * @param speed 移动速度，默认为 20
   */
  constructor(move: HTMLElement, middle: HTMLElement, right: HTMLElement, speed: number = 20) {
    this.move = move;
    this.middle = middle;
    this.right = right;
    this.speed = speed;
  }

  /**
   * 计算二次函数解
   * @param arr1 数组1
   * @param arr2 数组2
   * @param arr3 数组3
   * @returns 二次函数解数组
   */
  getSolve(arr1: number[], arr2: number[], arr3: number[]): number[] {
    const d = arr1[0];
    const e = arr1[1];
    const f = arr2[0];
    const g = arr2[1];
    const h = arr3[0];
    const i = arr3[1];

    const a =
      (((g - i) * (f - d)) / (f - h) - (g - e)) /
      (((f * f - h * h) * (f - d)) / (f - h) - (f * f - d * d));
    const b =
      (((g - i) * (f * f - d * d)) / (f * f - h * h) - (g - e)) /
      (((f - h) * (f * f - d * d)) / (f * f - h * h) - (f - d));
    const c =
      (((g * h - f * i) * (d * d * f - f * f * d)) / (f * f * h - h * h * f) - (f * e - d * g)) /
      (((h - f) * (d * d * f - f * f * d)) / (f * f * h - h * h * f) - (f - d));
    const all = [a, b, c];

    return all;
  }

  /**
   * 运行移动动画
   * @param e 事件对象
   * @returns Promise 对象
   */
  run(e: Event): Promise<any> {
    const el = e.target as HTMLInputElement;
    return new Promise((resolve, reject) => {
      if (this.running) {
        reject();
        return;
      }
      this.running = true;
      const x = el.getBoundingClientRect().x;
      const y = el.getBoundingClientRect().y;
      this.move.style.display = `block`;
      this.move.style.left = x + "px";
      this.move.style.top = y + "px";
      const move = this.move;
      const middle = this.middle;
      const right = this.right;

      const arr1 = [move.offsetLeft, -move.offsetTop];
      const arr2 = [middle.offsetLeft, -middle.offsetTop];
      const arr3 = [right.offsetLeft, -right.offsetTop];

      const EYC = this.getSolve(arr1, arr2, arr3);
      const fn = () => {
        const newLeft = move.offsetLeft + this.speed;
        const newTop = EYC[0] * newLeft * newLeft + EYC[1] * newLeft + EYC[2];
        move.style.left = newLeft + "px";
        move.style.top = -newTop + "px";
        if (newLeft >= arr3[0]) {
          resolve(null);
          this.move.style.transition = `all 0.25s`;
          this.move.style.opacity = "0";
          setTimeout(() => {
            this.move.style.transition = `all 0s`;
            this.move.style.opacity = "1";
            this.move.style.display = `none`;
            this.running = false;
          }, 250);
          return;
        }
        requestAnimationFrame(fn.bind(this));
      };
      fn();
    });
  }
}
