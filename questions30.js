30# নিচের কোডে কি ভুল আছে?
ধরে নেই আমাদের দুটি .js ফাইল আছে। একটি হলো sum.js এবং আরেকটি হলো index.js এবং দুটি ফাইল একই ফোল্ডারে আছে। index.js ফাইলটি তে sum() ফাংশনটি কল করে সঠিকভাবে আউটপুট দেখানোর ক্ষেত্রে নিচের কোডে কি ভুল আছে?

// sum.js

export default const sum = (a, b) => {
    return a + b;
}


// index.js

import sum from "./sum.js";

console.log(sum(3, 4));

1.	Sum: ভ্যারিয়েবলটি অবশ্যই named export করতে হবে।

2.	Sum ভ্যারিয়েবলটি এক্সপোর্ট করার সময় ডিফল্ট ভাবে এক্সাপোর্ট করাই সম্ভব না।

3.	Sum ভ্যারিয়েবলটি এক্সক্সপোট করার সময় ডিফল্ট এক্সপোর্ট করা হয়েছে কিন্তু index. js ফাইল named import করা হয়েছে

4.	Sum ভ্যারিয়েবলটি এক্সপোর্ট করার সময় ডিফল্ট এক্সপোর্ট করা হয়েছে কিন্তু সেটি const হওয়ায় এক লাইনে এভাবে এক্সাপোট করা যাবেনা।

Ans: 1, 3, and 4

আপনার কোডে "export default const sum" এবং এই একটি লুগ সঠিক নয়। এটি কোনো সঠিক লুগ নয়। "export default" এবং "const" একই লাইনে লিখা যাবে না।

আপনার কোডে "import sum from "./sum.js";" লিখে আছে। এটি named export হিসেবে এক্সপোর্ট করা আছে, তাই আপনাকে named import করতে হবে।

সঠিক কোড হলো:

// sum.js

export const sum = (a, b) => {
return a + b;
}

// index.js

import { sum } from "./sum.js";

console.log(sum(3, 4));




