# $timeGreet

<ContainerBox title="介绍">
<template #desc>
给在网站登录的用户整一个根据时间问候
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>
可自定义问候语
</template>

```js
$timeGreet();
$timeGreet({ a: '都第二天了，该睡了' }); //自定义
/*
4点之前a：午夜，默认提示午夜好
10点之前b：早上，默认提示早上好
12点之前c：上午，默认提示上午好
14点之前d：中午，默认提示中午好
18点之前e：下午，默认提示下午好
0点之前f：晚上，默认提示晚上好
*/
```

<ShowCode>
<template #codes>

```js
export function $timeGreet(greet = {}) {
  const { a = '午夜好', b = '早上好', c = '上午好', d = '中午好', e = '下午好', f = '晚上好' } = greet;
  const now = new Date().getHours();
  return now < 4 ? a : now < 10 ? b : now < 12 ? c : now < 14 ? d : now < 18 ? e : f;
}
```

</template>
</ShowCode>
</ContainerBox>
