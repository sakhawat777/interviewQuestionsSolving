// Call by Value Vs Call by Reference in JavaScript
// Difficulty Level : Basic
// Call by Value: Suppose there is a variable named “a”. Now, we store a primitive value(boolean, integer, float, etc) in the variable “a”.

// Let us store an integer value in “a”, Let a=5. Now the variable “a” stores 5 and has an address location where that primitive value sits in memory.

// Now, suppose we copy the value of “a” in “b” by assignment (a=b). Now, “b” points to a new location in memory, containing the same data as variable “a”.

// Thus, a=b=5 but both points to separate locations in memory.

// This approach is called call by value where 2 variables become the same by copying the value but in 2 separate spots in the memory.

// Features of call by value:

// Function arguments are always passed by value.
// It copies the value of a variable passed in a function to a local variable.
// Both these variables occupy separate locations in memory. Thus, if changes are made in a particular variable it does not affect the other one.
// Example:

// <script type="text/javascript">
//     // By value (primitives)
//     var a = 5;
//     var b;
//     b = a;
//     a = 3;
//     console.log(a);
//     console.log(b);
// </script>
// Output: “b” was just a copy of “a”. It has its own space in memory. When we change “a” it does not have any impact on the value of “b”.

// By value

// Call by reference: Let’s say, we have an object stored in the variable “a”. The variable stores the location or the address where the object lives. Now we set b=a. Now that new variable “b” instead of pointing to a new location in the memory, points to the same location where “a” does. No new object is created, no copy is created. Both the variables point to the same object. This is like having 2 names.

// This is call by reference. It behaves quite differently from by value. All objects interact by reference.

// Features of By reference:

// In JavaScript, all objects interact by reference.
// If an object is stored in a variable and that variable is made equal to another variable then both of them occupy the same location in memory.
// Changes in one object variable affect the other object variable.
// Example: Over here, when we set d=c, “d” points to the same location in memory where “c” does. At first, we have a name-value pair stored in “c”. Now when we change a property using “c”, it changes the property in “d” also because both point to the same object. Changes in one it affects.

// <script>

//     // By reference (all objects (including functions))
//     var c = { greeting : 'Welcome' };
//     var d;
//     d = c;

//     // Mutating the value of c
//     c.greeting = 'Welcome to geeksforgeeks';
//     console.log(c);
//     console.log(d);
// </script>
// Output:

// By reference

// Difference between call by value and call by reference:

// Call by value

// Call by reference

// The original variable is not modified on changes in other variables.	The original variable gets modified on changes in other variables.
// Actual and copied variables will be created in different memory locations.	Actual and copied variables are created in the same memory location.
// On passing variables in a function, any changes made in the passed variable will not affect the original one.	On passing variables in a function, any changes made in the passed parameter will update the original variable’s reference too.

// The concepts “called by value” and “called by reference” refers to the way you pass an argument to a function.
// Call by value
// Javascript passes by value the primitive data types which are: Boolean, null, undefined, String and Number.
// If you pass the argument by value it will make a new copy of variable inside the function, without affection the original variable.
// let bike = 1;
// var newBike = (wheels) => {
// wheels = 2
// console.log(wheels)
// }
// newBike(bike)
// console.log(bike)
// What the console returns is
// 2 //wheels
// 1 //bike
// Call by reference
// Javascript passes by reference the object data types which are: Array, Function, and Object.
// If you pass the argument by reference the change will be produced not only inside the function, but it will also affect the original variable.
// When you pass an object you are calling by reference
// let bike= {id: 1}
// let newBike= (wheels) => {
// wheels.id = 2
// console.log(wheels.id)
// }
// change(bike)
// console.log(bike)
// What the console returns is
// 2 // wheels.id
// {id: 2} //bike
