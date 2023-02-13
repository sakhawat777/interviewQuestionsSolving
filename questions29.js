29# নিচের কোডের আউটপুট কি হবে?
নিচে একটি for loop এর ভিতর 0 ms পর পর console এ ভ্যালু লগ করা হয়েছে। আপনাকে বলতে হবে কোডের ফাইনাল আউটপুট কি হবে?

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}

1.	2 3 4 5 6 7 8 9

2.	0 1 2 3 4 5 6 7 8 9

3.	10 10 10 10 10 10 10 10 10 10

4.	0 0 0 0 0 0 0 0 0 0

Ans: 3

The output of the code would be 3, because setTimeout is a JavaScript function that allows you to run a function after a specified amount of time. In this case, the time is set to 0 milliseconds, which means the function will be executed as soon as possible after the event loop gets to it.

However, because JavaScript is single-threaded, it can only run one piece of code at a time. This means that even though the setTimeout function is called multiple times, it will only start executing once the for loop has finished. By the time the setTimeout function starts executing, the value of i will be 10, since the for loop has completed. Therefore, each iteration of the setTimeout function logs the same value of 10 to the console.
