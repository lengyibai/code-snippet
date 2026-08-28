import type { DefaultTheme } from "vitepress";

interface ToolCategory {
  text: string;
  page: string;
  methods: readonly string[];
}

const toolCategories = [
  {
    text: "Base 基础",
    page: "Base",
    methods: [
      "LibJsGetDataType-数据类型",
      "LibJsIsNull-是否为空值",
      "LibJsPromiseTimeout-延时执行",
      "LibJsResizeWatcher-窗口监听",
    ],
  },
  {
    text: "Browser 浏览器",
    page: "Browser",
    methods: [
      "LibJsColorConsole-有色打印",
      "LibJsCopy-复制文本到剪贴板",
      "LibJsGetRowValue-按点路径获取对象值",
      "LibJsIsMobile-判断手机",
      "LibJsIsPad-判断平板",
      "LibJsObjToUrlParams-对象转Url参数",
      "LibJsParseQueryString-URL参数转对象",
      "LibJsPathParams-地址栏参数",
      "LibJsSetTitleIcon-网站标题图标",
      "LibJsTagTitleTip-网站标题交互",
    ],
  },
  {
    text: "Data 数据",
    page: "Data",
    methods: [
      "LibJsChunkArray-数组拆分",
      "LibJsDeepJSONParse-深度解析JSON",
      "LibJsGroupArrayByKey-分类汇总",
      "LibJsMatchEmail-匹配E-Mail",
      "LibJsPinyinSearch-拼音模糊搜索",
      "libJsPickUnique-随机选择未使用元素",
      "LibJsShuffleArray-数组乱序",
      "LibJsStepArray-数组偏移",
      "LibReverseArrayFromIndex-数组定位翻转",
    ],
  },
  {
    text: "File 文件",
    page: "File",
    methods: [
      "LibJsDownloadImageLink-图片下载",
      "LibJsImageOptimizer-图片压缩",
      "LibJsSaveJson-保存文件",
    ],
  },
  {
    text: "Formatter 格式化",
    page: "Formatter",
    methods: [
      "LibJsFormatterByte-字节格式化",
      "LibJsMaskPhoneNumber-隐藏手机号码",
      "LibJsNumberUnit-数字单位",
      "LibJsNumComma-数字逗号",
      "LibJsSecondsFormatterChinese-中文时间",
    ],
  },
  {
    text: "Math 数学",
    page: "Math",
    methods: [
      "LibJsCalculateExpression-表达式字符串",
      "LibJsConvertAngle-角弧度互转",
      "LibJsCoordsAngle-两点角度",
      "LibJsCoordsDistance-两点距离",
      "LibJsDecimal-高精度计算",
      "LibJsLerp-线性插值",
      "LibJsNormalizeInRange-范围归一化",
      "LibJsPiecewiseLerp-分段线性插值",
    ],
  },
  {
    text: "Misc 杂项",
    page: "Misc",
    methods: [
      "LibJsClassObservable-类属性监听器",
      "LibJsEmitter-事件发射器",
      "LibJsEmitterClose-一次性关闭监听",
      "LibJsHorizontal-游戏横版状态",
      "LibJsNumberStepper-数字步进器",
      "LibJsDiffObject-筛出已修改的值",
      "LibJsPruneEmpty-对象属性去空值",
      "LibJsPullUpLoad-上拉加载",
      "LibJsRegFormValidate-表单验证",
      "LibJsRetryRequest-请求重连",
    ],
  },
  {
    text: "Random 随机",
    page: "Random",
    methods: [
      "LibJsProbabilityResult-概率触发",
      "LibJsRandom-随机数",
      "LibJsRandomColor-随机色",
      "LibJsUniqueRandomNumbers-随机数数组",
    ],
  },
  {
    text: "Time 时间",
    page: "Time",
    methods: [
      "LibJsCountdown-倒计时",
      "LibJsSameTimeCheck-时间比对",
      "LibJsTimeAgo-中文时间差",
      "LibJsTimeGreeting-时间问候",
    ],
  },
] satisfies readonly ToolCategory[];

function createToolCategory(category: ToolCategory): DefaultTheme.SidebarItem {
  return {
    text: category.text,
    link: `/${category.page}`,
    collapsed: true,
    items: category.methods.map((heading) => ({
      text: heading.replace("-", " "),
      link: `/${category.page}#${encodeURI(heading.toLocaleLowerCase("zh-CN"))}`,
    })),
  };
}

/**
 * 侧边栏模块
 *
 * 详情参考：https://vitepress.vuejs.org/guide/theme-sidebar
 */
export const sidebar: DefaultTheme.Sidebar = {
  "/docs/Tool/": {
    base: "/docs/Tool",
    items: Tools(),
  },
};

function Tools(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "开始",
      items: [{ text: "lyb-js", link: "/index" }],
    },
    {
      text: "工具分类",
      items: toolCategories.map(createToolCategory),
    },
  ];
}
