<template>
  <div class="lib-upload-multiple">
    <div class="index">
      <transition-group name="del">
        <!-- 图片列表 -->
        <div
          class="imgBox"
          v-for="(item, index) in fileList"
          @mouseenter="show(index)"
          @mouseleave="currrentIndex = null"
          @touchstart="show(index)"
          @touchend="currrentIndex = null"
          :key="item.id"
        >
          <!-- 进度蒙版 -->
          <div v-if="!readOnly" class="mask" :style="{ height: item.pre == 0 ? '100%' : item.pre }">
            <span v-if="!item.isFinish">
              {{
                item.pre === 0
                  ? item.isUpload === true
                    ? '排队中'
                    : item.isFail
                    ? '上传失败'
                    : '待上传'
                  : item.pre == '100%'
                  ? '等待响应'
                  : item.pre
              }}
            </span>
            <marquee v-if="!item.isUploading && !readOnly">{{ item.fileName }}</marquee>
            <span v-if="!item.isUploading">{{ typeof item.size == 'string' ? item.size : item.size[2] }}</span>
          </div>
          <!-- 右上角上传完成 -->
          <div
            class="finish"
            :class="{ failBgc: !item.isFinish }"
            v-show="item.isFinish || item.isFail"
            v-if="!readOnly"
          >
            <LibIcon
              style="transform: rotate(-45deg)"
              :imgUrl="item.isFinish ? finishSvg : failSvg"
              size="12px"
              bottom="3px"
            />
          </div>
          <!-- 图片 -->
          <img :src="item.src" />
          <!-- 操作按钮 -->
          <div class="operation" v-show="currrentIndex === index">
            <img v-if="!readOnly" src="./img/del.svg" @click="delImg(index)" alt="删除" />
            <img src="./img/show.svg" @click="preview(index)" alt="查看" />
          </div>
        </div>

        <!-- 添加图片 -->
        <div class="box1" key="a">
          <input
            v-if="!readOnly"
            type="file"
            ref="file"
            :id="id"
            style="display: none"
            @change="filePreview()"
            :multiple="multiple"
            accep="image"
            :value="[]"
          />
          <label :for="id" v-show="select_show || multiple">
            <div
              v-if="!readOnly"
              class="select"
              :class="{ disabled: readOnly, dragActive: drag_active }"
              @dragover="dragover"
              @drop="drop"
              @dragleave="dragleave"
            ></div>
          </label>
        </div>
      </transition-group>
    </div>
    <transition name="show">
      <div
        class="maskImg"
        v-show="is_show_big_img"
        @click="is_show_big_img = false"
        :style="{ backgroundImage: 'url(' + preview_img + ')' }"
      ></div>
    </transition>
  </div>
</template>
<script>
import LibIcon from './childComp/LibIcon/index.vue';
import axios from 'axios';
import { $getFileSuf, $fmtByte, $urlFileType } from './lib.js';
/* 图标相关 */
import finishSvg from './img/finish.svg';
import failSvg from './img/fail.svg';

/* 文件图标 */
import compressSvg from './icon/compress.svg';
import excelSvg from './icon/excel.svg';
import musicSvg from './icon/music.svg';
import pdfSvg from './icon/pdf.svg';
import pptSvg from './icon/ppt.svg';
import softwareSvg from './icon/software.svg';
import txtSvg from './icon/txt.svg';
import unknownSvg from './icon/unknown.svg';
import videoSvg from './icon/video.svg';
import wordSvg from './icon/word.svg';

