import { defineConfig } from "vitepress";
import { nav } from "./utils/nav";
import { sidebar } from "./utils/sidebar";

/**
 * 更多配置项参考：https://vitepress.vuejs.org/config/app-configs.html
 */

const config = defineConfig({
  base: "/lib3.0/",
  title: "Lib",
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: "Lib",
    logo: "https://lengyibai.gitee.io/img-bed/lib.png",
    lastUpdatedText: "最后更新时间",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lengyibai/Lib3.0",
      },
    ],
    nav,
    sidebar,
    editLink: {
      pattern: "https://github.com/lengyibai/Lib3.0/edit/master/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
  },
});

export default config;
