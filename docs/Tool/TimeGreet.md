# _timeGreet

<ContainerBox title="介绍">
<template #desc>
给在网站登录的用户整一个根据时间问候
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
_timeGreet();
_timeGreet({ midnight: '都第二天了，该睡了' }); //自定义
```
<CodeBox>
<template #codes>

```ts
/**
 * @description 根据当前时间返回问候语。
 * @param greet 自定义问候语对象。
 */
export const _timeGreet = (greet: { midnight?: string, morning?: string, forenoon?: string, noon?: string, afternoon?: string, evening?: string } = {}) => {
  const { midnight = '午夜好', morning = '早上好', forenoon = '上午好', noon = '中午好', afternoon = '下午好', evening = '晚上好' } = greet;
  const now = new Date().getHours();
  return now < 4 ? midnight : now < 10 ? morning : now < 12 ? forenoon : now < 14 ? noon : now < 18 ? afternoon : evening;
};
```
</template>
</CodeBox>
</ContainerBox>
