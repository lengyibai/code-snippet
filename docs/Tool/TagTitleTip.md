# _tagTitleTip

<ContainerBox title="介绍">
<template #desc>
浏览器标签标题交互提示
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<CodeBox>
<template #codes>

```ts
/** @description 网站标题交互 */
export const _tagTitleTip = () => {
  let document_title = "";
  let timer: NodeJS.Timeout;
  window.addEventListener("visibilitychange", () => {
    clearTimeout(timer);

    if (document.hidden) {
      if (document.title !== "o(*≧▽≦)ツ欢迎回来！") {
        document_title = document.title;
      }
      document.title = "ヽ(≧∀≦)ﾉ来和妲己玩耍吧！";
      return;
    }

    document.title = "o(*≧▽≦)ツ欢迎回来！";

    timer = setTimeout(() => {
      document.title = document_title;
    }, 1000);
  });
};
```
</template>
</CodeBox>
</ContainerBox>
