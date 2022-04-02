// What is IIFE immediately invoked function expression and how it can be useful?
// An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created. IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations.
// An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created.

// IIFEs are very useful because they don’t pollute the global object, and they are a simple way to isolate variables declarations.

// This is the syntax that defines an IIFE:

// (function() {
//   /* */
// })()
// IIFEs can be defined with arrow functions as well:

// (() => {
//   /* */
// })()
// We basically have a function defined inside parentheses, and then we append () to execute that function: (/* function */)().
