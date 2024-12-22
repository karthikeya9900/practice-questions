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

// console.log(filterEvenNumbers([1, 2, 3, 4, 5]));

// ----------------------------------------------------------------------

const isLengthGreaterThan5 = function (word) {
  return word.length > 5;
};

// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] =>
//  ["banana"]
const filterLongWords = function (words) {
  return words.filter(isLengthGreaterThan5);
};

// console.log(filterLongWords(["apple", "banana", "kiwi", "grape"]));

// ----------------------------------------------------------------------

const isGreaterThan = function (threshold, key) {
  return function (book) {
    return book[key] > threshold;
  };
};

// books with more than 200 pages [{title: "Book 1", pages: 150},
//  {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const filterLongBooks = function (books) {
  const comparator = isGreaterThan(200, "pages");
  return books.filter(comparator);
};

// console.log(filterLongBooks([{ title: "Book 1", pages: 150 },
// { title: "Book 2", pages: 250 }, { title: "Book 2", pages: 200 },
// { title: "Book 2", pages: 201 }]));

// ----------------------------------------------------------------------

const isPropertyValid = function (property, value) {
  return function (profile) {
    return profile[property] === value;
  };
};

// users with incomplete profiles [{username: "alice", profileComplete: true},
//  {username: "bob", profileComplete: false}] => 
// [{username: "bob", profileComplete: false}]
const filterIncompleteProfiles = function (users) {
  const comparator = isPropertyValid("profileComplete", false);
  return users.filter(comparator);
};

// console.log(filterIncompleteProfiles([{ username: "alice", profileComplete: true },
// { username: "bob", profileComplete: false }, { username: "jack", profileComplete: false }]));

// ----------------------------------------------------------------------

// students with grades above 80 [{name: "John", grade: 75}, 
// {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const filterHighGrades = function (students) {
  const comparator = isGreaterThan(80, "grade");
  return students.filter(comparator);
};

// console.log(filterHighGrades([{ name: "John", grade: 75 }, { name: "Jane", grade: 85 }]));

// ----------------------------------------------------------------------

// products that are in stock [{product: "apple", inStock: true}, 
// {product: "banana", inStock: false}] => [{product: "apple", inStock: true}]
const filterInStockProducts = function (products) {
  const comparator = isPropertyValid("inStock", true);
  return products.filter(comparator);
};

console.log(filterInStockProducts([{ product: "apple", inStock: true },
{ product: "banana", inStock: false }]));


// ----------------------------------------------------------------------