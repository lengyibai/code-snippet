---
outline: false
prev:
  text: File 文件
  link: /docs/Tool/File
next:
  text: Math 数学
  link: /docs/Tool/Math
---

# Formatter-格式化

## LibJsFormatterByte-字节格式化

把字节数格式化为更易读的大小信息。

```ts
import { libJsFormatterByte } from "lyb-js/Formatter/LibJsFormatterByte";

console.log(libJsFormatterByte(1536));
// ["1.50", "KB", "1.50 KB"]
```

## LibJsMaskPhoneNumber-隐藏手机号码

文件名是 `LibJsMaskPhoneNumber`，导出的方法名是 `libJsMaskCenterFour`。

```ts
import { libJsMaskCenterFour } from "lyb-js/Formatter/LibJsMaskPhoneNumber";

console.log(libJsMaskCenterFour("13800138000"));
// "138****8000"
```

## LibJsNumberUnit-数字单位

根据阈值自动追加单位，适合展示“万、亿、K、M”等短格式数字。

```ts
import { libJsNumberUnit } from "lyb-js/Formatter/LibJsNumberUnit";

console.log(libJsNumberUnit(12600, { 万: 10000, 亿: 100000000 }, 1));
// "1.2万"

console.log(libJsNumberUnit(2500000, { K: 1000, M: 1000000 }, 2));
// "2.50M"
```

## LibJsNumComma-数字逗号

给数字加千分位，并按指定小数位截断，不做四舍五入。

```ts
import { libJsNumComma } from "lyb-js/Formatter/LibJsNumComma";

console.log(libJsNumComma(1234567.8912, 2));
// "1,234,567.89"
```

## LibJsSecondsFormatterChinese-中文时间

把秒数格式化成中文时间描述。

```ts
import { libJsSecondsFormatterChinese } from "lyb-js/Formatter/LibJsSecondsFormatterChinese";

console.log(libJsSecondsFormatterChinese(90));
// "1分钟30秒"

console.log(libJsSecondsFormatterChinese(3661));
// "1小时1分钟1秒"
```
