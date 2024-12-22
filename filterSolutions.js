const filterRecords = function (record) {
  return record.age > 30;
};

// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] =>
//  [{name: "Bob", age: 35}]
const filterAdults = function (people) {
  return people.filter(filterRecords);
};

// console.log(filterAdults([{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }]));

// ----------------------------------------------------------------------

const isGreaterThan10 = function (number) {
  return number > 10;
};

// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter(isGreaterThan10);
};

// console.log(filterNumbersGreaterThanTen([5, 12, 7, 18, 3]));

// ----------------------------------------------------------------------

const isEven = function (number) {
  return (number & 1) === 0;
};

// even numbers [1, 2, 3, 4, 5] => [2, 4]
const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5]));

// ----------------------------------------------------------------------

