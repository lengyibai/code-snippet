<script setup>
  import TableLayoutA from './Components/TableLayout/index-a.vue'
  import TableLayoutB from './Components/TableLayout/index-b.vue'
</script>

# TableLayout

<ContainerBox title="介绍">
<template #desc>
初学 CSS 时对表单进行布局时，使用的表格布局
</template>
</ContainerBox>

<ContainerBox title="使用">

<template #desc>

引入参考 [准备工作](/Directives/base/start.html#准备工作)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<TableLayoutA />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <table class="table" v-tableLayout="['right', 'left']">
    <tr>
      <td>QQ：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>密码：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>手机号：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>家庭住址：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>大学：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>身份证号：</td>
      <td><input type="text" /></td>
    </tr>
  </table>
</template>
<style scoped lang="less">
.table {
  width: 300px;
  border-collapse: collapse;
  td {
    padding: 0;
    input {
      border: none;
      border-bottom: 1px solid #000;
    }
  }
}

tr {
  border: none;
}
</style>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```js
const tableLayout = {
  mounted(el: HTMLElement, { value }) {
    el.style.cssText = `
      border-collapse: collapse;
    `;
    [...el.querySelectorAll('td')].forEach((item, index) => {
      item.style.wordBreak = 'break-all';
      item.style.textAlign = index % 2 ? value[1] : value[0];
    });
  },
};
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="其他对齐方式">

::: tip
此处使用了边框，是为了更好的看清布局
:::

<div class="demoBox">
<TableLayoutB />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <table class="table" v-tableLayout="['left', 'right']">
    <tr>
      <td>QQ：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>密码：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>手机号：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>家庭住址：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>大学：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>身份证号：</td>
      <td><input type="text" /></td>
    </tr>
  </table>
</template>
<style scoped lang="less">
.table {
  width: 300px;
  border-collapse: collapse;
  td {
    padding: 0;
    border: 1px solid #000;
    input {
      border: none;
      border-bottom: 1px solid #000;
    }
  }
}

tr {
  border: none;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="value">

<template #desc>

| 说明                                         | 类型  | 默认值 |
| -------------------------------------------- | ----- | ------ |
| [0]：第一列对齐方式<br />[1]：第二列对齐方式 | Array | -      |

</template>
</ContainerBox>
