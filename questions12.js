// What is Interfaces in TypeScript
// Interface is special type of structure. Like Building Prototype or Programming pseudo Code

// interface RectangleOptions {
// 	width: number;
// 	length: number;
// }
// function drawRectangle(options: RectangleOptions) {
// 	let width = options.width;
// 	let length = options.length;
// }
// drawRectangle({
// 	with: 50,
// 	length: 20,
// });
// Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface.

// The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking. This is also known as "duck typing" or "structural subtyping".

// An interface is defined with the keyword interface and it can include properties and method declarations using a function or an arrow function.

// Example: Interface Copy
// interface IEmployee {
//     empCode: number;
//     empName: string;
//     getSalary: (number) => number; // arrow function
//     getManagerName(number): string;
// }
// In the above example, the IEmployee interface includes two properties empCode and empName. It also includes a method declaration getSalaray using an arrow function which includes one number parameter and a number return type. The getManagerName method is declared using a normal function. This means that any object of type IEmployee must define the two properties and two methods.
