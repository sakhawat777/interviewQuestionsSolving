24# React এ সঠিকভাবে dynamic className দেয়ার উপায় কি?
যদি React এ আমাদের JSX কোডে সঠিকভাবে dynamic className দিতে চাই তাহলে সেটা কিভাবে করতে পারি?

Ans: 3
<SomeComponent className={'classA classB ${dynamicClassName}'} />


1.	SomeComponent className=('classA classB $(dynamicClassName}'} />

2.	<SomeComponent className={`classA classB SdynamicClassName`}

3.	<SomeComponent className(`classA classB $(dynamicClassName} `} />

4.	<SomeComponent className= `classA classB $(dynamicClassName}`

Here, dynamicClassName is a variable in your JavaScript code that holds the string value of the dynamic class name. The curly braces {} allow you to embed expressions (in this case, the string concatenation of multiple class names) into the JSX. The backticks allow you to define a template literal, which is a type of string that allows for string interpolation (inserting values into the string).
