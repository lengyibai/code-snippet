# _timeConsole

<ContainerBox title="介绍">
<template #desc>
带时分秒前缀的打印
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<CodeBox>
<template #codes>

```ts
export const _timeConsole = () => {
  // 保存原始的 console 方法
  const originalConsoleLog = console.log;
  const originalConsoleWarn = console.warn;
  const originalConsoleError = console.error;

  // 时间戳生成函数
  const getTimestamp = () => {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `[${hour}:${minutes}:${seconds}]`;
  };

  // 重写 console.log
  console.log = (...args: any[]) => {
    originalConsoleLog(getTimestamp(), ...args);
  };

  // 重写 console.warn
  console.warn = (...args: any[]) => {
    originalConsoleWarn(getTimestamp(), ...args);
  };

  // 重写 console.error
  console.error = (...args: any[]) => {
    originalConsoleError(getTimestamp(), ...args);
  };
};
```

</template>
</CodeBox>
</ContainerBox>