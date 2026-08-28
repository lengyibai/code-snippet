import type { DefaultTheme } from "vitepress";

/**
 * 侧边栏模块
 *
 * 详情参考：https://vitepress.vuejs.org/guide/theme-sidebar
 */
export const sidebar: DefaultTheme.Sidebar = {
  "/docs/Components/": {
    base: "/docs/Components",
    items: Components(),
  },
  "/docs/Animates/": {
    base: "/docs/Animates",
    items: Animates(),
  },
};

function Components(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "开发指南",
      items: [{ text: "介绍", link: "/base/introduce" }],
    },
    {
      text: "静态组件",
      items: [
        { text: "条纹加载按钮", link: "/statics/StripeBtn" },
        { text: "放射点击效果", link: "/statics/TriggerRay" },
        { text: "Grid数字模板布局", link: "/statics/GridNumber" },
        { text: "Grid字母模板布局", link: "/statics/GridLetter" },
        { text: "卡片翻转", link: "/statics/FlipBox" },
        { text: "移动端提示横屏浏览", link: "/statics/PhoneTip" },
        { text: "全屏滚动", link: "/statics/FullScroll" },
        { text: "环形进度条", link: "/statics/CircularProgress" },
      ],
    },
  ];
}

function Animates(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "基础",
      items: [
        { text: "TV", link: "/TV" },
        { text: "圆", link: "/Round" },
        { text: "旋", link: "/Spin" },
        { text: "掀", link: "/Burqas" },
        { text: "折", link: "/Fold" },
        { text: "展", link: "/Deploy" },
      ],
    },
  ];
}
