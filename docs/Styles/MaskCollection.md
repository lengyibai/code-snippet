<script setup>
  import MaskCollectionA from './Components/MaskCollection/index-a.vue'
  import MaskCollectionB from './Components/MaskCollection/index-b.vue'
  import MaskCollectionC from './Components/MaskCollection/index-c.vue'
  import MaskCollectionD from './Components/MaskCollection/index-d.vue'
  import MaskCollectionE from './Components/MaskCollection/index-e.vue'
  import MaskCollectionF from './Components/MaskCollection/index-f.vue'
</script>

# 遮罩层合集

:::tip
遮罩层只会把有颜色的部分显示出来
:::

## 晕影

<ContainerBox>
<div class="demoBox">
<MaskCollectionA />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo halation"></div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 75vh;
  background: url("https://lengyibai.gitee.io/img-bed/bg.jpg") no-repeat center;
  background-size: cover;
}

.halation {
  -webkit-mask: radial-gradient(#000 50%, transparent 100%);
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```css
.halation {
  -webkit-mask: radial-gradient(#000 50%, transparent 100%);
}
```

</template>
</ShowCode>
</ContainerBox>

## 暗角

<ContainerBox>
<div class="demoBox">
<MaskCollectionB />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <div class="vignet"></div>
  </div>
</template>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 75vh;
  background: url("https://lengyibai.gitee.io/img-bed/bg.jpg") no-repeat center;
  background-size: cover;
}

.vignet {
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: #000;
  -webkit-mask: radial-gradient(transparent 50%, #000 100%);
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```css
.vignet {
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: #000;
  -webkit-mask: radial-gradient(transparent 50%, #000 100%);
}
```

</template>
</ShowCode>
</ContainerBox>

## 棱角

<ContainerBox>
<div class="demoBox">
<MaskCollectionC />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo edge"></div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 75vh;
  background: url("https://lengyibai.gitee.io/img-bed/bg.jpg") no-repeat center;
  background-size: cover;
}

.edge {
  -webkit-mask: linear-gradient(135deg, transparent 50px, #fff 0) top left, linear-gradient(
        -135deg,
        transparent 50px,
        #fff 0
      ) top right,
    linear-gradient(-45deg, transparent 50px, #fff 0) bottom right, linear-gradient(
        45deg,
        transparent 50px,
        #fff 0
      ) bottom left;
  -webkit-mask-size: 50% 50%;
  -webkit-mask-repeat: no-repeat;
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```css
.edge {
  -webkit-mask: linear-gradient(135deg, transparent 50px, #fff 0) top left, linear-gradient(
        -135deg,
        transparent 50px,
        #fff 0
      ) top right,
    linear-gradient(-45deg, transparent 50px, #fff 0) bottom right, linear-gradient(
        45deg,
        transparent 50px,
        #fff 0
      ) bottom left;
  -webkit-mask-size: 50% 50%;
  -webkit-mask-repeat: no-repeat;
}
```

</template>
</ShowCode>
</ContainerBox>

## 拼图

<ContainerBox>
<div class="demoBox">
<MaskCollectionD />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <img
      src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528-mobileskin-1.jpg"
      alt=""
    />
    <img
      class="splice"
      src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184-mobileskin-1.jpg"
      alt=""
    />
  </div>
</template>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  height: 75vh;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.splice {
  -webkit-mask: linear-gradient(45deg, #000 45%, transparent 55%);
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```css
.splice {
  -webkit-mask: linear-gradient(45deg, #000 45%, transparent 55%);
}
```

</template>
</ShowCode>
</ContainerBox>

## 遮罩

<ContainerBox>
<div class="demoBox">
<MaskCollectionE />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo mask"></div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 75vh;
  background: url("https://lengyibai.gitee.io/img-bed/bg.jpg") no-repeat center;
  background-size: cover;
}

.mask {
  -webkit-mask-image: url("./img/mask.png");
  -webkit-mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```css
.mask {
  -webkit-mask-image: url("./img/mask.png");
  -webkit-mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
}
```

</template>
</ShowCode>
</ContainerBox>

## 文字遮罩

<ContainerBox>
<div class="demoBox">
<MaskCollectionF />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo text-clip">二次元壁纸</div>
</template>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 75vh;
  background: url("https://lengyibai.gitee.io/img-bed/bg.jpg") no-repeat center;
  background-size: cover;
  font-size: 5vw;
  font-family: "方正粗黑宋简体";
  line-height: 75vh;
  text-align: center;
  font-weight: bold;
}

.text-clip {
  color: transparent;
  -webkit-background-clip: text;
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```css
.text-clip {
  color: transparent;
  -webkit-background-clip: text;
}
```

</template>
</ShowCode>
</ContainerBox>
