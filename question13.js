// what is javascript closure?
// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.
// The closure has three scope chains:
// it has access to its own scope — variables defined between its curly brackets
// it has access to the outer function’s variables
// it has access to the global variables
// To the uninitiated, this definition might seem like just a whole lot of jargon!
// But what really is a closure?
// A Simple closure
// Let’s look at a simple closure example in JavaScript:
// function outer() {
//    var b = 10;
//    function inner() {

//          var a = 20;
//          console.log(a+b);
//     }
//    return inner;
// }
// Here we have two functions:
// an outer function outer which has a variable b, and returns the inner function
// an inner function inner which has its variable called a, and accesses an outer variable b, within its function body
// The scope of variable b is limited to the outer function, and the scope of variable a is limited to the inner function.
// Let us now invoke the outer() function, and store the result of the outer() function in a variable X. Let us then invoke the outer() function a second time and store it in variable Y.
// function outer() {
//    var b = 10;
//    function inner() {

//          var a = 20;
//          console.log(a+b);
//     }
//    return inner;
// }
// var X = outer(); //outer() invoked the first time
// var Y = outer(); //outer() invoked the second time
// Let’s see step-by-step what happens when the outer() function is first invoked:
// Variable b is created, its scope is limited to the outer() function, and its value is set to 10.
// The next line is a function declaration, so nothing to execute.
// On the last line, return inner looks for a variable called inner, finds that this variable inner is actually a function, and so returns the entire body of the function inner.
// [Note that the return statement does not execute the inner function — a function is executed only when followed by () — , but rather the return statement returns the entire body of the function.]
// The contents returned by the return statement are stored in X.
// Thus, X will store the following:
// function inner() {
// var a=20;
// console.log(a+b);
// }
// Function outer() finishes execution, and all variables within the scope of outer() now no longer exist.
// This last part is important to understand. Once a function completes its execution, any variables that were defined inside the function scope cease to exist.
// The lifespan of a variable defined inside of a function is the lifespan of the function execution.
// What this means is that in console.log(a+b), the variable b exists only during the execution of the the outer() function. Once the outer function has finished execution, the variable b no longer exists.
// When the function is executed the second time, the variables of the function are created again, and live only up until the function completes execution.
// Thus, when outer() is invoked the second time:
// A new variable b is created, its scope is limited to the outer() function, and its value is set to 10.
// The next line is a function declaration, so nothing to execute.
// return inner returns the entire body of the function inner.
// The contents returned by the return statement are stored in Y.
// Function outer() finishes execution, and all variables within the scope of outer() now no longer exist.
// The important point here is that when the outer() function is invoked the second time, the variable b is created anew. Also, when the outer() function finishes execution the second time, this new variable b again ceases to exist.
// This is the most important point to realize. The variables inside the functions only come into existence when the function is running, and cease to exist once the functions completes execution.
// Now, let us return to our code example and look at X and Y. Since the outer() function on execution returns a function, the variables X and Y are functions.
// This can be easily verified by adding the following to the JavaScript code:
// console.log(typeof(X)); //X is of type function
// console.log(typeof(Y)); //Y is of type function
// Since the variables X and Y are functions, we can execute them. In JavaScript, a function can be executed by adding () after the function name, such as X() and Y().
// function outer() {
// var b = 10;
//    function inner() {

//          var a = 20;
//          console.log(a+b);
//     }
//    return inner;
// }
// var X = outer();
// var Y = outer();
// //end of outer() function executions
// X(); // X() invoked the first time
// X(); // X() invoked the second time
// X(); // X() invoked the third time
// Y(); // Y() invoked the first time
// When we execute X() and Y(), we are essentially executing the inner function.
// Let us examine step-by-step what happens when X() is executed the first time:
// Variable a is created, and its value is set to 20.
// JavaScript now tries to execute a + b. Here is where things get interesting. JavaScript knows that a exists since it just created it. However, variable b no longer exists. Since b is part of the outer function, b would only exist while the outer() function is in execution. Since the outer() function finished execution long before we invoked X(), any variables within the scope of the outer function cease to exist, and hence variable b no longer exists.
// How does JavaScript handle this?
// Closures
// The inner function can access the variables of the enclosing function due to closures in JavaScript. In other words, the inner function preserves the scope chain of the enclosing function at the time the enclosing function was executed, and thus can access the enclosing function’s variables.
// In our example, the inner function had preserved the value of b=10 when the outer() function was executed, and continued to preserve (closure) it.
// It now refers to its scope chain and notices that it does have the value of variable b within its scope chain, since it had enclosed the value of b within a closure at the point when the outer function had executed.
// Thus, JavaScript knows a=20 and b=10, and can calculate a+b.
// You can verify this by adding the following line of code to the example above:
// function outer() {
// var b = 10;
//    function inner() {

//          var a = 20;
//          console.log(a+b);
//     }
//    return inner;
// }
// var X = outer();
// console.dir(X); //use console.dir() instead of console.log()
// Open the Inspect element in Google Chrome and go to the Console. You can expand the element to actually see the Closure element (shown in the third to last line below). Notice that the value of b=10 is preserved in the Closure even after the outer() function completes its execution.
