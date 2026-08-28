# _colorConsole

<ContainerBox title="介绍">
<template #desc>
带时分秒前缀的颜色打印
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<CodeBox>
<template #codes>

```ts
/** @description console颜色打印
 * @param title 标题
 * @param color 信息
 * @param logs 颜色
 */
export const _colorConsole = (
  title: string,
  color: "red" | "orange" | "yellow" | "green" | "blue" | "purple",
  logs:
    | {
        label: string;
        value: any;
      }[]
    | any = [],
) => {
  const colors = {
    red: "#c0392b",
    orange: "#d35400",
    yellow: "#f1c40f",
    green: "#27ae60",
    blue: "#2980b9",
    purple: "#be2edd",
  };

  // 时间戳生成函数
  const getTimestamp = () => {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `[${hour}:${minutes}:${seconds}]`;
  };
  if (Array.isArray(logs)) {
    const v = logs.map((log) => {
      return [`\n${log.label}：`, log.value];
    });
    console.log(
      `%c${getTimestamp()}-${title}`,
      `color: #fff;background: ${colors[color]}; font-size:14px;border-radius:5px;padding:0.25em;margin:0.5em 0`,
      ...v.flat(Infinity),
    );
  } else {
    console.log(
      `%c${getTimestamp()}-${title}`,
      `color: #fff;background: ${colors[color]}; font-size:14px;border-radius:5px;padding:0.25em;margin:0.5em 0`,
      logs,
    );
  }
};
```
</template>
</CodeBox>
</ContainerBox>