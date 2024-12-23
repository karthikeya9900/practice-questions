const addNumbers = function (num1, num2) {
  return num1 + num2;
};

// sumOf([1, 2, 3, 4]) => 10

const sumOf = function (numbers) {
  return numbers.reduce(addNumbers, 0);
};

// console.log(sumOf([1, 2, 3, 4]));

// -------------------------------------------------------------------

const multiply = function (num1, num2) {
  return num1 * num2;
};

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce(multiply, 1);
};

// console.log(productOf([1, 2, 3, 4]));

// -------------------------------------------------------------------

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return numbers.reduce(addNumbers, 0) / numbers.length;
};

// console.log(averageOf([1, 2, 3, 4, 5]));

// -------------------------------------------------------------------

const findMinOf = function (number1, number2) {
  return Math.min(number1, number2);
};

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce(findMinOf, Infinity);
};

// console.log(minOf([3, 1, 4, 1, 5, 9, 2]));

// -------------------------------------------------------------------

const findMaxOf = function (number1, number2) {
  return Math.max(number1, number2);
};

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce(findMaxOf, -Infinity);
};

// console.log(maxOf([3, 1, 4, 1, 5, 9, 2]));

// -------------------------------------------------------------------

const isPositive = function (number) {
  return number > 0;
};

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = function (numbers) {
  return numbers.filter(isPositive).reduce(addNumbers, 0);
};

// console.log(sumPositiveNumbers([1, -2, 3, -4]));

// -------------------------------------------------------------------

const squareOf = function (number) {
  return Math.pow(number, 2);
};

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = function (numbers) {
  return numbers.map(squareOf).reduce(addNumbers, 0);
};

// console.log(sumOfSquares([1, 2, 3, 4]));

// -------------------------------------------------------------------

const isOdd = function (number) {
  return (number & 1) === 1;
};

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const sumOfOddNumbers = function (numbers) {
  return numbers.filter(isOdd).reduce(addNumbers, 0);
};

// console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

// -------------------------------------------------------------------

const isNegative = function (number) {
  return number < 0;
};

const increment = function (number) {
  return number + 1;
};

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {
  return numbers.filter(isNegative).reduce(increment, 0);
};

// console.log(countNegativeNumbers([1, -2, 3, -4]));

// -------------------------------------------------------------------

const isEven = function (number) {
  return (number & 1) === 0;
};

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  return numbers.filter(isEven).map(squareOf).reduce(addNumbers, 0);
};

// console.log(findSumOfEvenSquares([1, 2, 3, 4]));

// -------------------------------------------------------------------

const concatElements = function (word1, word2) {
  return word1 + word2;
};

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce(concatElements, "");
};

// console.log(concatenateWords(["hello", "world"]));

// -------------------------------------------------------------------

const longestOf = function (word1, word2) {
  return word1.length < word2.length ? word1 : word2;
};

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {
  return words.reduce(longestOf, "");
};

console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));


// -------------------------------------------------------------------

const shortestOf = function (word1, word2) {
  return word1.length < word2.length ? word1 : word2;
};

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  // console.log("hello")
  return words.reduce(shortestOf,);
};

console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// -------------------------------------------------------------------
