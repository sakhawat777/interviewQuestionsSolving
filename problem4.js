// What is the difference between div tag vs fragment tag?
// when used div tag for hold multiple childs, div tag create extra node. That's getting slow the components or the application.
// Fragment is not create extra node. That's getting faster the components or the application.
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
