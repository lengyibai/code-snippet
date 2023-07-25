<script setup>
  import UploadImg from './Components/UploadImg/demo/index.vue'
</script>

# UploadImg

<ContainerBox title="介绍">
<template #desc>
一般用于修改头像
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/dynamic/LibUploadImg.zip)

引入参考 [引入组件](/Components/base/start.html)
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<UploadImg />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <LibUploadImg url="/upload" v-model="img_url" />
</template>
<script setup lang="ts">
import { ref } from "vue";

const img_url = ref("https://lengyibai.gitee.io/img-bed/lyb.png");
</script>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| value | 图片链接 | String | -      |
| url   | 接口地址 | String | -      |

</template>
</ContainerBox>
