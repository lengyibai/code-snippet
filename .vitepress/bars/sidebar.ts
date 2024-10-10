import type { DefaultTheme } from "vitepress";

/**
 * 侧边栏模块
 *
 * 详情参考：https://vitepress.vuejs.org/guide/theme-sidebar
 */
export const sidebar = {
  "/docs/Components/": {
    base: "/docs/Components",
    items: Components(),
  },
  "/docs/Directives/": {
    base: "/docs/Directives",
    items: Directives(),
  },
  "/docs/Functions/": {
    base: "/docs/Functions",
    items: Functions(),
  },
  "/docs/Styles/": {
    base: "/docs/Styles",
    items: Styles(),
  },
  "/docs/Animates/": {
    base: "/docs/Animates",
    items: Animates(),
  },
};

function Functions(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "基础",
      items: [
        { text: "返回数据类型", link: "/Type" },
        { text: "随机数", link: "/Random" },
        { text: "随机整数数组", link: "/GetUniqueRandomNumbers" },
        { text: "获取概率结果", link: "/ProbabilityResult" },
        { text: "字符串去重", link: "/StrDelRep" },
        { text: "数组深度去重", link: "/ArrDelRep" },
        { text: "对象深度去重", link: "/ObjDelRep" },
        {
          text: "获取浏览器内核版本",
          link: "/BrowserV",
        },
        { text: "判断是否为移动端", link: "/IsPhone" },
        { text: "判断当前设备类型", link: "/IsDevice" },
        { text: "Promise定时器", link: "/PromiseTimeout" },
        { text: "可控延迟调用函数", link: "/ControlledDelayedCall" },
        { text: "数组乱序", link: "/ShuffleArray" },
        { text: "浏览器标签标题交互", link: "/TagTitleTip" },
        { text: "时间前缀彩色console", link: "/ColorConsole" },
        { text: "获取地址栏参数", link: "/GetPathParams" },
        { text: "对象深度JSON.parse", link: "/DeepJsonParse" },
        { text: "旋转数组元素", link: "/RotateArray" },
        { text: "设置网站标题及图标", link: "/SetTitleIcon" },
      ],
    },
    {
      text: "格式化",
      items: [
        { text: "数字每三位加逗号", link: "/FmtNum" },
        { text: "手机号脱敏处理", link: "/HideMobile" },
        { text: "全局替换指定字符串", link: "/RepStr" },
        { text: "字节格式化", link: "/FmtByte" },
        { text: "小数、百分比互转", link: "/PotEoPct" },
        { text: "千位格式化", link: "/FormatKilobitNumber" },
      ],
    },
    {
      text: "数据",
      items: [
        { text: "排序", link: "/TypeSort" },
        { text: "对象深度合并", link: "/DeepMearge" },
        { text: "对象过滤", link: "/RemoveEmptyField" },
        { text: "分类汇总", link: "/GroupArrayByKey" },
        { text: "高级搜索", link: "/Search" },
        { text: "邮箱列表后缀匹配", link: "/MatchEmail" },
      ],
    },
    {
      text: "时间",
      items: [
        { text: "时间差计算", link: "/GetTimeAgo" },
        { text: "同天同周判断", link: "/CheckSameTime" },
        { text: "将秒数格式化成中文", link: "/FormatSecondsToChinese" },
        { text: "根据时间段问候", link: "/TimeGreet" },
      ],
    },
    {
      text: "文件",
      items: [
        { text: "获取文件名", link: "/GetFileName" },
        { text: "保存为json/txt文件", link: "/SaveFile" },
        { text: "计算文件大小", link: "/GetFileSizeInKB" },
        {
          text: "判断是否为指定类型的文件链接",
          link: "/UrlFileType",
        },
        { text: "对象转Excel", link: "/ObjToExc" },
        { text: "Excel转对象", link: "/ExcToObj" },
        { text: "Blob转base64", link: "/BlobTextToBase64" },
        {
          text: "canvas截图",
          link: "/CanvasScreenshot",
        },
        { text: "图片压缩", link: "/ImageOptimizer" },
        { text: "下载图片链接", link: "/DownloadImage" },
      ],
    },
    {
      text: "数学",
      items: [
        { text: "计算两点角度", link: "/GetCoordsAngle" },
        { text: "计算两点距离", link: "/GetCoordsDistance" },
      ],
    },
    {
      text: "元素操作",
      items: [{ text: "抛物线元素", link: "/Parabolic" }],
    },
    {
      text: "其他",
      items: [
        { text: "精确计算", link: "/Decimal" },
        { text: "正则表单验证", link: "/FormValidate" },
        { text: "断线重连", link: "/RetryRequest" },
      ],
    },
  ];
}

function Directives(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "自定义指令",
      items: [
        { text: "水波扩散", link: "/WaveDiffuse" },
        { text: "文字悬浮变色", link: "/TextHoverColor" },
        { text: "打字机(单行)", link: "/TypewriterSingle" },
        { text: "打字机(多行)", link: "/TypewriterMultiple" },
        { text: "卡片扫光", link: "/SweepLight" },
        { text: "文件拖拽解析", link: "/DragFile" },
      ],
    },
  ];
}

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

function Styles(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "基础",
      items: [
        { text: "渐变", link: "/Gradient" },
        { text: "鼠标样式", link: "/Cursor" },
        { text: "文字溢出省略号", link: "/Ellipsis" },
        { text: "遮罩层合集", link: "/MaskCollection" },
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
