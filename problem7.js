// Why am i getting and empty array when fetching an api with react hooks?

// If you're component depends on data to render, you can always conditionally return null until your data is loaded.The useEffect() hook runs after the first render. Since you've initialized the data state with an empty array, the first render returns an empty array.

// How to call loading function with React useEffect only once

// If you only want to run the function given to useEffect after the initial render, you can give it an empty array as second argument.

// function MyComponent() {
//   useEffect(() => {
//     loadDataOnlyOnce();
//   }, []);

//   return <div> {/* ... */} </div>;
// }

// TL;DR
// useEffect(yourCallback, []) - will trigger the callback only after the first render.

// Detailed explanation

// useEffect runs by default after every render of the component (thus causing an effect).

// When placing useEffect in your component you tell React you want to run the callback as an effect. React will run the effect after rendering and after performing the DOM updates.

// If you pass only a callback - the callback will run after each render.

// If passing a second argument (array), React will run the callback after the first render and every time one of the elements in the array is changed. for example when placing useEffect(() => console.log('hello'), [someVar, someOtherVar]) - the callback will run after the first render and after any render that one of someVar or someOtherVar are changed.

// By passing the second argument an empty array, React will compare after each render the array and will see nothing was changed, thus calling the callback only after the first render.
