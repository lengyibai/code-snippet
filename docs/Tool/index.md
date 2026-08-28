# lyb-js

> 当前文档基于 `lyb-js 1.6.41`，由本地工具库 README 一次性迁入。

[npm](https://www.npmjs.com/package/lyb-js) · [GitHub](https://github.com/lengyibai/lyb-js)

## 介绍

`lyb-js` 是一个偏项目实用型的工具集合，覆盖浏览器交互、数据处理、数学计算、时间格式化、随机工具等常见场景。

文档以“快速上手”为目标：

- 先告诉你怎么安装、怎么导入
- 再给每个工具最常用的调用方式
- 示例尽量贴近实际项目，不把文档写成冗长 API 手册

## 安装

```bash
npm install lyb-js
```

```bash
pnpm add lyb-js
```

```bash
yarn add lyb-js
```

## 起步

### 1. 直接导入

当前默认已支持按需导入，不需要手动按分类路径引入或做聚合，直接从 `lyb-js` 引入即可。

```ts
import { libJsGetDataType, libJsCalculateExpression } from "lyb-js";

console.log(libJsGetDataType([1, 2, 3])); // "array"
console.log(libJsCalculateExpression("(1+2)-(3*4)/5")); // 0.6
```

## 使用说明

### 环境说明

- `Browser`、`File` 中的大多数工具依赖 `window`、`document`、`navigator`，适合浏览器环境。
- `Data`、`Formatter`、`Math`、`Random` 中的大多数工具既可在浏览器使用，也可在 Node 环境使用。
- `Time` 分类依赖 `dayjs` 的少量能力，但作为库使用时你只需要正常安装 `lyb-js` 即可。

### 阅读方式

每个工具章节都遵循同一结构：

1. 作用说明
2. 导入方式
3. 1 到 2 个最常见示例

如果你只想找某个工具的导入方式，可以直接看每个章节的第一段代码。

## 工具分类

- [Base-基础](./Base.md)（4 个工具）
- [Browser-浏览器](./Browser.md)（10 个工具）
- [Data-数据](./Data.md)（9 个工具）
- [File-文件](./File.md)（3 个工具）
- [Formatter-格式化](./Formatter.md)（5 个工具）
- [Math-数学](./Math.md)（8 个工具）
- [Misc-杂项](./Misc.md)（10 个工具）
- [Random-随机](./Random.md)（4 个工具）
- [Time-时间](./Time.md)（4 个工具）

## 文档说明

- 文档里的导入路径以 `npm` 目录实际产物为准。
- 个别工具存在“文件名和导出名不同”的情况，本文档已在对应章节中显式说明。
- 如果你想快速查某个工具支持什么参数，除了本文档，也可以直接查看导入时的 TypeScript / JSDoc 提示。
