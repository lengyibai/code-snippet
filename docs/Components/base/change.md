# 迁移改变

<ContainerBox title="Tip">
<template #desc>

由于`VitePress`的特性，一些组件无法展示，已从3.0版本移除

| 组件          | 名               | 原因                                                         |
| ------------- | ---------------- | ------------------------------------------------------------ |
| Swiper        | Swiper轮播图     | 第三方库无法适配                                             |
| QrCode        | 生成二维码       | 第三方组件无法适配                                           |
| Echarts       | Echarts图表      | 没必要保留                                                   |
| PdrPulSingle  | 上拉加载下拉刷新 | VitePress内的父组件无法引入`axios`，导致数据加载失败<br />但在Vue3内应该能正常使用Vue2版的，但需要注意此组件内的图片引入<br />在`Vite`内，需要更改引入图片的方式：`require` |
| SelectAddress | 省市区选择器     | 引用的是`Element`组件库的级联选择器，可参考`Vue2`版本的组件进行修改 |
| RichText      | 富文本编辑器     | `Vue3`有更好的富文本编辑器组件：[wangeditor](https://www.wangeditor.com) |


</template>
</ContainerBox>