# $copyText

<ContainerBox title="介绍">
<template #desc>
只能通过事件触发才能复制成功
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
$copyText("冷弋白", function (text) {
  console.log(text); //冷弋白
});
```

<ShowCode>
<template #codes>

```js
export function $copyText(text, fn = () => {}) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  fn(text);
}
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
<template #desc>

| 参数 | 说明                                                 | 类型             |
| ---- | ---------------------------------------------------- | ---------------- |
| str  | 传递要复制的值                                       | String \| Number |
| fn   | 复制成功后将会调用，并可以接收参数，参数为复制的内容 |                  |

</template>
</ContainerBox>
