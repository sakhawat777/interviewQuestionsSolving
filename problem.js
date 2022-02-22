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
