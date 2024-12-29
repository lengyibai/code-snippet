# _decimal

<ContainerBox title="介绍">
<template #desc>

精确的十进制计算，需要 `npm install decimal.js`
</template>
</ContainerBox>

<ContainerBox title="基础用法" noGap>

```ts
_decimal([1, 2, 3], ['+','-'], 2);
```
<CodeBox>
<template #codes>

```ts
import Decimal from "decimal.js";

/**
 * @description 精确的十进制计算
 * @param nums 数字数组
 * @param operators 运算符数组
 * @param point 精度，默认为2
 */
export const _decimal = (nums: number[], operators: ("+" | "-" | "*" | "/")[], point = 2) => {
  //检查数字数量与运算符数量是否匹配
  if (nums.length !== operators.length + 1) {
    throw new Error("数字数量与符号数量不匹配，符号数量＝数字数量-1");
  }

  //初始化结果为第一个数字
  let result = new Decimal(nums[0]);

  //定义计算函数对象，包含加减乘除四则运算
  const calc: Record<string, (a: Decimal, b: Decimal) => Decimal> = {
    "+": (a, b) => a.add(b),
    "-": (a, b) => a.sub(b),
    "*": (a, b) => a.mul(b),
    "/": (a, b) => {
      //检查除数是否为0
      if (b.eq(0)) {
        throw new Error("除数不能为0");
      }
      return a.div(b);
    },
  };

  //循环计算每个运算符对应的数字
  for (let i = 0; i < operators.length; i++) {
    const operand = new Decimal(nums[i + 1]); //获取下一个数字作为操作数
    const operator = operators[i]; //获取当前运算符
    result = calc[operator](result, operand); //使用对应的计算函数进行计算
  }

  return Number(result.toFixed(point));
};
```
</template>
</CodeBox>
</ContainerBox>
