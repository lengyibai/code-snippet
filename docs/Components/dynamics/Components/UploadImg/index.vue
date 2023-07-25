<template>
  <div class="LiBUploadImg">
    <input type="file" id="file" v-show="false" @change="fn" />
    <img class="img" :src="modelValue" v-if="modelValue" />
    <label for="file" v-if="modelValue" class="op">
      <img src="./img/edit.svg" class="edit" alt="" />
    </label>
    <label for="file" class="add" v-if="!modelValue">
      <img src="./img/add.svg" alt="" />
    </label>
  </div>
</template>
<script>
import axios from 'axios';
import test from './img/test.png';
export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
  name: 'LibUploadImg',
  data() {
    return {};
  },
  methods: {
    fn(e) {
      this.$editFile(e)
        .then((res) => {
          console.log(res);
          this.$emit('modelValue', '把我改成后端文件链接地址字段，如res.data.data.src');
          /* 由于没有接口，暂时用以下图片来代替，有借口时请修改 */
        })
        .finally(() => {
          alert('由于没有接口，所以直接替换图片');
          this.$emit('update:modelValue', test);
        });
    },
    $editFile(file, url = this.url) {
      const data = new FormData();
      data.append('file', file.target.files[0]);
      return axios.post(url, data);
    },
  },
};
</script>
<style scoped lang="less">
.LiBUploadImg {
  position: relative;
  width: 100px;
  height: 100px;
  outline: 1px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
  &:hover {
    background-color: rgba(225, 225, 225, 0.25);
  }
  label {
    margin-bottom: 0;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .op {
    position: absolute;
    width: 100%;
    height: 100%;
    &:hover {
      .edit {
        display: block;
      }
    }
    .edit {
      position: absolute;
      display: none;
      width: 100%;
      height: 100%;
      padding: 35px;
      z-index: 2;
      &:hover {
        background-color: rgba(0, 0, 0, 0.25);
      }
    }
  }
  .add {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 35%;
      height: 35%;
    }
  }
}
</style>
