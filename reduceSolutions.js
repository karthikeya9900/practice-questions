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

console.log(productOf([1, 2, 3, 4]));

// -------------------------------------------------------------------
