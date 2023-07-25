<template>
  <div>
    <slot :text="text" :disabled="disabled"></slot>
  </div>
</template>
<script>
export default {
  name: 'LibValidationCountdown',
  props: {
    time: {
      type: Number,
      default: 60,
    },
  },
  data() {
    return {
      disabled: false,
      text: '获取验证码',
      timer: null,
    };
  },
  mounted() {
    this.$el.children[0].addEventListener('click', () => {
      this.start();
    });
  },
  methods: {
    start() {
      this.$emit('change', false);
      this.disabled = true;
      this.countDown = this.time;
      this.text = `${this.countDown}秒后重新获取`;
      this.timer = setInterval(() => {
        this.countDown--;
        this.text = `${this.countDown}秒后重新获取`;
        if (this.countDown === 0) {
          clearInterval(this.timer);
          this.text = '重新获取验证码';
          this.disabled = false;
          this.$emit('change', true);
        }
      }, 1000);
    },
    //#####··········初始化··········#####//
    clearTimer() {
      clearInterval(this.timer);
      this.disabled = false;
      this.text = '获取验证码';
    },
  },
};
</script>
