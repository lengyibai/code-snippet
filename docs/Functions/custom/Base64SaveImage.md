# $base64SaveImage

<ContainerBox title="介绍">
<template #desc>
将base64保存为图片
</template>
</ContainerBox>

<ContainerBox title="下载所需文件">

<template #desc>

[html2canvas.min.js](https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/html2canvas.min.js)

</template>
</ContainerBox>

<ContainerBox title="基础用法">

```html
<script type="text/javascript" src="/js/html2canvas.min.js"></script>
<script>
  /* 保存二维码 */
  const onSaveQrCode = () => {
    const img = document.querySelector(".qr-code") as HTMLCanvasElement;
    html2canvas(img).then((canvas: HTMLCanvasElement) => {
      const image = canvas.toDataURL("image/png");
      $base64SaveImage(image, "QrCode.png");
    });
  };
</script>
```

<ShowCode>

<template #codes>

```js
export const $base64SaveImage = (base64Str: string, fileName: string) => {
  const contentType = base64Str.split(",")[0].match(/:(.*?);/)[1];
  const b64Data = base64Str.split(",")[1];
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  const blobURL = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = blobURL;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
```

</template>
</ShowCode>
</ContainerBox>