export default {
  name: 'LibUploadFile',
  props: {
    files: {
      type: Array,
      default() {
        return [];
      },
    },
    /* 当一个页面使用多个当前组件时，需要传id进行区分文本域 */
    id: {
      type: String,
      default: 'select',
    },
    /* 域名 */
    url: {
      type: String,
      default: '',
    },
    /* 头部信息 */
    headers: {
      type: Object,
      default() {
        return {};
      },
    },
    /* 是否支持多选 */
    multiple: {
      type: Boolean,
      default: true,
    },
    /* 单个文件限制大小 */
    size: {
      type: Number,
      default: 0,
    },
    /* 只能上传什么类型的文件，可传递字符串和数组，字符串只能传递image或video，代表只能上图片或视频，传递数组则只能上传只能后缀的文件，数组内为文件后缀名 */
    suffix: {
      type: [String, Array, Boolean],
      default() {
        return false;
      },
    },
    /* 是否禁用 */
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    this.finishSvg = finishSvg;
    this.failSvg = failSvg;
    return {
      preview_img: '', //预览的图片
      fileList: [], //组件的文件列表
      virtual_files: [], //虚拟文件列表(与真实数据的数据同步)
      currrentIndex: null,
      select_show: true, //显示选择文件图标
      is_show_big_img: false, //显示图片预览
      drag_active: false, //是否进入拖拽范围
    };
  },
  components: { LibIcon },
  computed: {
    //#####··········根据传入的文件后缀，匹配图标文件名··········#####//
    fileIcon() {
      return function (suffix) {
        let img = 'jpg,jpeg,png,gif,svg',
          music = 'mp3,ogg',
          video = 'mp4',
          txt = 'txt',
          pdf = 'pdf',
          word = 'doc,docx',
          excel = 'xls,xlsx',
          ppt = 'ppt,pptx',
          compress = 'zip,7z',
          software = 'exe,apk';
        if (img.includes(suffix)) return 'img';
        if (compress.includes(suffix)) return 'compress';
        if (excel.includes(suffix)) return 'excel';
        if (music.includes(suffix)) return 'music';
        if (pdf.includes(suffix)) return 'pdf';
        if (ppt.includes(suffix)) return 'ppt';
        if (software.includes(suffix)) return 'software';
        if (txt.includes(suffix)) return 'txt';
        if (video.includes(suffix)) return 'video';
        if (word.includes(suffix)) return 'word';
        return 'unknown';
      };
    },

    //#####··········文件列表是否存在上传成功的文件··········#####//
    existFinish() {
      return this.fileList.some((item) => {
        return item.isFinish;
      });
    },
  },
  created() {
    this.virtual_files = this.files;
    /* 将传入的文件添加预览 */
    this.files.forEach((item) => {
      this.fileList.push({
        id: this.fileList.length + new Date().getTime(), //文件 id
        fileName: item.fileName, //文件名称
        size: '云端', //文件大小
        src: item.src, //用于图标显示
        time: new Date().getTime(), //上传时间
        pre: '100%', //上传进度
        isUpload: 1, //是否加入了上传队列
        isUploading: false, //是否处于上传中
        isFinish: true, //是否已经上传完成
        isFail: false, //是否已传失败
        cancel: null, //取消请求
        file: item, //初始文件信息，用于传给后端，以上为预览文件及上传功能使用
      });
    });
    /* 判断是否传入了文件，单选情况下会隐藏选择图标 */
    this.select_show = this.files.length === 0;
  },
  methods: {
    //#####··········拖拽进入··········#####//
    dragover(e) {
      this.drag_active = true;
      e.preventDefault();
    },

    //#####··········结束拖拽··········#####//
    drop(e) {
      this.drag_active = false;
      e.preventDefault();
      let file = [...e.dataTransfer.items].map((item) => {
        if (item.kind === 'file') {
          return item.getAsFile();
        }
      });
      if (file.length > 1) {
        if (this.multiple) {
          this.filePreview(file);
        } else {
          alert('只能选择一个文件');
        }
      } else {
        this.filePreview(file);
      }
    },

    //#####··········拖拽离开··········#####//
    dragleave() {
      this.drag_active = false;
    },

    //#####··········显示对图片进行的操作··········#####//
    show(id) {
      this.currrentIndex = id;
    },

    //#####··········预览图片··········#####//
    preview(index) {
      this.preview_img = this.fileList[index].src;
      this.is_show_big_img = true;
    },

    //#####··········删除图片··········#####//
    delImg(index = this.fileList.length - 1) {
      //删除预览文件
      if (!confirm('确认删除？')) return;
      //用于单选文件，隐藏文件选择图标
      this.select_show = true;
      //取消上传请求
      this.fileList[index].cancel && this.fileList[index].cancel();
      this.currrentIndex = null; //标识符重置
      if (!this.fileList[index].isFinish) {
        this.fileList.splice(index, 1); //删除文件
        return;
      }
      this.fileList.splice(index, 1); //删除文件
      this.virtual_files.splice(index, 1);
      this.$emit('update:files', this.virtual_files);
      this.$emit('del', index);
    },

    //#####··········文件选择完成后触发··········#####//
    filePreview(file = false) {
      //获取文件列表
      const fileList = file || this.$refs.file.files;
      //统计后缀名不符合要求的
      let failFiles_suffix = [];
      //统计大小不符合要求的
      let failFiles_size = [];
      //统计通过的
      let failFiles_suffix_pass = [];
      //通过的
      let files = [];

      /* 文件类型验证 */
      [...fileList].forEach((item) => {
        //是否需要判断后缀
        if (this.suffix) {
          //判断文件后缀是否符合条件
          if ($urlFileType(item.name, this.suffix)) {
            failFiles_suffix_pass.push(item);
          } else {
            failFiles_suffix.push(item.name);
          }
        } else {
          failFiles_suffix_pass.push(item);
        }
      });
      // 如果存在后缀不通过，则提示
      if (failFiles_suffix.length) {
        alert(`只能上传${this.suffix.join('、')}类型的文件，以下文件上传失败：\n${failFiles_suffix.join('\n')}`);
        failFiles_suffix = [];
      }
      // 二次验证：验证文件大小
      [...failFiles_suffix_pass].forEach((item) => {
        if (item.size > this.size * 1024 * 1024 && this.size !== 0) {
          failFiles_size.push(item.name);
        } else {
          files.push(item);
        }
      });
      //如果存在大小不通过，则提示
      if (failFiles_size.length) {
        alert(`只能上传小于等于${this.size}MB的文件，以下文件上传失败：\n${failFiles_size.join('\n')}`);
        failFiles_size = [];
        failFiles_suffix_pass = [];
      }
      //用于匹配图标
      let icon = {
        compress: compressSvg,
        excel: excelSvg,
        music: musicSvg,
        pdf: pdfSvg,
        ppt: pptSvg,
        software: softwareSvg,
        txt: txtSvg,
        unknown: unknownSvg,
        video: videoSvg,
        word: wordSvg,
      };

      //通过循环，给文件对象添加相应属性（当前fileList不是一个真实数组，通过扩展运算符转换）
      [...fileList].forEach((item) => {
        if (
          (item.size > this.size * 1024 * 1024 && this.size !== 0) ||
          (this.suffix && !$urlFileType(item.name, this.suffix))
        )
          return;
        this.select_show = false;
        //通过获取文件后缀判断文件类型
        let type = this.fileIcon($getFileSuf(item.name));
        //将文件主要信息单独存储
        this.fileList.push({
          id: this.fileList.length + new Date().getTime(), //文件 id
          fileName: item.name, //文件名称
          size: $fmtByte(item.size), //文件大小
          src: type == 'img' ? window.URL.createObjectURL(item) : icon[type], //用于图标显示
          time: new Date().getTime(), //上传时间
          pre: 0, //上传进度
          isUpload: false, //是否加入了上传队列
          isUploading: false, //是否处于上传中
          isFinish: false, //是否已经上传完成
          isFail: false, //是否已传失败
          cancel: null, //取消请求
          file: item, //初始文件信息，用于传给后端，以上为预览文件及上传功能使用
        });
      });
      if (
        this.fileList.some((item) => {
          return item.isUploading;
        })
      )
        return;
      this.uploadClick();
      /* 文件上传后清除输入框值，可重复上传 */
      this.$refs.file.value = '';
    },

    //#####··········点击开始上传后触发··········#####//
    async uploadClick() {
      //加入上传队列 (只有还未上传过的才能上传)
      this.fileList.forEach((item) => {
        if (item.isUpload === false) item.isUpload = true;
      });

      //同时满足不是上传失败的、不是上传成功的、不是正在上传的文件才可以进行上传

      while (
        this.fileList.some((item) => {
          return item.isUpload !== 1;
        })
      ) {
        //查找符合条件的文件进行上传
        let file = this.fileList.find((item) => {
          return item.isUpload !== 1;
        });

        //调用处理上传的函数
        await this.uploadFile(file);
      }
    },

    //#####··········上传文件接口··········#####//
    uploadFile(file) {
      const that = this;
      return new Promise((resolve) => {
        file.isUploading = true; //处于上传中
        //用于后端
        const data = new FormData();
        data.append('file', file.file);
        //#调用接口
        axios
          .post(
            this.url,
            //设置添加的数据
            data,
            {
              headers: this.headers,

              //获取上传进度
              onUploadProgress(pre) {
                let progress = Math.round((pre.loaded / pre.total) * 100);
                file.pre = progress + '%';
                that.$emit('progress', progress);
              },

              //设置取消请求
              cancelToken: new axios.CancelToken((c) => {
                //调用指定文件的 cancel 函数则取消那个文件的上传请求
                file.cancel = c;
              }),
            }
          )
          .then((res) => {
            this.virtual_files.push({
              fileName: file.fileName,
              src: '来这里改成后端文件链接地址字段，如res.data.data.src',
            }); //将后端返回的文件链接追加进数组
            this.$emit('update:files', this.virtual_files);
            this.$emit('success', res);
            resolve(res);
            file.cancel = null; //删除取消请求函数
            file.isFinish = true; //上传成功
            file.isUpload = 1; //退出上传队列
            file.isUploading = false; //非上传中
          })
          .catch((err) => {
            resolve(err.message === 'canceled' ? '取消上传' : '上传失败');
            err.message === 'canceled' ? this.$emit('cancel') : this.$emit('fail');
            file.cancel = null; //删除取消请求函数
            file.isFail = true; //上传失败
            file.isUpload = 1; //退出上传队列
            file.isUploading = false; //非上传中
            file.pre = 0; //进度为0
          });
      });
    },
    //#####··········清空列表··········#####//
    clear() {
      this.fileList.forEach((item) => {
        item.cancel && item.cancel();
      });
      this.fileList = [];
      this.select_show = true;
      this.virtual_files = [];
      this.$emit('update:files', []);
    },
  },
};
</script>
<style lang="less" scoped>
.lib-upload-multiple,
.index {
  display: flex;
  flex-wrap: wrap;
  .imgBox {
    width: 100px;
    height: 100px;
    position: relative;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    margin: 0 5px 5px 0;
    overflow: hidden;
    border: 2px solid #ddd;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .mask {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.582);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      overflow: hidden;
      span {
        width: 90%;
        text-align: center;
        &:nth-of-type(1) {
          color: #fff;
          font-size: 16px;
        }
        &:nth-of-type(2) {
          color: #ccc;
          font-size: 14px;
        }
      }
      marquee {
        display: flex;
        align-items: center;
      }
    }
    .finish {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      right: -17px;
      top: -7px;
      width: 46px;
      height: 26px;
      background-color: #13ce66;
      transform: rotate(45deg);
    }
    .operation {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.75);
      img {
        cursor: pointer;
        width: 25px;
        height: 25px;
      }
    }
  }

  .box1 {
    flex-shrink: 0;
    .select {
      width: 100px;
      height: 100px;
      border: 2px dashed #ccc;
      background: no-repeat url('./img/add.svg') center;
      background-size: 25%;
      transition: all 0.25s;
      &:hover {
        border-style: solid;
      }
      &:active {
        transition: all 0s;
        background-color: rgba(204, 204, 204, 0.226);
      }
    }
  }

  .maskImg {
    position: fixed;
    inset: 0;
    background: no-repeat center center;
    background-color: rgba(0, 0, 0, 0.75);
    background-size: contain;
    z-index: 999;
  }
}

.disabled {
  cursor: not-allowed;
}

.dragActive {
  border-radius: 50%;
}

.failFc {
  color: #ff4040 !important;
}
.failBgc {
  background-color: #ce1313 !important;
}

/* 列表进入和删除动画 */
.del-enter {
  transform: rotate(360deg) scale(0);
  opacity: 0;
}
.del-leave-active {
  margin: 0 !important;
  padding: 0 !important;
  width: 0 !important;
  transform: rotate(-360deg) scaleY(0);
  overflow: hidden;
}

.del-enter-active,
.del-leave-active {
  transition: all 0.5s;
}

/* 列表进入和删除动画 */
.show-enter-from {
  opacity: 0;
}
.show-leave-active {
  opacity: 0;
  overflow: hidden;
}

.show-enter-active,
.show-leave-active {
  transition: all 0.5s;
}
</style>
