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
<div class="demo-box">
<MaskCollectionA />
</div>

<CodeBox>
<template #codes>

```vue
<template>
  <div class="demo halation"></div>
</template>

<style scoped>
.demo {
  width: 100%;
  height: 75vh;
  background: url("./img/bg.jpg") no-repeat center;
  background-size: cover;
}

.halation {
  -webkit-mask: radial-gradient(#000 0%, transparent 75%);
}
</style>
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```css
.halation {
  -webkit-mask: radial-gradient(#000 0%, transparent 75%);
}
```

</template>
</CodeBox>
</ContainerBox>

## 暗角

<ContainerBox>
<div class="demo-box">
<MaskCollectionB />
</div>

<CodeBox>
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
  background: url("./img/bg.jpg") no-repeat center;
  background-size: cover;
}

.vignet {
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: #000;
  -webkit-mask: radial-gradient(transparent 0%, #000 75%);
}
</style>
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```css
.vignet {
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: #000;
  -webkit-mask: radial-gradient(transparent 0%, #000 75%);
}
```

</template>
</CodeBox>
</ContainerBox>

## 棱角

<ContainerBox>
<div class="demo-box">
<MaskCollectionC />
</div>

<CodeBox>
<template #codes>

```vue
<template>
  <div class="demo edge"></div>
</template>

<style scoped>
.demo {
  width: 100%;
  height: 75vh;
  background: url("./img/bg.jpg") no-repeat center;
  background-size: cover;
}

.edge {
  -webkit-mask:
    linear-gradient(135deg, transparent 50px, #fff 0) top left,
    linear-gradient(-135deg, transparent 50px, #fff 0) top right,
    linear-gradient(-45deg, transparent 50px, #fff 0) bottom right,
    linear-gradient(45deg, transparent 50px, #fff 0) bottom left;
  -webkit-mask-size: 50% 50%;
  -webkit-mask-repeat: no-repeat;
}
</style>
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```css
.edge {
  -webkit-mask:
    linear-gradient(135deg, transparent 50px, #fff 0) top left,
    linear-gradient(-135deg, transparent 50px, #fff 0) top right,
    linear-gradient(-45deg, transparent 50px, #fff 0) bottom right,
    linear-gradient(45deg, transparent 50px, #fff 0) bottom left;
  -webkit-mask-size: 50% 50%;
  -webkit-mask-repeat: no-repeat;
}
```

</template>
</CodeBox>
</ContainerBox>

## 遮罩

<ContainerBox>
<div class="demo-box">
<MaskCollectionD />
</div>

<CodeBox>
<template #codes>

```vue
<template>
  <div class="demo mask"></div>
</template>

<style scoped>
.demo {
  width: 100%;
  height: 75vh;
  background: url("./img/bg.jpg") no-repeat center;
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
</CodeBox>

<CodeBox iskey>
<template #codes>

```css
.mask {
  -webkit-mask-image: url("./img/mask.png");
  -webkit-mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
}
```

</template>
</CodeBox>
</ContainerBox>

## 文字遮罩

<ContainerBox>
<div class="demo-box">
<MaskCollectionE />
</div>

<CodeBox>
<template #codes>

```vue
<template>
  <div class="demo text-clip">AI壁纸</div>
</template>

<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 2em;
  font-size: 5vw;
  font-family: "方正粗黑宋简体";
  font-weight: bold;
  text-align: center;
  line-height: 2em;
  background: url("./img/bg.jpg") no-repeat center;
  background-size: cover;
}

.text-clip {
  color: transparent;
  -webkit-background-clip: text;
}
</style>
```

</template>
</CodeBox>

<CodeBox iskey>
<template #codes>

```css
.text-clip {
  color: transparent;
  -webkit-background-clip: text;
}
```

</template>
</CodeBox>
</ContainerBox>

## 拼图

<ContainerBox>
<div class="demo-box">
<MaskCollectionF />
</div>

<CodeBox>
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
  overflow: hidden;
  width: 100%;
  height: 75vh;

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
</CodeBox>

<CodeBox iskey>
<template #codes>

```css
.splice {
  -webkit-mask: linear-gradient(45deg, #000 45%, transparent 55%);
}
```

</template>
</CodeBox>
</ContainerBox>
