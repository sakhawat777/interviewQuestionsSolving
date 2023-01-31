// if i will pass empty in useeffect dependency so what happens
// Ans:It will run the program but get Warning: useEffect received a final argument that is not an array (instead, received `object`). When specified, the final argument must be an array.

// For example:
useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => res.json())
			.then((data) => setPosts(data))
			.catch((error) => console.log(error));
	}, {});

// Warning: useEffect received a final argument that is not an array (instead, received `object`). When specified, the final argument must be an array.
