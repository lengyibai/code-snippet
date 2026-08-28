---
outline: false
prev:
  text: Data 数据
  link: /docs/Tool/Data
next:
  text: Formatter 格式化
  link: /docs/Tool/Formatter
---

# File-文件

## LibJsDownloadImageLink-图片下载

把图片链接下载到本地。

```ts
import { libJsDownloadImageLink } from "lyb-js/File/LibJsDownloadImageLink";

libJsDownloadImageLink("https://example.com/banner.jpg", "banner.jpg");
```

## LibJsImageOptimizer-图片压缩

在浏览器里压缩图片，并通过回调拿到压缩后的 `File`、`FormData` 和预览地址。

```ts
import { libJsImageOptimizer } from "lyb-js/File/LibJsImageOptimizer";

input.addEventListener("change", () => {
  const file = input.files?.[0];
  if (!file) return;

  libJsImageOptimizer({
    file,
    width: 1200,
    ratio: 0.8,
    maxSize: 1024,
    success(formData, newFile, url) {
      console.log(formData, newFile);
      preview.src = url;
    },
    fail(error) {
      console.error("压缩失败", error);
    },
  });
});
```

## LibJsSaveJson-保存文件

把字符串或 JSON 内容保存成浏览器下载文件。

```ts
import { libJsSaveJson } from "lyb-js/File/LibJsSaveJson";

const content = JSON.stringify({ name: "Tom", age: 18 }, null, 2);
libJsSaveJson("user.json", content);
```
