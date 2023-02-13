18# ধরুন কোন একটি API থেকে আমরা নিচের response টি পাচ্ছি। কিন্তু API response অবজেক্ট এর সবগুলো প্রপার্টি সবসময় থাকবে এমন কোন গ্যারান্টি নেই। এক্ষেত্রে response object এর 'views' প্রপার্টি প্রিন্ট করার সবচেয়ে নিরাপদ উপায় কোনটি বা কোনগুলো যেন কোন এরর না হয়?

const response = {
    id: 1,
    name: "Md. Sakhawat Hossain",
    details: {
        founded: "2020",
        founded: "Nexus Creator",
        subscribers: "73K",
        views: "10,00,0000",
    },
};
1.	console.log(response.details.views);
2.	console.log(response?.details?.views);
3.	console.log(response?.details.views);
4.	console.log(response && response.details &&  response.details.views ? response.details.views : 0);

Ans: 2 and 4

The most safe way to print the 'views' property from the response object is option 2:

console.log(response?.details?.views);

This uses optional chaining, which will only access the property if it exists and will not throw an error if any of the intermediate objects are null or undefined.

Option 1:

console.log(response.details.views);

Will work as well, but if any of the intermediate objects 'response' or 'details' are null or undefined, it will throw an error.

Option 3:

console.log(response?.details.views);

will also throw an error, if the 'response' object is null or undefined, as the optional chaining is only applied to the first object.

Option 4:

console.log(response && response.details && response.details.views ? response.details.views : 0);

uses the logical AND operator to check if each object exists before accessing the next one, but it is more verbose and harder to read compared to the optional chaining.


Option 4 should not give an error in normal circumstances, as it uses the logical AND operator (&&) to check if each object exists before accessing the next one. If any of the objects are null or undefined, the expression will short-circuit and return a falsy value, and the default value of 0 will be printed.

However, it is possible that there could be a bug or unexpected behavior in the code, which could result in an error. In general, the use of optional chaining (Option 2) is considered a safer and more readable option for accessing nested properties in an object.
