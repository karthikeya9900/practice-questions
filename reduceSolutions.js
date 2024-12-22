const addNumbers = function (num1, num2) {
  return num1 + num2;
};

// sumOf([1, 2, 3, 4]) => 10

const sumOf = function (numbers) {
  return numbers.reduce(addNumbers, 0);
};

console.log(sumOf([1, 2, 3, 4]));

// -------------------------------------------------------------------