name = 'hello';
name[1] = 'i';
console.log(name); // hello
console.log(name[1]); // e

// What is JavaScript Hoisting?
// Hoisting is JavaScript's default behavior of moving declarations to the top.

// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

// Example 1 gives the same result as Example 2:

// Example 1
// x = 5; // Assign 5 to x

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x;                     // Display x in the element

// var x; // Declare x
// Example 2
// var x; // Declare x
// x = 5; // Assign 5 to x

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x;                     // Display x in the element
// To understand this, you have to understand the term "hoisting".

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// The let and const Keywords
// Variables defined with let and const are hoisted to the top of the block, but not initialized.

// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// Using a let variable before it is declared will result in a ReferenceError.

// The variable is in a "temporal dead zone" from the start of the block until it is declared:

// Example
// This will result in a ReferenceError:
// carName = "Volvo";
// let carName;

// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// Hoisting allows functions to be safely used in code before they are declared.

// Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended.

// Function hoisting
// One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

// catName("Tiger");

// function catName(name) {
//   console.log("My cat's name is " + name);
// }
// /*
// The result of the code above is: "My cat's name is Tiger"
// */
// Copy to Clipboard
// Without hoisting you would have to write the same code like this:

// function catName(name) {
//   console.log("My cat's name is " + name);
// }

// catName("Tiger");
// /*
// The result of the code above is the same: "My cat's name is Tiger"
// */
// Copy to Clipboard
// Variable hoisting
// Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.

// However JavaScript only hoists declarations, not initializations! This means that initialization doesn't happen until the associated line of code is executed, even if the variable was originally initialized then declared, or declared and initialized in the same line.

// Until that point in the execution is reached the variable has its default initialization (undefined for a variable declared using var, otherwise uninitialized).

// Note: Conceptually variable hoisting is often presented as the interpreter "splitting variable declaration and initialization, and moving (just) the declarations to the top of the code".

// Below are some examples showing what can happen if you use a variable before it is declared.

// var hoisting
// Here we declare then initialize the value of a var after using it. The default initialization of the var is undefined.

// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
// var num; // Declaration
// num = 6; // Initialization
// console.log(num); // Returns 6 after the line with initialization is executed.
// Copy to Clipboard
// The same thing happens if we declare and initialize the variable in the same line.

// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
// var num = 6; // Initialization and declaration.
// console.log(num); // Returns 6 after the line with initialization is executed.
// Copy to Clipboard
// If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted. Trying to read the variable before it is initialized results in ReferenceError exception.

// console.log(num); // Throws ReferenceError exception - the interpreter doesn't know about `num`.
// num = 6; // Initialization
// Copy to Clipboard
// Note however that initialization also causes declaration (if not already declared). The code snippet below will work, because even though it isn't hoisted, the variable is initialized and effectively declared before it is used.

// a = 'Cran'; // Initialize a
// b = 'berry'; // Initialize b

// console.log(a + "" + b); // 'Cranberry'
// Copy to Clipboard
// let and const hoisting
// Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. An exception will be thrown if a variable declared with let or const is read before it is initialized.

// console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
// let num = 6; // Initialization

// Hoisting is JavaScript's default behavior of moving declarations to the top.
// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

// Example 1 gives the same result as Example 2:

// Example 1
// x = 5; // Assign 5 to x

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x;                     // Display x in the element

// var x; // Declare x
// Example 2
// var x; // Declare x
// x = 5; // Assign 5 to x

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x;                     // Display x in the element
