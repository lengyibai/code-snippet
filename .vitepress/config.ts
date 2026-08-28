import { defineConfig } from "vitepress";

import { nav } from "./bars/nav";
import { sidebar } from "./bars/sidebar";

const tokenizeSearchText = (text: string): string[] => {
  const normalizedText = text.toLocaleLowerCase("zh-CN");
  const identifiers = normalizedText.match(/[a-z0-9_]+/g) ?? [];

  if (typeof Intl.Segmenter === "undefined") {
    return [...new Set([...identifiers, ...normalizedText.split(/\s+/)])];
  }

  const words = [...new Intl.Segmenter("zh-CN", { granularity: "word" }).segment(normalizedText)]
    .filter(({ isWordLike }) => isWordLike)
    .map(({ segment }) => segment);

  return [...new Set([...identifiers, ...words])];
};

const config = defineConfig({
  base: "/lib/",
  lang: "zh-CN",
  title: "Lib代码片段",
  description: "收集项目中常用的 JavaScript 方法、Vue 组件和 CSS 动画。",
  lastUpdated: true,
  metaChunk: true,

  head: [["link", { rel: "icon", type: "image/png", href: "/lib/images/logo.png" }]],
  themeConfig: {
    siteTitle: "Lib",
    logo: "/images/logo.png",
    outline: {
      level: [2, 3],
      label: "本页目录",
    },
    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色主题",
    darkModeSwitchTitle: "切换到深色主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    skipToContentLabel: "跳至正文",
    externalLinkIcon: true,
    search: {
      provider: "local",
      options: {
        detailedView: "auto",
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            displayDetails: "显示详细结果",
            resetButtonTitle: "清除查询条件",
            backButtonTitle: "关闭搜索",
            noResultsText: "未找到相关结果",
            footer: {
              selectText: "选择",
              selectKeyAriaLabel: "回车",
              navigateText: "切换",
              navigateUpKeyAriaLabel: "向上",
              navigateDownKeyAriaLabel: "向下",
              closeText: "关闭",
              closeKeyAriaLabel: "Esc",
            },
          },
        },
        miniSearch: {
          options: {
            tokenize: tokenizeSearchText,
          },
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 },
          },
        },
      },
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lengyibai/code-snippet",
      },
    ],
    nav,
    sidebar,
    editLink: {
      pattern: "https://github.com/lengyibai/code-snippet/edit/master/:path",
      text: "在 GitHub 上编辑此页面",
    },
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2022-${new Date().getFullYear()} 冷弋白`,
    },
  },
});

export default config;
