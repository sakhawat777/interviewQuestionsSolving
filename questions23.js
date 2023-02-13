23# নিচের রিয়্যাক্ট কম্পোনেন্টটি কেন বারবার রিরেন্ডার হয়?
নিচে একটি সিম্পল রিয়্যাক্ট কম্পোনেন্ট আছে যেটির কোডে ভুল থাকার কারণে রান করলে বারবার রিরেন্ডার হবে। আপনাকে বলতে হবে কেন এটি হচ্ছে?

export default function Hello() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>{count}</p>
            <div>
                <button onClick={increment()}>Increment</button>
            </div>
        </div>
    );
}

Ans: 2

1.	কম্পোনেন্টটি আসলে সঠিক ভাবেই রেন্ডার হচ্ছে।

2.	কম্পোনেন্টটি রেন্ডার করার সময় increment () ফাংশনটি আটোমেটিক কল হয়ে যাবার কারণে বারবার বিয়েভার হচ্ছে।

3.	Increment ফাংশন এর ভিতরে ষ্টেট আপডেট এ ভুল আছে।

4.	setCount ফাংশনটির প্যারামিটার সঠিক নেই।

এই সমস্যার কারণে, আপনার কোডে onClick হ্যান্ডেলার এর ভিতরে increment ফাংশনটি কল না করলে স্ক্রিপ্ট চলবে। একই ধাপে আপনি onClick হ্যান্ডেলার এর ভিতরে ক্লায়াম্ব ফাংশন কল করতে পারেন।

<button onClick={() => increment()}>Increment</button>
