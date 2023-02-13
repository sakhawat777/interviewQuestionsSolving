21# নিচের কোডে কোথায় ভুল আছে?
সার্ভার থেকে ডাটা fetch করে console এ রেজাল্ট প্রিন্ট করার জন্য ব্যবহৃত নিচের কোডে কি কি ভুল আছে? একাধিক ভুল থাকলে সবগুলো ভুল কে দেখিয়ে দেয় শুধুমাত্র এমন অপশনটিই আপনাকে সিলেক্ট করতে হবে।

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const getData = async () => {
    const result = fetch(url);

    console.log(result);
}

getData();

Ans: 3

1.	fetch কল করার সময় await ব্যবহার করা হয়নি

2.	ভুল করে function & async ব্যবহার হয়েছে

3.	fetch কল করার সময় await ব্যবহার করা হয়নি এবং ডাটা ফ্লিম কো JSON রূপান্তর করা হয়নি

4.	getData () ফাংশনটি কল করার সময় তার আগে await ব্যবহার করা হয়নি

1, 3, and 4 উল্লেখ্য ভুল হয়েছে।

fetch কল করার সময় await ব্যবহার করতে হবে, এটি স্বয়ংক্রিয়ভাবে response টি রিটার্ন করে না। ডাটাকে JSON রূপান্তর করতে হবে। এছাড়াও, ফাংশনটি কল করার সময় তার আগে await ব্যবহার করতে হবে।

একটি ঠিক কোড:

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const getData = async () => {
const response = await fetch(url);
const result = await response.json();

console.log(result);
