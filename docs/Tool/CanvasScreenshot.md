# _canvasScreenshot

<ContainerBox title="介绍" noGap>
<template #desc>

`canvas`截图
</template>
</ContainerBox>

<ContainerBox title="下载所需文件" noGap>
<template #desc>

[html2canvas.min.js](https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/html2canvas.min.js)

</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```vue
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
</ContainerBox>
