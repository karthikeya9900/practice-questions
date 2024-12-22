const squareOfNumber = function (number) {
  return Math.pow(number, 2);
};

// squares of [1, 2, 3] => [1, 4, 9]
const squaresOf = function (numbers) {
  return numbers.map(squareOfNumber);
};

// console.log(squaresOf([1, 2, 3]));
// console.log(squaresOf([0, 1, 2]));
// console.log(squaresOf([0, 1, -2]));

// ----------------------------------------------------------------------

const getLengthOf = function (word) {
  return word.length;
};

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const lengthsOf = function (strings) {
  return strings.map(getLengthOf);
};

// console.log(lengthsOf(["apple", "banana", "kiwi"]));
// console.log(lengthsOf(["apple", "", "kiwi"]));
// console.log(lengthsOf(["apple", "ba", "kiwi"]));
// console.log(lengthsOf(["applebananakiwi"]));
// console.log(lengthsOf([]));

// ----------------------------------------------------------------------

const toUpper = function (word) {
  return word.toUpperCase();
};

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const uppercaseOf = function (strings) {
  return strings.map(toUpper);
};

// console.log(uppercaseOf(["apple", "banana", "kiwi"]));
// console.log(uppercaseOf(["apple", "kiwi"]));
// console.log(uppercaseOf(["apple", "ba", "kiwi"]));
// console.log(uppercaseOf(["applebananakiwi"]));
// console.log(uppercaseOf(["HELLO"]));

// ----------------------------------------------------------------------

const firstCharOf = function (word) {
  return word[0];
};

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstCharactersOf = function (strings) {
  return strings.map(firstCharOf);
};

// console.log(firstCharactersOf(["apple", "banana", "kiwi"]));
// console.log(firstCharactersOf(["apple", "kiwi"]));
// console.log(firstCharactersOf(["apple", "ba", "kiwi"]));
// console.log(firstCharactersOf(["applebananakiwi"]));
// console.log(firstCharactersOf(["HELLO"]));

// ----------------------------------------------------------------------

const isTruthyValue = function (number) {
  return number !== 0;
};

// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const truthValuesOf = function (numbers) {
  return numbers.map(isTruthyValue);
};

// console.log(truthValuesOf([0, 1, 2, 3]));
// console.log(truthValuesOf([0, 1, -2, 3]));
// console.log(truthValuesOf([-1, 0, 1]));
// console.log(truthValuesOf([0]));

// ----------------------------------------------------------------------

const reverseOf = function (word) {
  return word.split("").reverse().join("");
};

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const reversedStringsOf = function (strings) {
  return strings.map(reverseOf);
};

// console.log(reversedStringsOf(["apple", "banana", "kiwi"]));
// console.log(reversedStringsOf(["apple", "kiwi"]));
// console.log(reversedStringsOf(["apple", "ba", "kiwi"]));
// console.log(reversedStringsOf(["applebananakiwi"]));
// console.log(reversedStringsOf(["HELLO"]));

// ----------------------------------------------------------------------

const getDoubleLetter = function (letter) {
  return letter.repeat(2);
};

const getDoubleLetterWord = function (word) {
  return word.split("").map(getDoubleLetter).join("");
};

// double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"]
const doubleLettersOf = function (strings) {
  return strings.map(getDoubleLetterWord);
};

// console.log(doubleLettersOf(["cat", "dog", "bat"]));
// console.log(doubleLettersOf(["cat", "dog"]));
// console.log(doubleLettersOf(["karthikeya"]));

// ----------------------------------------------------------------------

const complementOf = function (boolean) {
  return !boolean;
};

// boolean negation of [true, false, true] => [false, true, false]
const negatedBooleansOf = function (booleans) {
  return booleans.map(complementOf);
};

// console.log(negatedBooleansOf([true, false, true, false, true, false]));
// console.log(negatedBooleansOf([true, false, true]));
// console.log(negatedBooleansOf([false, true, false]));

// ----------------------------------------------------------------------

const uniqueCodeof = function (char) {
  return char.charCodeAt();
};

// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const charCodesOf = function (strings) {
  return strings.map(uniqueCodeof);
};

// console.log(charCodesOf(["a", "b", "c"]));
// console.log(charCodesOf(["A", "B", "C"]));
// console.log(charCodesOf(["*", "$", "@"]));

// ----------------------------------------------------------------------

const getDomainName = function (email) {
  return email.split("@")[1];
};

// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] =>
//  ["gmail.com", "yahoo.com"]
const domainNamesOf = function (emails) {
  return emails.map(getDomainName);
};

// console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]));
// console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com", "kittu@thoughtworks.com"]));

// ----------------------------------------------------------------------

const splitSentence = function (sentence) {
  return sentence.split(" ");
};

// split words in ["hello world", "goodbye moon"] => 
// [["hello", "world"], ["goodbye", "moon"]]
const splitWordsOf = function (strings) {
  return strings.map(splitSentence);
};

// console.log(splitWordsOf(["hello"]));
// console.log(splitWordsOf(["hello", "hello world"]));
// console.log(splitWordsOf(["hello world goodbye moon"]));
// console.log(splitWordsOf(["hello world", "goodbye moon"]));

// ----------------------------------------------------------------------

const joinArray = function (list) {
  return list.join("");
};

// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(joinArray);
};

// console.log(joinedArraysOf([["a"]]));
// console.log(joinedArraysOf([["a", "b"]]));
// console.log(joinedArraysOf([["a", "b"], ["c"]]));
// console.log(joinedArraysOf([["a", "b"], ["c", "d"], ["a", "b", "c"]]));

// ----------------------------------------------------------------------

const getDoubleWords = function (word) {
  return word.repeat(2);
};

// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatedStringsOf = function (strings) {
  return strings.map(getDoubleWords);
};

// console.log(repeatedStringsOf(["hello", "hello world"]));
// console.log(repeatedStringsOf(["hi", "bye"]));

// ----------------------------------------------------------------------

const reverseTheArray = function (array) {
  return array.reverse();
};

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reversedArraysOf = function (arrays) {
  return arrays.map(reverseTheArray);
};

// console.log(reversedArraysOf([[1, 2, 3], [4, 5, 6]]));

// ----------------------------------------------------------------------

const isVowel = function (char) {
  const vowels = 'aeiou'.split('');
  return !vowels.includes(char);
};

const removeVowels = function (string) {
  return string.split('').filter(isVowel).join('');
};

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};

console.log(withoutVowelsOf(["apple", "banana", "grape"]));

// ----------------------------------------------------------------------