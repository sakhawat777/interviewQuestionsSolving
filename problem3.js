const typed = typeof NaN;
console.log(typed); // number

const emtArray = typeof [];
console.log(emtArray); // object

const emtObject = {};
console.log(typeof emtObject); // object

const number = isNaN(Number.NaN);
console.log(number); // true
console.log(Number.NaN === NaN); // false
console.log(Number.NaN == NaN); // false
