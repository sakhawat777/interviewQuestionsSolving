// Difference between forEach and for loop in Javascript

// For Loop

// 1. It is one of the original ways of iterating over an array.
// 2. It is faster in performance.
// 3. The break statement can be used to come out from the loop.
// 4. The parameters are the iterator, counter, and incrementor.
// 5. It works with the await keyword.

// forEach Loop

// 1. It is a newer way with lesser code to iterate over an array.
// 2. It is slower than the traditional loop in performance.
// 3. The break statement cannot be used because of the callback function.
// 4. The parameters are the iterator, index of item, and array to iterate.
// 5. The await keyword cannot be used due to the callback function. It may lead to incorrect output.

// Differences between forEach() and map() methods:
// map returns a new array.
// forEach has no return value.
// Map() : If you use map then map can return new array by iterating main array.
// Foreach() : If you use Foreach then it can not return anything for each can iterating main array.

// forEach()

// 1. The forEach() method does not create a new array based on the given array.
// 2. The forEach() method returns “undefined“.
// 3. The forEach() method doesn’t return anything hence the method chaining technique cannot be applied here.

// map()

// 1. The map() method creates an entirely new array.
// 2. The map() method returns the newly created array according to the provided callback function.
// 3. With the map() method, we can chain the other array Instance methods i.e returned value of the map() method invokes the next method in the chain.

// Conclusion: As they are working with very few differences, also the execution speed is not significant to consider so it is time to think about, which one to choose? If you want the benefits of the return value or somehow you don’t want to change the original array then proceed with the map() otherwise if you are just interested to iterate or perform the non-transformation process on the array, forEach() could be the better choice.
