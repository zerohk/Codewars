# Codewars

记录我的[Codewars](https://www.codewars.com/)刷题记录。

## 解题过程回顾

[Your order, please](https://www.codewars.com/kata/55c45be3b2079eccff00010f/javascript) 给定一个字符串，根据字符串中单词包含的数字来排序单词。

1. 数组与字符串互相转换：`String.split(sep,[limit])`[方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)可以将字符串根据给定的分隔符（`sep`）转为数组;`Array.join([sep])`[方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)可以将数组根据指定分隔符（`sep`，缺省时为 `,`）将数组转换为字符串；
2. [正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)的使用：`/[1-9]/`用于匹配 1-9 的数字，`/\d/`用于匹配所有数字（0-9）；**（还需多学习，需熟练掌握）**
3. 字符串的 `match(regexp)`[方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match):用于找出字符串中与给定正则表达式（`regexp`）匹配的结果，结果以**数组**返回，未匹配到则返回 null；
4. 数组 `sort([compareFn])`[排序方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)使用。**（需加强理解）**

---

[Count the smiley faces!](https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript) 给定一个字符串数组，统计数组中笑脸字符串个数。

1. 正则表达式；
2. 字符串的 `match(regexp)`[方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match):用于找出字符串中与给定正则表达式（`regexp`）匹配的结果，结果以**数组**返回，未匹配到则返回 null；
3. [正则表达式基础知识复习](./正则表达式基础.md)。
