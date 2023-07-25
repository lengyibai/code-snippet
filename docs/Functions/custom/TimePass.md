# $timePass

<ContainerBox title="介绍">
<template #desc>
记录多久之前发布的内容
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>
传递时间戳，显示多久之前
</template>

```js
console.log($timePass(Date.now() - 3600000)); // 1 小时前

console.log($timePass(Date.now() - 3600000 * 24)); // 1 天前

console.log($timePass(Date.now() - 3600000 * 24 * 30)); //1 月前

console.log($timePass(Date.now() - 3600000 * 24 * 30 * 12)); // 1 年前
```

<ShowCode>
<template #codes>

```js
export function $timePass(o) {
  let n = {
      year: '%n% 年前',
      month: '%n% 月前',
      day: '%n% 天前',
      hour: '%n% 小时前',
      minute: '%n% 分钟前',
      second: '%n% 秒前',
    },
    t = Date.now(),
    e = Math.floor((t - o) / 1e3),
    r = Math.floor(e / 60),
    a = Math.floor(r / 60),
    h = Math.floor(a / 24),
    l = Math.floor(h / 30),
    f = Math.floor(l / 12),
    u = '',
    M = 0;
  return (
    f > 0
      ? ((u = 'year'), (M = f))
      : l > 0
      ? ((u = 'month'), (M = l))
      : h > 0
      ? ((u = 'day'), (M = h))
      : a > 0
      ? ((u = 'hour'), (M = a))
      : r > 0
      ? ((u = 'minute'), (M = r))
      : ((u = 'second'), (M = 0 === e ? (e = 1) : e)),
    n[u].replace('%n%', M)
  );
}
```

</template>
</ShowCode>
</ContainerBox>
