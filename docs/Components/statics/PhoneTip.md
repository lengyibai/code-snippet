<script setup>
  import PhoneTip from './Components/PhoneTip/index.vue'
</script>

# PhoneTip

<ContainerBox title="介绍">
<template #desc>
如果你在移动端浏览，将会提示你横屏查看
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibPhoneTip.zip)

引入参考 [引入组件](/Components/base/start.html)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>
如果是 PC 端访问，可打开控制台，开启模拟移动端设备，即可查看效果，横屏后可隐藏
</template>
<div class="demoBox">
<PhoneTip />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="PhoneTip" v-if="show">
    <svg
      class="phone"
      t="1662996968845"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="6434"
    >
      <path
        d="M734.608696 1024 289.391304 1024c-49.174261 0-89.043478-39.869217-89.043478-89.043478L200.347826 89.043478c0-49.174261 39.869217-89.043478 89.043478-89.043478l445.217391 0c49.174261 0 89.043478 39.869217 89.043478 89.043478l0 845.913043C823.652174 984.130783 783.782957 1024 734.608696 1024zM779.130435 89.043478c0-24.598261-19.923478-44.521739-44.521739-44.521739L289.391304 44.521739C264.793043 44.521739 244.869565 64.445217 244.869565 89.043478l0 22.26087 534.26087 0L779.130435 89.043478zM779.130435 155.826087 244.869565 155.826087l0 712.347826 534.26087 0L779.130435 155.826087zM779.130435 912.695652 244.869565 912.695652l0 22.26087c0 24.598261 19.923478 44.521739 44.521739 44.521739l445.217391 0c24.598261 0 44.521739-19.923478 44.521739-44.521739L779.130435 912.695652z"
        p-id="6435"
        fill="#ffffff"
      ></path>
    </svg>
    <div class="message">
      <span>横屏查看更佳</span>
      <span>手机下拉状态栏</span>
      <span>设置自动旋屏，取消方向锁定</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PhoneTip',
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.tip();
    window.addEventListener('resize', () => {
      this.tip();
    });
  },
  methods: {
    tip() {
      this.show = /mobile/i.test(navigator.userAgent);
    },
  },
};
</script>
<style scoped lang="less">
.PhoneTip {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
  .phone {
    width: 200px;
    margin-bottom: 50px;
    animation: rotate 2s infinite ease-out;
    @keyframes rotate {
      50% {
        transform: rotate(-90deg);
      }
      75% {
        transform: rotate(-90deg);
      }
    }
  }
  .message {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
</style>
```

</template>
</ShowCode>
</ContainerBox>
