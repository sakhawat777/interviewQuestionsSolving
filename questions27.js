27# নিচের কোড এর আউটপুট কিভাবে কাজ করবে?
নিচে একটি রিয়্যাক্ট কম্পোনেন্ট দেয়া আছে। এখানে 'Increment' বাটনে চাপ দিলে 'count' এর ভ্যালু কয় করে বাড়বে?

export default function Hello() {
    const [count, setCount] = useState(0);

    const increment = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1);
        }
    };

    return (
        <div>
            <p>{count}</p>
            <div>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
}

1.	1 করে বাড়বে

2.	5 করে বাড়বে

3.	বাড়াব না

4.	ইনফিনিটি লুপ পড়ে যাবে

Ans= 1 But (Right Ans: 1)

5 করে বাড়বে।
কোডে একটি ইনফিনিট লুপ রয়েছে, যা 5 বার চলবে। প্রত্যেক লুপ পরপর setCount() ফাংশনের সাহায্যে count ভ্যালু 1 বাড়বে। তাই, ফুল 5 বার লুপ চলার ফলে count ভ্যালু 5 করে বাড়বে।
