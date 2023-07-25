<template>
  <div
    class="LibVideo"
    :class="{ fullScreen: is_fill }"
    ref="LibVideo"
    @mousemove="showToolbar"
    @mouseleave="show_toolbar = false"
    @click="playPause"
  >
    <video ref="video" :src="url" :muted="is_mute"></video>
    <!-- 播放栏目 -->
    <transition name="fade">
      <div class="toolbar" :class="{ hidden: !show_toolbar }">
        <!-- 进度条 -->
        <div class="bar" ref="bar">
          <!-- 播放进度条 -->
          <LibRange
            v-model="progress_play"
            v-if="video"
            :text="$fmtSec(video.currentTime)[3]"
            :showDot="show_toolbar"
            :step="0.001"
            @mousedown="handleLibRange('down')"
            @mouseup="handleLibRange('up')"
          />
        </div>
        <!-- 工具栏 -->
        <div class="options" @mouseenter="enter_toolbar = true" @mouseleave="enter_toolbar = false">
          <!-- 左侧 -->
          <div class="left">
            <span class="time" v-if="is_ready">
              {{ $fmtSec(video!.currentTime)[3] }} /
              {{ $fmtSec(video!.duration)[3] }}
            </span>
            <span class="time" v-else>00:00:00 / 00:00:00</span>
          </div>
          <!-- 中间 -->
          <div class="center">
            <img class="play-pause" :src="is_play ? playSvg : pauseSvg" />
          </div>
          <!-- 右侧 -->
          <div class="right">
            <!-- 音量 -->
            <div class="volume" @mouseenter="volumeEnter" @mouseleave="volumeLeave">
              <img @click="volume" :src="is_mute ? volume_disableSvg : volumeSvg" alt="" />
              <transition name="fade">
                <div class="volume-box" v-show="show_volume && !is_mute" ref="volumeBox">
                  <div class="box">
                    <span>{{ (progress_volume * 100).toFixed(0) }}</span>

                    <LibRange
                      v-model="progress_volume"
                      class="LibRange-volume"
                      :size="15"
                      :showNum="false"
                      :step="0.01"
                    />
                  </div>
                </div>
              </transition>
            </div>
            <!-- 控制全屏 -->
            <img @click="fullScreen" class="full-screen" :src="is_fill ? full_screen_exitSvg : full_sreenSvg" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import LibRange from './childComp/LibRange/index.vue';

/* 图标 */
import playSvg from './svg/play.svg';
import pauseSvg from './svg/pause.svg';
import volume_disableSvg from './svg/volume_disable.svg';
import volumeSvg from './svg/volume.svg';
import full_screen_exitSvg from './svg/full_screen_exit.svg';
import full_sreenSvg from './svg/full_sreen.svg';

interface Props {
  url?: string;
}
withDefaults(defineProps<Props>(), {
  url: '',
});

const video = ref<HTMLVideoElement>();
const timer = ref<any>(null); //更新播放进度
const allow_drag = ref(false); //解决侦听器自动触发滑动条导致视频减慢
const is_fill = ref(false); //控制全屏
const is_mute = ref(true); //是否静音
const is_play = ref(false); //控制播放
const is_ready = ref(false); //视频是否加载完成
const progress_play = ref(0); //播放进度
const progress_volume = ref(1); //音量条
const enter_toolbar = ref(false); //是否悬浮在了工具栏
const show_toolbar = ref(false); //显示工具栏
const show_volume = ref(false); //显示音量条

/* 如果全屏模式下一秒未动，则隐藏工具栏 */
const $debounceDelay = (() => {
  let timer: any = 0;
  return (callback = () => {}, wait = 800) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
})();
const debounce = () => {
  $debounceDelay(() => {
    //如果悬浮在了工具栏，则不隐藏
    if (allow_drag.value) return;
    show_toolbar.value = enter_toolbar.value;
  }, 500);
};

/* 拖动播放条时触发 */
watch(progress_play, (v) => {
  if (!allow_drag) return;
  video.value!.currentTime = v * video.value!.duration;
});

/* 拖动音量条时触发 */
watch(progress_volume, (v) => {
  video.value!.volume = v;
});

onMounted(() => {
  /* 判断视频是否加载完毕 */
  let timer: any = null;
  timer = setInterval(() => {
    if (video.value?.readyState) {
      is_ready.value = true;
      clearInterval(timer);
    }
  }, 1000);
});

