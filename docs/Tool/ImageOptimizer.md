# _imageOptimizer

<ContainerBox title="介绍">
<template #desc>
超过一定大小或尺寸进行压缩
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<template #desc>

支持`jpg`、`png`
</template>

```vue
<body>
  <input type="file" id="img" />

  <!-- JS -->
  <script>
    const img = document.querySelector("#img");
    img.addEventListener("change", function () {
      _imageOptimizer({
        el: img, //上传图片的input元素
        //file:f, //file类型的文件
        width: 1000,
        ratio: 1,
        maxsize: 1024,
        success: (data, file, url) => {},
      });
    });
  </script>
</body>
```
<CodeBox>
<template #codes>

```ts
/** @description 图片压缩参数 */
export type ImageOptimizerOptions = {
  el?: HTMLInputElement;
  file?: File;
  /** 压缩尺寸 */
  width?: number;
  /** 压缩率 */
  ratio?: number;
  /** 超过多大进行压缩 */
  maxSize?: number;
  /** 成功回调 */
  success: (data: FormData, file: File, url: string) => void;
  /** 失败回调 */
  fail?: (error: ErrorEvent) => void;
};

/** @description 图片压缩
 * @param obj 压缩参数
 */
export const _imageOptimizer = (obj: ImageOptimizerOptions) => {
  const canvas = document.createElement("canvas");
  canvas.classList.add("imageOptimizer");
  document.body.appendChild(canvas);

  const files = obj.el?.files?.[0] || obj.file;
  if (!files) return;

  const name = files.name;
  const extension = name.split(".").pop()!.toLowerCase();
  const ratio = obj.ratio || 1;
  const maxSize = obj.maxSize || 1024;
  const width = obj.width || 10000;
  const mimeType = files.type;

  function dataURLtoFile(dataURL: string, filename: string) {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = window.atob(arr[1]);
    const n = bstr.length;
    const u8arr = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
      u8arr[i] = bstr.charCodeAt(i);
    }
    return new File([u8arr], filename, { type: mime });
  }

  function formData(file: File) {
    const data = new FormData();
    data.append("file", file);
    return data;
  }

  const reader = new FileReader();
  reader.readAsDataURL(files);

  reader.onload = (e: any) => {
    const result = e.target.result as string;

    if (e.total / 1024 > maxSize) {
      const image = new Image();
      image.src = result;
      image.onload = () => {
        const context = canvas.getContext("2d");
        const scale = width / image.width;

        if (scale < 1) {
          canvas.width = image.width * scale;
          canvas.height = image.height * scale;
          context!.drawImage(image, 0, 0, image.width * scale, image.height * scale);
        } else {
          canvas.width = image.width;
          canvas.height = image.height;
          context!.drawImage(image, 0, 0, image.width, image.height);
        }

        const dataUrl = canvas.toDataURL(mimeType, ratio);
        const newName = `${name.split(".")[0]}.${extension}`;
        const file = dataURLtoFile(dataUrl, newName);
        obj.success(formData(file), file, dataUrl);
        canvas.remove();
      };
      image.onerror = obj.fail as any;
    } else {
      const newName = `${name.split(".")[0]}.${extension}`;
      const file = dataURLtoFile(result, newName);
      obj.success(formData(file), file, result);
      canvas.remove();
    }
  };
  reader.onerror = obj.fail as any;
};
```
</template>
</CodeBox>
</ContainerBox>