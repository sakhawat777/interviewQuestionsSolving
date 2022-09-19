//Question 15
//const list = [0,1,0,1,1,1,0,1,1];
//return the maximum number of consecutive 1's in the array

let i = 0;
let count = 0;
let result = 0;
let list = [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0];
for (i; i < list.length; i++) {
	if (list[i] == 0) {
		count = 0;
	} else {
		count++;
		result = Math.max(result, count);
	}
}
console.log(result);
