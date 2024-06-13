import type { DefaultTheme } from "vitepress";

/**
 * 侧边栏模块
 *
 * 详情参考：https://vitepress.vuejs.org/guide/theme-sidebar
 */
export const sidebar = {
  "/docs/Components/": {
    base: "/docs/Components/",
    items: Components(),
  },
  "/docs/Directives/": {
    base: "/docs/Directives/",
    items: Directives(),
  },
  "/docs/Functions/": {
    base: "/docs/Functions/",
    items: Functions(),
  },
  "/docs/Styles/": {
    base: "/docs/Styles/",
    items: Styles(),
  },
  "/docs/Animates/": {
    base: "/docs/Animates/",
    items: Animates(),
  },
};

function Components(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "开发指南",
      items: [{ text: "介绍", link: "base/introduce" }],
    },
    {
      text: "静态组件",
      items: [
        { text: "条纹加载按钮", link: "statics/StripeBtn" },
        { text: "放射点击效果", link: "statics/TriggerRay" },
        { text: "Grid数字模板布局", link: "statics/GridNumber" },
        { text: "Grid字母模板布局", link: "statics/GridLetter" },
        { text: "卡片翻转", link: "statics/FlipBox" },
        { text: "移动端提示横屏浏览", link: "statics/PhoneTip" },
        { text: "全屏滚动", link: "statics/FullScroll" },
        { text: "环形进度条", link: "statics/CircularProgress" },
      ],
    },
  ];
}

function Directives(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "自定义指令",
      items: [
        { text: "水波扩散", link: "WaveDiffuse" },
        { text: "文字悬浮变色", link: "TextHoverColor" },
        { text: "打字机(单行)", link: "TypewriterSingle" },
        { text: "打字机(多行)", link: "TypewriterMultiple" },
        { text: "卡片扫光", link: "SweepLight" },
        { text: "文件拖拽解析", link: "DragFile" },
      ],
    },
  ];
}

function Functions(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "基础",
      items: [
        { text: "返回数据类型", link: "ordinary/Type" },
        { text: "随机数", link: "ordinary/Random" },
        { text: "字符串去重", link: "ordinary/StrDelRep" },
        { text: "数组深度去重", link: "ordinary/ArrDelRep" },
        { text: "对象深度去重", link: "ordinary/ObjDelRep" },
        {
          text: "获取浏览器内核版本",
          link: "ordinary/BrowserV",
        },
        { text: "判断是否为移动端", link: "ordinary/IsPhone" },
        { text: "判断当前设备类型", link: "ordinary/IsDevice" },
        { text: "Promise定时器", link: "ordinary/PromiseTimeout" },
      ],
    },
    {
      text: "丰富",
      items: [
        { text: "数字每三位加逗号", link: "custom/FmtNum" },
        { text: "手机号脱敏处理", link: "custom/HideMobile" },
        { text: "根据时间段问候", link: "custom/TimeGreet" },
        { text: "正则搜索", link: "custom/Search" },
        {
          text: "判断是否为指定类型的文件链接",
          link: "custom/UrlFileType",
        },
        { text: "全局替换指定字符串", link: "custom/RepStr" },
        { text: "获取文件名", link: "custom/GetFileName" },
        { text: "排序", link: "custom/TypeSort" },
        { text: "字节格式化", link: "custom/FmtByte" },
        { text: "小数、百分比互转", link: "custom/PotEoPct" },
        { text: "图片压缩", link: "custom/ImageOptimizer" },
        { text: "对象转Excel", link: "custom/ObjToExc" },
        { text: "Excel转对象", link: "custom/ExcToObj" },
        { text: "对象深度合并", link: "custom/DeepMearge" },
        { text: "对象过滤", link: "custom/RemoveEmptyField" },
        { text: "分类汇总", link: "custom/GroupArrayByKey" },
        { text: "保存为json/txt文件", link: "custom/SaveFile" },
        { text: "正则表单验证", link: "custom/FormValidate" },
        {
          text: "canvas截图",
          link: "custom/CanvasScreenshot",
        },
        { text: "断线重连", link: "custom/RetryRequest" },
        { text: "邮箱列表后缀匹配", link: "custom/MatchEmail" },
      ],
    },
    {
      text: "元素",
      items: [{ text: "抛物线元素", link: "element/Parabolic" }],
    },
  ];
}

function Styles(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "基础",
      items: [
        { text: "渐变", link: "Gradient" },
        { text: "鼠标样式", link: "Cursor" },
        { text: "文字溢出省略号", link: "Ellipsis" },
        { text: "遮罩层合集", link: "MaskCollection" },
      ],
    },
  ];
}

function Animates(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "基础",
      items: [
        { text: "TV", link: "TV" },
        { text: "圆", link: "Round" },
        { text: "旋", link: "Spin" },
        { text: "掀", link: "Burqas" },
        { text: "折", link: "Fold" },
        { text: "展", link: "Deploy" },
      ],
    },
  ];
}
