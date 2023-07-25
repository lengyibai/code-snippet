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
    padding: 0 !important;
    border: 1px solid #000 !important;
    input {
      border: none !important;
      border-bottom: 1px solid #000 !important;
    }
  }
}

tr {
  background-color: transparent !important;
  border: none !important;
}
</style>
