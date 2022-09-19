// Q16 : Write The Output after analysing the code </h3>

function createIncrement() {
	let count = 0;
	function increment() {
		count++;
	}
	let message = `Count is ${count}`;
	function log() {
		console.log(message);
	}

	return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

// Output: Count is 0
