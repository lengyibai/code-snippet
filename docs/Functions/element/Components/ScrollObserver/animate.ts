export const $animateOnce = (el: HTMLElement, className: string) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.children[0].classList.remove(className);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.25 }
  );
  observer.observe(el);
};

export const $animateRepeat = (el: HTMLElement, className: string) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          el.children[0].classList.remove(className);
        } else if (!entry.isIntersecting) {
          el.children[0].classList.add(className);
        }
      });
    },
    { threshold: [0, 0.25, 1] }
  );
  observer.observe(el);
};
