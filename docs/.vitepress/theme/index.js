import DefaultTheme from 'vitepress/theme';

import './style/index.scss';

import directives from './directives/index';

/* 公共组件 */
import ContainerBox from './components/ContainerBox.vue';
import ShowCode from './components/ShowCode.vue';
import Logo from './components/Logo.vue';
import Home from './components/Home.vue';

const components = {
  ContainerBox,
  ShowCode,
  Logo,
  Home,
};

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key]);
    });
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key]);
    });
  },
};
