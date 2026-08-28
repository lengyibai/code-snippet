# _mergeConfig

<ContainerBox title="介绍" noGap>
<template #desc>

灵感来自`Echarts`，可重复调用的`setOption`，配置项会被合并或覆盖
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
const options1 = {
  style: {
    data: [1, 2, 3],
    color: '#fff',
    fontSize: '18px',
    other: {
      data: [4, 5, 6],
      fontWeight: 'blod',
      color: '#000',
    },
  },
};
const options2 = {
  style: {
    data: [4, 5, 6],
    fontWeight: 'blod',
    color: '#000',
    other: {
      data: [1, 2, 3],
      color: '#fff',
      fontSize: '18px',
    },
  },
};

_mergeConfig(options1, options2);
/*
{
  data: [ 1, 2, 3, 4, 5, 6 ],
  color: "#000",
  fontSize: "18px",
  other: {
      data: [ 4, 5, 6, 1, 2, 3 ],
      fontWeight: "blod",
      color: "#fff",
      fontSize: "18px"
  },
  fontWeight: "blod"
}
*/
```
<CodeBox>
<template #codes>

```ts
/** @description 配置合并，如果当前配置有但初始配置没有的属性
 * @param config 当前配置
 * @param initialConfig 初始配置
 */
export const _mergeConfig = <T>(config: T, initialConfig: T) => {
  //第一次循环是为了补充缺少的配置项
  for (const key in initialConfig) {
    //如果在当前配置中有该配置项
    if (config[key] !== undefined) {
      //如果该配置项为对象
      if (_isObject(initialConfig[key])) {
        _mergeConfig(config[key], initialConfig[key]);
      }
    }
    //否则添加该配置项
    else {
      config[key] = initialConfig[key];
    }
  }

  return config;
};
```
</template>
</CodeBox>
</ContainerBox>