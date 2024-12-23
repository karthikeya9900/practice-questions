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

// console.log(filterInStockProducts([{ product: "apple", inStock: true },
// { product: "banana", inStock: false }]));


// ----------------------------------------------------------------------

// active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]
const filterActiveUsers = function (users) {
  const comparator = isPropertyValid("active", true);
  return users.filter(comparator);
};

// console.log(filterActiveUsers([{ username: "alice", active: true }, { username: "bob", active: false }]));

// ----------------------------------------------------------------------

const isOrderedInLast30days = function (key, value) {
  return function (orderDetails) {
    return orderDetails[key] > value;
  };
};

// orders placed in the last 30 days [{orderDate: "2024-11-01"}, {orderDate: "2024-12-01"}] => [{orderDate: "2024-12-01"}]
const filterRecentOrders = function (orders) {
  const comparator = isOrderedInLast30days("orderDate", "2024-11-23");
  return orders.filter(comparator);
};

// console.log(filterRecentOrders([{ orderDate: "2024-11-01" }, { orderDate: "2024-12-01" }]));

// ----------------------------------------------------------------------

const isLessThanOrEqual = function (threshold, key) {
  return function (record) {
    return record[key] <= threshold;
  };
};

const addPrices = function (value, product) {
  return product.price + value;
};

const getAverage = function (products) {  
  return products.reduce(addPrices, 0) / products.length;
};

// products with a price lower than the average [{name: "item1", price: 10}, {name: "item2", price: 20},
//  {name: "item3", price: 5}] => [{name: "item1", price: 10}, {name: "item3", price: 5}]
const filterBelowAveragePrice = function (products) {
  const averagePrice = getAverage(products);
  const comparator = isLessThanOrEqual(averagePrice, "price");
  return products.filter(comparator);
};

// console.log(filterBelowAveragePrice([{ name: "item1", price: 10 },
// { name: "item2", price: 20 }, { name: "item3", price: 5 }]));

// ----------------------------------------------------------------------

const addSalaries = function (salary, employee) {
  return employee.salary + salary;
};

const getAverageSalOf = function (employees) {  
  return employees.reduce(addSalaries, 0) / employees.length;
};

// employees whose salary is higher than the department average
//  [{name: "Alice", salary: 5000, department: "HR"}, {name: "Bob", salary: 7000, department: "HR"},
//  {name: "Charlie", salary: 4000, department: "IT"}] => [{name: "Bob", salary: 7000, department: "HR"}]

const filterHighSalaryEmployees = function (employees) {
  const averageSalary = getAverageSalOf(employees);
  const comparator = isGreaterThan(averageSalary, "salary");
  return employees.filter(comparator);
};

console.log(filterHighSalaryEmployees([{ name: "Alice", salary: 5000, department: "HR" },
{ name: "Bob", salary: 7000, department: "HR" },
{ name: "Charlie", salary: 4000, department: "IT" }]));
// ----------------------------------------------------------------------