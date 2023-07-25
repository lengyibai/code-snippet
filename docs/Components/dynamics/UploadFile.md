<script setup>
  import UploadFileA from './Components/UploadFile/demo/index-a.vue'
  import UploadFileB from './Components/UploadFile/demo/index-b.vue'
  import UploadFileC from './Components/UploadFile/demo/index-c.vue'
  import UploadFileD from './Components/UploadFile/demo/index-d.vue'
</script>

# UploadFile

<ContainerBox title="介绍">
<template #desc>
这是一个支持：

- 显示文件名

- 文件占用大小

- 匹配文件对应图标

- 限制文件大小

- 限制文件格式

- 单文件和多文件上传

- 排队上传

- 文件拖拽至选择框处上传
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/dynamic/LibUploadFile.zip)

引入参考 [引入组件](/Components/base/start.html)
</template>
</ContainerBox>

## 代码演示

::: warning
控制台警告：`Failed to resolve component: marquee If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. `

是由于组件内使用了`marquee`跑马灯标签，此标签已废弃，但仍可以使用，控制台警告可忽略
:::
<ContainerBox title="基础用法">
<template #desc>
无限制，打开控制台可查看回调参数打印

由于使用的`Element UI`的上传接口，大部分图片上传会失败，建议下载作者提供的测试图片进行此页面的上传测试：<a href="/cat.png" download="cat.png" target="_blank">点击下载</a>
</template>

<div class="demoBox">
<UploadFileA />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibUploadFile
      :files="files"
      @cancel="cancel"
      @del="del"
      @fail="fail"
      @progress="progress"
      @success="success"
      id="a"
      url="https://jsonplaceholder.typicode.com/posts/"
    />
    <p v-for="(item, index) in files" :key="index">
      {{ item }}
    </p>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const files = ref([]);
const success = (a) => {
  console.warn('上传成功：', a);
};

const del = (a) => {
  console.warn('删除文件：', a);
};

const cancel = () => {
  console.warn('取消上传');
};

const fail = () => {
  console.error('上传失败');
};

const progress = (a) => {
  console.warn('上传进度：', a);
};
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="限制">

<template #desc>

限制上传一个文件，只能上传`png`、`jpg`格式的文件，且大小不能超过`1.25MB`
</template>

<div class="demoBox">
<UploadFileB />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibUploadFile
      id="b"
      url="https://jsonplaceholder.typicode.com/posts/"
      :multiple="false"
      :size="1.25"
      :suffix="['png', 'jpg']"
      :files="files"
    />
    <p v-for="(item, index) in files" :key="index">
      {{ item }}
    </p>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const files = ref([]);
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="只读">

<template #desc>
不可编辑
</template>

<div class="demoBox">
<UploadFileC />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibUploadFile :files="files" id="c" readOnly v-if="files.length" />
  </div>
</template>
<script setup>
import { ref } from 'vue';

const files = ref([]);

/* 模拟异步请求图片进行预览 */
setTimeout(() => {
  files.value = [
    {
      fileName: '图片1',
      src: 'https://lengyibai.gitee.io/img-bed/img/lyb.png',
    },
    {
      fileName: '图片2',
      src: 'https://lengyibai.gitee.io/img-bed/img/lyb.png',
    },
    {
      fileName: '图片3',
      src: 'https://lengyibai.gitee.io/img-bed/img/lyb.png',
    },
  ];
}, 1000);
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="可编辑">

<template #desc>
用于在重新编辑数据的情况
</template>

<div class="demoBox">
<UploadFileD />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibUploadFile
      :files="files"
      id="d"
      url="https://jsonplaceholder.typicode.com/posts/"
      v-if="show || files.length"
    />
    <p v-for="(item, index) in files" :key="index">
      {{ item }}
    </p>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const files = ref([]);
const show = ref(false);

/* 模拟异步请求图片，isShow 是为了避免无图片导致隐藏，无法添加图片 */
setTimeout(() => {
  files.value = [
    {
      fileName: '图片1',
      src: 'https://lengyibai.gitee.io/img-bed/img/lyb.png',
    },
    {
      fileName: '图片2',
      src: 'https://lengyibai.gitee.io/img-bed/img/lyb.png',
    },
    {
      fileName: '图片3',
      src: 'https://lengyibai.gitee.io/img-bed/img/lyb.png',
    },
  ];
  show.value = true; //请求成功后赋值
}, 1000);
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数     | 说明                                                                                                                                            | 类型    | 默认值 |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ |
| id       | 当同一页面存在多个文件上传组件，需要使用`id`进行标识                                                                                            | String  | -      |
| files    | 文件列表<br />注：文件删除和增加，都会直接修改原数组，可在源码内查找`this.virtual_files.push`，修改期望的返回格式，默认为`{fileName:'',src:''}` | Array   | -      |
| url      | 上传地址                                                                                                                                        | String  | -      |
| headers  | 上传文件的头部信息，例如`{ token:localStorage.getItem("token") }`                                                                               | Object  | -      |
| multiple | 是否开启多文件上传                                                                                                                              | Boolean | true   |
| size     | 限制文件大小，单位`MB`                                                                                                                          | Number  | 无限制 |
| suffix   | 限制文件格式，将可上传的文件后缀名(去掉`.`)存入数组                                                                                             | Array   | 无限制 |
| readOnly | 是否只读                                                                                                                                        | Boolean | false  |

</template>
</ContainerBox>

<ContainerBox title="Events">

<template #desc>

| 事件名   | 说明               | 回调参数                 |
| -------- | ------------------ | ------------------------ |
| progress | 上传进度           | 1-100 的进度             |
| success  | 上传成功后回调     | 后端返回值，包含状态码等 |
| del      | 删除触发           | 删除的索引号             |
| cancel   | 上传过程中删除触发 | -                        |
| fail     | 上传失败触发       | -                        |

</template>
</ContainerBox>
