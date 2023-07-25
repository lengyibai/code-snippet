# $formValidate

<ContainerBox title="介绍">
<template #desc>
表单正则验证
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>
较为详细，传递正则或返回值为Boolean值的函数，一般取第一个数组元素作为弹窗提示进行逐步验证
</template>

```js
const form = {
  nickname: "冷1白",
  age: "",
  account: "1329670984",
  password: "123321",
};

const result = $formVerify(form, [
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

<ShowCode>
<template #codes>

```js
export const $formVerify = (form, rules) => {
  return rules.reduce((result, rule) => {
    let key = rule.key;
    let value = form[key];
    let verify = rule.verify;
    let msg = rule.msg;
    let name = rule.name;
    if (value === "" || value === undefined || value === null) {
      result.push({ key, msg: "必填项", name });
    } else if (
      typeof verify === "function" ? !verify(value) : !verify.test(value)
    ) {
      result.push({ key, msg, name });
    }
    return result;
  }, []);
};
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="精简版">
<template #desc>
传递正则或返回值为Boolean值的函数，返回不满足条件的key
</template>

```js
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

<ShowCode>
<template #codes>

```js
export const $validateForm = (form, fields) =>
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
</ShowCode>
</ContainerBox>
