import type { Ref } from "vue";

/** @description 使用径向渐变实现window日历边框 */
const useRadialBorder = <T extends Ref<HTMLElement | null>>(el: T) => {
  /** @description 鼠标移动触发
   * @param event 鼠标事件对象
   */
  const handlePointerMove = (event: PointerEvent) => {
    if (!el.value) return;
    const { clientX, clientY } = event;
    const { top, left } = el.value.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    el.value.style.setProperty("--x", `${x}px`);
    el.value.style.setProperty("--y", `${y}px`);
  };

  /** @description 重置位置 */
  const resetPosition = () => {
    if (!el.value) return;
    el.value.style.setProperty("--x", ``);
    el.value.style.setProperty("--y", ``);
  };

  return {
    handlePointerMove,
    resetPosition,
  };
};

export { useRadialBorder };
