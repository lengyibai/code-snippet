# $urlFileType

<ContainerBox title="介绍">
<template #desc>
为了限制用户上传文件
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>
内置对常见的图片和视频格式的判断，如果格式不全可自行添加
</template>

```js
//使用内置格式进行判断
$urlFileType('文件.123.MP4', 'video'); //true
$urlFileType('文件.321.PNG', 'video'); //false
$urlFileType('文件.231.AVI', 'image'); //true
$urlFileType('文件.213.JPEG', 'image'); //false

//自定义格式进行判断
$urlFileType('文件.213.JPEG', ['zip', '7z', 'rar']); //false
$urlFileType('文件.213.7z', ['zip', '7z', 'rar']); //true
```

<ShowCode>
<template #codes>

```js
export function $urlFileType(url, type) {
  const obj = {
    image: ['jpeg', 'jpg', 'png', 'webp', 'bmp', 'gif', 'svg'],
    video: ['avi', 'mov', 'rmvb', 'rm', 'flv', 'mp4', '3gp'],
  };
  if (type instanceof Array) return type.includes(url.replace(/.+\./, '').toLowerCase());
  return obj[type].includes(url.replace(/.+\./, '').toLowerCase());
}
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
<template #desc>

| 参数 | 说明                                                                                                                                                                 | 类型            | 可选值         |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------- |
| url  | 文件路径                                                                                                                                                             | String          | -              |
| type | 文件类型，目前可传递`image`和`video`<br />也可直接传递数组，数组内为文件格式，如`['zip', '7z', 'rar']`<br />如果会在多个地方判断相同的文件类型，建议参考源码添加类型 | String \| Array | image \| video |

</template>

</ContainerBox>
