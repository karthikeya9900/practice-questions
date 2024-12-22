const filterRecords = function (record) {
  return record.age > 30;
};

// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] =>
//  [{name: "Bob", age: 35}]
const filterAdults = function (people) {
  return people.filter(filterRecords);
};

console.log(filterAdults([{ name: "Alice", age: 25 }, { name: "Bob", age: 35 }]));

// ----------------------------------------------------------------------


