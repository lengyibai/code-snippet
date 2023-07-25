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
