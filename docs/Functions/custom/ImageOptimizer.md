# $imageOptimizer

<ContainerBox title="介绍">
<template #desc>
超过一定大小或尺寸进行压缩
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>
过一定大小或尺寸进行压缩
</template>

```html
<body>
  <input type="file" id="img" />

  <!-- JS -->
  <script>
    const img = document.querySelector("#img");
    img.addEventListener("change", function () {
      $imageOptimizer({
        el: img, //上传图片的input元素
        //file:f, //file类型的文件
        width: 1000, //压缩尺寸
        ratio: 1, //压缩率
        maxsize: 1024, //超过多大进行压缩
        /* 成功回调 */
        success: (data, file, url) => {},
      });
    });
  </script>
</body>
```

<ShowCode>
<template #codes>

```js
export function $imageOptimizer(obj) {
  // 先判断Dom树是否存在上次创建的canvas
  const c1 = document.createElement("canvas");
  c1.classList.add("imageOptimizer");
  document.body.appendChild(c1);
  const c2 = document.querySelector(".imageOptimizer");
  let files = "";
  let Blobs = "";
  let name = "";
  let ratio = obj.ratio || 1; //压缩率
  let maxsize = obj.maxsize || 1024; //超过多大进行压缩
  let width = obj.width || 10000; //压缩尺寸
  if (obj.el || obj.file) {
    files = (obj.el && obj.el.files[0]) || obj.file;
    name = files.name;
    let reader = new FileReader();
    reader.readAsDataURL(files);
    let p1 = new Promise(function (resolve, reject) {
      reader.onload = function (e) {
        resolve(e);
      };
      reader.onerror = function (e) {
        reject(e);
      };
    });
    p1.then(
      (e) => {
        let result = e.target.result;
        // 判断图片占用大小
        if (e.total / 1024 > maxsize) {
          let p2 = new Promise(function (resolve, reject) {
            let image = new Image();
            image.src = result;
            image.onload = function () {
              resolve(image);
            };
            image.onerror = function (e) {
              reject(e);
            };
          });
          p2.then(
            (e) => {
              let canvas = document.querySelector("canvas");
              let context = canvas.getContext("2d");
              // 如果图片尺寸大于规定尺寸，则压缩尺寸
              let scale = width / e.width;
              if (scale < 1) {
                canvas.width = e.width * scale;
                canvas.height = e.height * scale;
                context.drawImage(e, 0, 0, e.width * scale, e.height * scale);
              } else {
                canvas.width = e.width;
                canvas.height = e.height;
                context.drawImage(e, 0, 0, e.width, e.height);
              }
              let dataUrl = canvas.toDataURL("image/jpeg", ratio);
              Blobs = dataUrl;
              let file = dataURLtoFile(Blobs, name);
              obj.success(formData(file), file, Blobs);
              c2.remove();
            },
            (e) => {
              console.log(e);
            }
          );
        } else {
          let file = dataURLtoFile(result, name);
          obj.success(formData(file), file, result);
          c2.remove();
        }
      },
      (e) => {
        console.log(e);
      }
    );
  }

  function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {
      type: mime,
    });
  }

  function formData(file) {
    const data = new FormData();
    data.append("file", file);
    return data;
  }
}
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
<template #desc>

| 对象属性     | 说明                                                                                                                                                       | 类型              | 是否必填 | 默认值   |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | -------- | -------- |
| el \|\| file | `input`表单或`file`类型的文件                                                                                                                              | Element \|\| File | 二选一   | -        |
| width        | 压缩的宽度，超过则压缩                                                                                                                                     | Number            | 否       | 自身宽度 |
| ratio        | 压缩率，0<`ratio`<=1                                                                                                                                       | Number            | 否       | 1        |
| maxsize      | 文件大小超过多大进行压缩，单位`kb`                                                                                                                         | Number            | 否       | 1024     |
| success      | 压缩成功回调<br />回调参数：<br />参数 1：可直接传给后端的表单对象<br />参数 2：`file`类型<br />参数 3：`base64`，可放置在`a`标签上下载以及`img`标签上预览 | Function          | 是       | -        |

</template>

</ContainerBox>
