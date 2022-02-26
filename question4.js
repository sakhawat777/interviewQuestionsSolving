// What is the difference between div tag vs fragment tag?

// when used div tag for hold multiple childs, div tag create extra DOM node. That's getting slow the components or the application.
// Fragment is not create extra DOM node. That's getting faster the components or the application.

// Why are Fragments in React 16 better than container divs?

// 1. It’s a tiny bit faster and has less memory usage (no need to create an extra DOM node). This only has a real benefit on very large and/or deep trees, but application performance often suffers from death by a thousand cuts. This is one cut less.
// 2. Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationship, and adding divs in the middle makes it hard to keep the desired layout while extracting logical components.
// 3. The DOM inspector is less cluttered. :-)
// You can find the descriptions of some other use cases in this React issue: Add fragment API to allow returning multiple components from render

// Adding to all answers above there is one more advantage: code readability, Fragment component supports a syntactic sugar form, <>. Thus the code in your question can be written more easily as:

// render() {
//   return (
//     <>
//       Some text.
//       <h2>A heading</h2>
//       More text.
//       <h2>Another heading</h2>
//       Even more text.
//     </>
//   );
// }

import React, { Fragment } from 'react';

const problem4 = () => {
	return (
		// Fragment
		// <> </>
		// or
		<Fragment></Fragment>

		// <div>

		// </div>
	);
};

export default problem4;
