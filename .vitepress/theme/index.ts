import DefaultTheme from "vitepress/theme";

import "./styles/index.less";

/* 公共组件 */
import ContainerBox from "./components/ContainerBox/index.vue";
import CodeBox from "./components/CodeBox/index.vue";

const components = {
  ContainerBox,
  CodeBox,
};

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key]);
    });
  },
};
