<script setup>
  import Logo from './components/Logo/index.vue'
</script>

<ContainerBox>
  <template #desc>
    <Logo />
  </template>
</ContainerBox>

<ContainerBox title="介绍" noGap>
  <template #desc>

  `Lib`是一个自用代码片段，收集作者在项目中遇到的一些比较实用的功能，抽离出来，方便未来项目或个人项目使用，并写下文档，方便查询使用方法。
  </template>
</ContainerBox>

<ContainerBox title="贡献代码" noGap>
  <template #desc>

  使用过程中发现任何问题，欢迎提`issue`，你也可以点击页面底部的`在 GitHub 上编辑此页面`提`PR`。

  请先确认这个问题是否已经在`issue`中有记录或者已被修复
  </template>
</ContainerBox>
