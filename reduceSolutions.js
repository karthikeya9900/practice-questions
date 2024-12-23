// sumOf([1, 2, 3, 4]) => 10

const sumOf = function (numbers) {
  return numbers.reduce((num1, num2) => num1 + num2);
};

// console.log(sumOf([1, 2, 3, 4]));

// --------------------------------- 1 --------------------------------

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce((num1, num2) => num1 * num2);
};

// console.log(productOf([1, 2, 3, 4]));

// ---------------------------------- 2 -------------------------------

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return numbers.reduce((num1, num2) => num1 + num2) / numbers.length;
};

// console.log(averageOf([1, 2, 3, 4, 5]));

// ---------------------------- 3 --------------------------------------

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce((num1, num2) => Math.min(num1, num2));
};

// console.log(minOf([3, 1, 4, 1, 5, 9, 2]));

// ----------------------------- 4 ------------------------------------

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce((num1, num2) => Math.max(num1, num2));
};

// console.log(maxOf([3, 1, 4, 1, 5, 9, 2]));

// ------------------------------ 5 -----------------------------------

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = function (numbers) {
  return numbers.filter((num => num > 0)).reduce((num1, num2) => num1 + num2);
};

// console.log(sumPositiveNumbers([1, -2, 3, -4]));

// ------------------------------ 6 -----------------------------------

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = function (numbers) {
  return numbers.map((num) => num * num).reduce((num1, num2) => num1 + num2);
};

// console.log(sumOfSquares([1, 2, 3, 4]));

// -------------------------------- 7 ---------------------------------

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const sumOfOddNumbers = function (numbers) {
  return numbers.filter((number) => (number & 1) === 1).reduce((num1, num2) => num1 + num2);
};

// console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

// ------------------------------ 8 -----------------------------------

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {
  return numbers.reduce((counter, value) => counter + (value < 0 ? 1 : 0), 0);
};

// console.log(countNegativeNumbers([1, -2, 3, -4]));

// ------------------------------ 9 ------------------------------------

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  return numbers.filter((number) => (number & 1) === 0).map((num) => num * num).
    reduce((sum, num) => sum + num);
};

// console.log(findSumOfEvenSquares([1, 2, 3, 4]));

// -------------------------------- 10 ----------------------------------

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce((word1, word2) => word1 + word2);
};

// console.log(concatenateWords(["hello", "world"]));

// --------------------------------- 11 ---------------------------------

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {
  return words.reduce((word1, word2) => word1.length > word2.length ? word1 : word2);
};

// console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// ------------------------------ 12 -----------------------------------

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  return words.reduce((word1, word2) => word1.length < word2.length ? word1 : word2);
};

// console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// ----------------------------- 13 -------------------------------------