/* 秒数格式化 */
const $fmtSec = (seconds: number): any => {
  let hour = (
    Math.floor(seconds / 3600) >= 10 ? Math.floor(seconds / 3600) : `0${Math.floor(seconds / 3600)}`
  ) as number;
  seconds -= 3600 * hour;
  let min = (Math.floor(seconds / 60) >= 10 ? Math.floor(seconds / 60) : `0${Math.floor(seconds / 60)}`) as number;
  seconds -= 60 * min;
  seconds = Math.ceil(seconds);
  let sec = seconds >= 10 ? seconds : `0${seconds}`;
  return [hour, min, sec, `${hour}:${min}:${sec}`];
};

/* 开启全屏显示 */
const $isFull = () => {
  const docElm = document.documentElement;
  docElm.requestFullscreen();
};

/* 关闭全屏显示 */
const $noFull = () => {
  document.exitFullscreen();
};

/* 显示工具栏 */
const showToolbar = () => {
  show_toolbar.value = true;
  if (!is_fill.value || enter_toolbar.value) return;
  debounce();
};
/* 控制视频播放 */
const play = () => {
  video.value!.play();
  timer.value = setInterval(() => {
    if (video.value!.ended) {
      is_play.value = false;
      clearInterval(timer.value);
    }
    progress_play.value = parseFloat((video.value!.currentTime / video.value!.duration).toFixed(4));
  }, 1000);
};
/* 暂停视频 */
const pause = () => {
  clearInterval(timer.value);
  video.value!.pause();
};
/* 控制播放/暂停 */
const playPause = (e: Event) => {
  const el = e.target as HTMLElement;
  if (el.tagName !== 'VIDEO' && el.className !== 'play-pause') return;
  is_play.value = !is_play.value;
  if (is_play.value) {
    play();
  } else {
    pause();
  }
};

/* 按住播放条 */
const handleLibRange = (flag: string) => {
  if (flag === 'down') {
    pause();
    allow_drag.value = true;
  } else if (flag === 'up') {
    allow_drag.value = false;
    if (!is_play.value) return;
    play();
  }
};

/* 控制静音 */
const volume = () => {
  is_mute.value = !is_mute.value;
  if (is_mute.value) {
    video.value!.volume = 0;
  } else {
    video.value!.volume = progress_volume.value;
  }
};

/* 悬浮在喇叭上 */
const volumeEnter = () => {
  show_volume.value = true;
};

/* 从喇叭离开 */
const volumeLeave = () => {
  show_volume.value = false;
};

/* 控制全屏 */
const fullScreen = () => {
  is_fill.value = !is_fill.value;
  if (is_fill.value) {
    $isFull();
  } else {
    $noFull();
  }
};
</script>
<style scoped lang="less">
.LibVideo {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .toolbar {
    position: absolute;
    width: 100%;
    height: 75px;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.25);
    transition: transform 0.5s;
    .bar {
      position: relative;
      top: 0;
      width: 100%;
      height: 3px;
      transition: height 0.25s;
      background-color: #ddd;
      .bar-inside {
        position: absolute;
        width: 0%;
        height: 100%;
        transition: width 0.25s;
        background-color: var(--blue);
      }
    }
    .options {
      .flex {
        flex: 1;
        display: flex;
        align-items: center;
      }
      .icon {
        width: 35px;
        height: 35px;
        cursor: pointer;
      }
      width: 100%;
      height: 100%;
      display: flex;
      align-items: stretch;
      background-color: rgba(0, 0, 0, 0.25);
      .left {
        .flex();
        .time {
          margin-left: 1em;
          color: #fff;
          font-size: 20px;
        }
      }
      .center {
        .flex();
        .play-pause {
          .icon();
        }
        justify-content: center;
      }
      .right {
        .flex();
        @right: 15px;
        justify-content: flex-end;
        padding-right: @right;
        .volume {
          position: relative;
          .icon();
          margin-right: @right;
          img {
            .icon();
          }
          .volume-box {
            position: absolute;
            top: 0;
            right: 5px;
            transform: translateY(-100%);
            width: 100%;
            height: 175px;
            padding-bottom: 25px;
            .box {
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.75);
              border-radius: 5px;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 15px 20px;
              span {
                color: #fff;
                font-size: 16px;
              }
              .LibRange-volume {
                width: 85px;
                margin-top: 15px;
                transform: translateY(35px) rotate(-90deg);
              }
            }
          }
        }
        .full-screen {
          .icon();
        }
      }
    }
  }
}
/* 收起播放栏 */
.hidden {
  transform: translateY(calc(100% - 3px));
}

/* 全屏播放 */
.fullScreen {
  position: fixed !important;
  inset: 0;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 999;
}

/* 淡入淡出 */
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
</style>
