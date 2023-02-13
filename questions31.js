31# useEffect হুক কখন কল হয়?
React এর useEffect হুকের কলব্যাক ফাংশনটি কখন রান হয়? মনে রাখবেন আপনাকে সবচেয়ে সঠিক উত্তরটি নির্বাচন করতে হবে। আংশিক সঠিক উত্তর গ্রহণযোগ্য নয়।

1.	Synchronously যখন কম্পোনেন্ট মাউন্ট হয় তখনই রান হয়

2.	কম্পোনেন্টটি যখন আনমাউন্ট হয় তখন রান হয়

3.	কম্পোনেন্টটি মাউন্ট হবার পর একবার রান হয়

4.	কম্পোনেন্ট মাউন্ট করার পর এবং যখনই dependencies গুলো পরিবর্তন হয় তখন

Ans: 4

React's useEffect hook is a function that allows you to manage side effects in your functional components. It is called when a component is mounted (added to the DOM) and after every render. The hook takes two arguments: a callback function that contains the effect code, and a dependency array that specifies the conditions under which the effect should run.

When a component is mounted, useEffect is called and the effect code is executed. If the component updates (re-renders) and the values in the dependency array have changed, useEffect is called again and the effect code is re-executed. If the values in the dependency array have not changed, the effect code is not executed. This behavior ensures that the effect code is only run when necessary, improving performance and reducing unnecessary re-renders.

So, the correct answer is: 4. useEffect is called when a component is mounted and after every render, and it re-executes the effect code when the values in the dependency array change.



