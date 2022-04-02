const typed = typeof NaN;
console.log(typed); // number

const emtArray = typeof [];
console.log(emtArray); // object

const emtObject = {};
console.log(typeof emtObject); // object

const name = ' ';
console.log(typeof name); // string

const p = null;
console.log(typeof p); // object

const q = undefined;
console.log(typeof q); // undefined

const result = void (1 + 1);
console.log(result); // undefined
// void operator
// The void operator evaluates the given expression and then returns undefined.
void 2 == '2'; // (void 2) == '2', returns false
void (2 == '2'); // void (2 == '2'), returns undefined

const number = isNaN(Number.NaN);
console.log(number); // true
console.log(Number.NaN === NaN); // false
console.log(Number.NaN == NaN); // false
