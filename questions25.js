25# নিচের DOM এলিমেন্টটির কন্টেন্ট পরিবর্তন করার সঠিক উপায় কোনটি?
নিচের h1 HTML এলিমেন্টটির ভিতরের text কন্টেন্ট পরিবর্তন করার সঠিক উপায় কোনটি?

<h1 class='text'>Hello World</h1>

Ans: 4

1.	document.querySelector('text').innerText = 'Something else'

2.	document.getElementById('text'). InnerText = 'Something else'

3.	document.querySelectorAll(".text').innerText = 'Something else'

4.	document.querySelector('.text').innerText = 'Something else'


.text ক্লাস নাম একটি CSS স্টিল সাপেক্ষে h1 এলিমেন্ট পরেখা করা হয়।

document.querySelector('.text') JavaScript এলিমেন্ট টেক্সট ভিতরের সম্পাদনের জন্য উপযোগ করা হয়।

innerText প্রোপার্টি টেক্সট ভিতরের কন্টেন্ট পরিবর্তন করার জন্য উপযোগ করা হয়।
