22# নিচের ডাটা সেট থেকে সবগুলো person এর age এর যোগফল বের বের করার সঠিক উপায় কোনটি?
নিচের ডাটা সেট থেকে সবগুলো person এর age এর যোগফল জাভাস্ক্রিপ্টের array.reduce() মেথড ব্যবহার করে বের করার সঠিক উপায় কোনটি?

const persons = [
    {
        name: "Sumit",
        age: 37,
    },
    {
        name: "Saad",
        age: 23,
    },
    {
        name: "Akash",
        age: 22,
    },
];

Ans: 1

1.	console.log(persons.reduce((total, person) => total + person. age, 0))

2.	console.log(persons.reduce((total, person) => total person. age))

3.	console.log(persons.reduce((total, age)-> total + age))

4.	console.log(persons.reduce((total, age) -> total + age, 0));


console.log(persons.reduce((total, person) => total + person.age, 0)) এই উপায় সঠিক।

console.log(persons.reduce((total, person) => total person.age)) এই উপায় গ্রহণযোগ্য নয়, কারণ এটি + সম্পাদক ছাড়াই লেখা হয়েছে।

console.log(persons.reduce((total, age)-> total + age)) এই উপায় গ্রহণযোগ্য নয়, কারণ এটি person অবজেক্ট নেয়া হয়েছে, যার age ফীল্ড বের করতে হবে।

console.log(persons.reduce((total, age) -> total + age, 0)); এই উপায় গ্রহণযোগ্য নয়, কারণ এটি person.age বাদ দেয়া হয়েছে, যার জন্য ইনপুট অবজেক্ট কে অনুযায়ী স্থানান্তর করতে হবে।
