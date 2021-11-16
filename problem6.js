// Difference Between == and === in JavaScript

// What is == in JavaScript?
// Double equals (==) is a comparison operator, which transforms the operands having the same type before comparison.
// So, when you compare string with a number, JavaScript converts any string to a number. An empty string is always converts to zero. A string with no numeric value is converts to NaN (Not a Number), which returns false.

// What is === in JavaScript?
// === (Triple equals) is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type. This operator performs type casting for equality. If we compare 2 with “2” using ===, then it will return a false value.

// Is === Faster than ==? A Quick Look at the Performance of the Two Operators
// In theory, when comparing variables with identical types, the performance should be similar across both operators because they use the same algorithm. When the types are different, triple equals operator (===) should perform better than double equals (==) because it doesn’t have to do the extra step of type coercion. But does it?
