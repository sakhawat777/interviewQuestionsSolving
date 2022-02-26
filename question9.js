// Call by Value v.s Call by Reference in Js

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
