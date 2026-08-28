import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";

import "./styles/index.less";

/* 公共组件 */
import ContainerBox from "./components/ContainerBox/index.vue";
import CodeBox from "./components/CodeBox/index.vue";

const components = {
  ContainerBox,
  CodeBox,
} as const;

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp(context) {
    DefaultTheme.enhanceApp?.(context);

    for (const [name, component] of Object.entries(components)) {
      context.app.component(name, component);
    }
  },
};

export default theme;
