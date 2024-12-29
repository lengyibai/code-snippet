# _blobTextToBase64

<ContainerBox title="介绍" noGap>
<template #desc>

将`Blob`标识符转换成`Base64`
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<CodeBox>
<template #codes>

```ts
/** @description 将Blob标识符转换成Base64
 * @param blob Blob标识符
 */
export const _blobTextToBase64 = (blob: string): Promise<string> => {
  return new Promise((resolve) => {
    fetch(blob)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Blob URL");
        }
        return response.blob();
      })
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result!.toString());
        };
        reader.readAsDataURL(blob);
      });
  });
};
```
</template>
</CodeBox>
</ContainerBox>



<ContainerBox title="_base64ToObject" noGap>
<template #desc>

将`Base64`标识符转换成`Base64`，前提是`Base64`源数据为对象
</template>
<CodeBox>
<template #codes>

```ts
/** @description 将Base64转成JSON并转成对象，前提是Base64源数据为对象 */
export const _base64ToObject = (base64: string) => {
  const base64Data = base64.replace(/^data:text\/plain;base64,/, "");
  const arrayBuffer = Uint8Array.from(window.atob(base64Data), (c) => c.charCodeAt(0)).buffer;
  const decoder = new TextDecoder("utf-8");
  const jsonString = decoder.decode(arrayBuffer);
  return JSON.parse(jsonString);
};
```
</template>
</CodeBox>
</ContainerBox>
