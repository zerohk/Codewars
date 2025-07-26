/** Your task is to sort a given string. Each word in the string will contain a single number.
 * This number is the position the word should have in the result.
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * If the input string is empty, return an empty string.
 * The words in the input String will only contain valid consecutive numbers.
 * "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
 * "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 * ""  -->  ""
 * */

function order(words) {
  // 长度为零，直接返回
  if (words.length === 0) {
    return words;
  }

  // 单词中包含数字，可以先将字符串通过空格转为数组
  let wordArr = words.split(" ");
  // 数组排序
  return wordArr.sort((a, b) => getDigital(a) - getDigital(b)).join(" ");
}

// 获取字符串中的数字
function getDigital(str) {
  const regex = /[1-9]/;
  return str.match(regex)[0];
}


