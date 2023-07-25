<template>
  <div class="BtnLogin">
    <span>登录</span>
    <span>LOGIN</span>
  </div>
</template>
<style scoped lang="less">
.BtnLogin {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 8vw;
  background: url("./img/login.png") no-repeat center center;
  background-size: 100%;
  transition: all 0.25s;
  filter: contrast(110%) brightness(125%);
  cursor: pointer;
  user-select: none;
  span {
    &:nth-of-type(1) {
      color: #fff;
      font-size: 2.5vw;
      text-shadow: 0px 0px 25px #bf681d;
    }
    &:nth-of-type(2) {
      color: #895c36;
      font-size: 1.5vw;
      letter-spacing: 2px;
      line-height: 1.5vw;
      text-shadow: 0px 0px 5px #8b5e37;
    }
  }
}
</style>
