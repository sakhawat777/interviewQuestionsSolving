26# সঠিক উত্তর কোনটি?
নিচের 'b' অবজেক্ট এর ভিতরের 'a' প্রপার্টিটির ভ্যালু destructure করে কিভাবে নিরাপদ ভাবে প্রিন্ট করবেন? মনে রাখবেন 'c' অবজেক্টেটি নিজে সহ তার যেকোন প্রোপার্টি মিসিং থাকতে পারে।



const a = 5;
const b = {
    b: 1,
    c: {
        d: {
            a: 5,
        },
    },
};

1.	const {c: (d: (a: result)}} = b; console.log(result);

2.	const {c: {d: (a: result) = {}} = {}} = b; console.log(result);

3.	const (c: (d: (a) = {}}} = b; console.log(a);

4.	const {c: (d: {a: result}} = {})= b; console.log(result);

Ans: 2

In this expression, we are destructuring the object b and trying to access the value of a inside the d property of the c property.

Here's what's happening in the code:

The first expression const {c: (d: (a: result)}} = b; console.log(result); is not a valid syntax and would throw an error.

The second expression const {c: {d: (a: result) = {}} = {}} = b; console.log(result); uses destructuring and default values to safely extract the value of a inside the d property of the c property. If either the c or the d property is missing or if the a property is not defined, the default value of an empty object {} will be used.

The third expression const (c: (d: (a) = {}}} = b; console.log(a); is not a valid syntax and would throw an error.

The fourth expression const {c: (d: {a: result}} = {})= b; console.log(result); is not a valid syntax and would throw an error.

Therefore, the correct answer is number 2.




