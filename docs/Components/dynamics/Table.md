<script setup>
  import Table from './Components/Table/demo/index.vue'
</script>

# Table

<ContainerBox title="介绍">
<template #desc>
简易的表格组件，满足基本需求
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/dynamic/LibTable.zip)

引入参考 [引入组件](/Components/base/start.html)
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>

数据内携带`bgColor`，可设置表格一行的颜色
</template>

<div class="demoBox">
<Table />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="LibTable">
    <LibTable
      :data="tableData"
      :head="['日期', '姓名', '地址', '操作']"
      :sort="['姓名', '地址']"
      @sortChange="sortChange"
    >
      <template #date>
        <span>时间</span>
      </template>

      <template #name>
        <span>名字</span>
      </template>

      <template v-slot:body="{ data }">
        <TableColumn minWidth="100px">{{ data.date }}</TableColumn>
        <TableColumn minWidth="150px">{{ data.name }}</TableColumn>
        <TableColumn minWidth="150px">{{ data.address }}</TableColumn>
        <TableColumn minWidth="100px">
          <button>冻结</button>
        </TableColumn>
      </template>
    </LibTable>
  </div>
</template>
<script setup>
import LibTable from '../index.vue';
import TableColumn from '../TableColumn/index.vue';

const tableData = [
  {
    id: 1,
    date: '2022-04-22',
    name: '冷弋白',
    address: '四川自贡',
    bgColor: 'rgba(192, 58, 43, 0.1)',
  },
  {
    id: 2,
    date: '2022-04-23',
    name: 'lengyibai',
    address: '四川自贡',
  },
  {
    id: 3,
    date: '2022-04-24',
    name: 'lyb',
    address: '四川成都',
  },
  {
    id: 4,
    date: '2022-04-24',
    name: '张三',
    address: '四川成都',
    bgColor: 'rgba(39, 174, 95, 0.1)',
  },
  {
    id: 5,
    date: '2022-04-24',
    name: '张三',
    address: '四川自贡',
  },
  {
    id: 6,
    date: '2022-04-24',
    name: '张三',
    address: '四川成都',
  },
  {
    id: 7,
    date: '2022-04-24',
    name: '张三',
    address: '四川自贡',
    bgColor: 'rgba(41, 127, 185, 0.1)',
  },
];

const sortChange = (v) => {
  console.warn('排序触发：', v);
};
</script>
<style scoped lang="less">
.LibTable {
  width: 100%;
  overflow: auto;
}
</style>
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Table Props">

<template #desc>

| 参数 | 说明           | 类型  |
| ---- | -------------- | ----- |
| data | 数据           | Array |
| head | 头部名称       | Array |
| sort | 需要排序的名称 | Array |

</template>
</ContainerBox>

<ContainerBox title="Table Events">

<template #desc>

| 参数       | 说明     | 参数               |
| ---------- | -------- | ------------------ |
| sortChange | 排序触发 | ['字段名'，索引号] |

</template>
</ContainerBox>

<ContainerBox title="Table Slots">

<template #desc>

| 参数        | 说明                     | 参数              |
| ----------- | ------------------------ | ----------------- |
| head{index} | 头部插槽，插槽名为字段名 | -                 |
| body        | 必写，表格写入插槽内     | { data } 表格数据 |

</template>
</ContainerBox>

<ContainerBox title="TableColumn Props">

<template #desc>

| 参数     | 说明           | 类型   | 默认值      |
| -------- | -------------- | ------ | ----------- |
| minWidth | 单元格最小宽度 | String | 0（自适应） |
| width    | 当前宽度       | String | -           |

</template>
</ContainerBox>
