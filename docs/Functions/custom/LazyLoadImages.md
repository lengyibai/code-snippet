# $lazyLoadImages

<ContainerBox title="介绍">
<template #desc>
用于长列表滚动，当图片未在可视区，通过`visibility = "hidden"`进行隐藏，提升滚动性能
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
const imgs = document.querySelector("img");
$lazyLoadImages(imgs);
```

<ShowCode>
<template #codes>

```js
export const $lazyLoadImages = (imgs) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const img = entry.target;
      if (entry.intersectionRatio > 0) {
        img.style.visibility = "visible";
      } else {
        img.style.visibility = "hidden";
      }
    });
  });
  imgs.forEach((element) => {
    observer.observe(element);
  });
};
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
<template #desc>

| 参数 | 说明           | 类型     |
| ---- | -------------- | -------- |
| imgs | 传递要复制的值 | Elements |

</template>
</ContainerBox>
