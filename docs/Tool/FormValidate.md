# _formValidate

<ContainerBox title="介绍">
<template #desc>
表单正则验证
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>
<template #desc>
较为详细，传递正则或返回值为Boolean值的函数，一般取第一个数组元素作为弹窗提示进行逐步验证
</template>

```ts
const form = {
  nickname: "冷1白",
  age: "",
  account: "1329670984",
  password: "123321",
};

const result = _formVerify(form, [
  {
    key: "nickname",
    verify: (v) => v === "冷弋白",
    msg: "限制为冷弋白",
    name: "昵称",
  },
  {
    key: "age",
    verify: /^[0-9]*$/,
    msg: "限制为数字",
    name: "年龄",
  },
  {
    key: "account",
    verify: /^[0-9]*$/,
    msg: "限制为数字",
    name: "帐号",
  },
]);
console.log(result);
/*
[
  { key: 'nickname', msg: '限制为冷弋白', name: '昵称' },
  { key: 'age', msg: '必填项', name: '年龄' }
]
*/
```

<CodeBox>
<template #codes>

```ts
/**
 * @description 表单验证函数。
 * @param form 表单数据对象。
 * @param rules 验证规则数组。
 * @returns 验证结果数组，包含未通过验证的项。
 */
export const _formVerify = (form: Record<string, any>, rules: { key: string, verify: RegExp | ((value: any) => boolean), msg: string, name: string }[]) => {
  return rules.reduce((result, rule) => {
    let { key, verify, msg, name } = rule;
    let value = form[key];
    if (value === "" || value === undefined || value === null) {
      result.push({ key, msg: "必填项", name });
    } else if (typeof verify === "function" ? !verify(value) : !verify.test(value)) {
      result.push({ key, msg, name });
    }
    return result;
  }, []);
};
```
</template>
</CodeBox>
</ContainerBox>

<ContainerBox title="精简版">
<template #desc>
传递正则或返回值为Boolean值的函数，返回不满足条件的key
</template>

```ts
const form = { account: "冷弋白", password: "123456" };
const fields = [
  { key: "account", verify: (v) => v === "冷弋白" },
  {
    key: "password",
    verify: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/,
  },
];

console.log(validateForm(form, fields)); // [ 'password' ]
```
<CodeBox>
<template #codes>

```ts
/**
 * @description 验证表单字段。
 * @param form 表单数据对象。
 * @param fields 验证字段数组。
 * @returns 未通过验证的字段名数组。
 */
export const _validateForm = (form: Record<string, any>, fields: { key: string, verify: RegExp | ((value: any) => boolean) }[]) =>
  fields
    .filter(
      ({ key, verify }) =>
        !form[key] ||
        (typeof verify === "function"
          ? !verify(form[key])
          : !verify.test(form[key]))
    )
    .map(({ key }) => key);
```
</template>
</CodeBox>
</ContainerBox>
