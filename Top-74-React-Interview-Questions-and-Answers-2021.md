Following are frequently asked React interview questions for freshers as well as experienced React developers.

1. What is Reactjs?

React is a JavaScript library that makes building user interfaces easy. It was developed by Facebook.

2. Does React use HTML?

No, It uses JSX, which is similar to HTML.

3. When was React first released?

React was first released on March 2013.

4. Give me two most significant drawbacks of React

Integrating React with the MVC framework like Rails requires complex configuration.
React require the users to have knowledge about the integration of user interface into MVC framework.

5. State the difference between Real DOM and Virtual DOM
   Real DOM Virtual DOM
   It is updated slowly. It updates faster.
   It allows a direct update from HTML. It cannot be used to update HTML directly.
   It wastes too much memory. Memory consumption is less

6. What is Flux Concept In React?

Facebook widely uses flux architecture concept for developing client-side web applications. It is not a framework or a library. It is simply a new kind of architecture that complements React and the concept of Unidirectional Data Flow.

7. Define the term Redux in React

Redux is a library used for front end development. It is a state container for JavaScript applications which should be used for the applications state management. You can test and run an application developed with Redux in different environments.

8. What is the ‘Store’ feature in Redux?

Redux has a feature called ‘Store’ which allows you to save the application’s entire State at one place. Therefore all it’s component’s State are stored in the Store so that you will get regular updates directly from the Store. The single state tree helps you to keep track of changes over time and debug or inspect the application.

9. What is an action in Redux?

It is a function which returns an action object. The action-type and the action data are always stored in the action object. Actions can send data between the Store and the software application. All information retrieved by the Store is produced by the actions.

10. Name the important features of React

Here, are important features of React.

Allows you to use 3rd party libraries
Time-Saving
Faster Development
Simplicity and Composable
Fully supported by Facebook.
Code Stability with One-directional data binding
React Components 11) Explain the term stateless components

Stateless components are pure functions that render DOM-based solely on the properties provided to them.

12. Explain React Router

React Router is a routing library which allows you to add new screen flows to your application, and it also keeps URL in sync with what’s being shown on the page.

13. What are the popular animation package in React ecosystem?

Popular animation package in React ecosystem are

React Motion
React Transition Group 14) What is Jest?

Jest is a JavaScript unit testing framework created by Facebook based on Jasmine. It offers automated mock creation and a jsdom environment. It is also used as a testing component.

15. What is dispatcher?

A dispatcher is a central hub of app where you will receive actions and broadcast payload to registered callbacks.

16. What is meant by callback function? What is its purpose?

A callback function should be called when setState has finished, and the component is re-rendered.

As the setState is asynchronous, which is why it takes in a second callback function.

17. Explain the term high order component

A higher-order component also shortly known as HOC is an advanced technique for reusing component logic. It is not a part of the React API, but they are a pattern which emerges from React’s compositional nature.

18. Explain the Presentational segment

A presentational part is a segment which allows you to renders HTML. The segment’s capacity is presentational in markup.

19. What are Props in react js?

Props mean properties, which is a way of passing data from parent to child. We can say that props are just a communication channel between components. It is always moving from parent to child component.

20. What is the use of a super keyword in React?

The super keyword helps you to access and call functions on an object’s parent.

21. Explain yield catchphrase in JavaScript

The yield catchphrase is utilized to delay and resume a generator work, which is known as yield catchphrase.

22. Name two types of React component

Two types of react Components are:

Function component
Class component 23) Explain synthetic event in React js

Synthetic event is a kind of object which acts as a cross-browser wrapper around the browser’s native event. It also helps us to combine the behaviors of various browser into signal API.

24. What is React State?

It is an object which decides how a specific component renders and how it behaves. The state stores the information which can be changed over the lifetime of a React component.

25. How can you update state in react js?

A state can be updated on the component directly or indirectly.

26. Explain the use of the arrow function in React

The arrow function helps you to predict the behavior of bugs when passed as a callback. Therefore, it prevents bug caused by this all together.

27. What are the lifecycle steps of React?

Important lifecycle steps of React js are:

Initialization
State/Property updates
Destruction are the lifecycle of React 28) State the main difference between Pros and State

The main difference the two is that the State is mutable and Pros are immutable.

29. Explain pure components in React js

Pure components are the fastest components which can replace any component with only a render(). It helps you to enhance the simplicity of the code and performance of the application.

30. What kind of information controls a segment in React?

There are mainly two sorts of information that control a segment: State and Props

State: State information that will change, we need to utilize State.
Props: Props are set by the parent and which are settled all through the lifetime of a part. 31) What is ‘create-react-app’?

‘create-react-app’ is a command-line tool which allows you to create one basic react application.

32. Explain the use of ‘key’ in react list

Keys allow you to provide each list element with a stable identity. The keys should be unique.

33. What are children prop?

Children props are used to pass component to other components as properties. You can access it by using

{props.children} 34) Explain error boundaries?

Error boundaries help you to catch Javascript error anywhere in the child components. They are most used to log the error and show a fallback UI.

35. What is the use of empty tags <> </>?

Empty tags are used in React for declaring fragments.

36. Explain strict mode

StrictMode allows you to run checks and warnings for react components. It runs only on development build. It helps you to highlight the issues without rendering any visible UI.

37. What are reacted portals?

Portal allows you to render children into a DOM node. CreatePortalmethod is used for it.

38. What is Context?

React context helps you to pass data using the tree of react components. It helps you to share data globally between various react components.

39. What is the use of Webpack?

Webpack in basically is a module builder. It is mainly runs during the development process.

40. What is Babel in React js?

Babel, is a JavaScript compiler that converts latest JavaScript like ES6, ES7 into plain old ES5 JavaScript that most browsers understand.

41. How can a browser read JSX file?

If you want the browser to read JSX, then that JSX file should be replaced using a JSX transformer like Babel and then send back to the browser.

42. What are the major issues of using MVC architecture in React?

Here are the major challenges you will face while handling MVC architecture:

DOM handling is quite expensive
Most of the time applications were slow and inefficient
Because of circular functions, a complex model has been created around models and ideas 43) What can be done when there is more than one line of expression?

At that time a multi-line JSX expression is the only option left for you.

44. What is the reduction?

The reduction is an application method of handling State.

45. Explain the term synthetic events

It is actually a cross-browser wrapper around the browser’s native event. These events have interface stopPropagation() and preventDefault().

46. When should you use the top-class elements for the function element?

If your element does a stage or lifetime cycle, we should use top-class elements.

47. How can you share an element in the parsing?

Using the State, we can share the data.

48. Explain the term reconciliation

When a component’s state or props change then rest will compare the rendered element with previously rendered DOM and will update the actual DOM if it is needed. This process is known as reconciliation.

49. Ho can you re-render a component without using setState() function?

You can use forceUpdate() function for re-rending any component.

50. Can you update props in react?

You can’t update props in react js because props are read-only. Moreover, you can not modify props received from parent to child.

51. Explain the term ‘Restructuring.’

Restructuring is extraction process of array objects. Once the process is completed, you can separate each object in a separate variable.

52. Can you update the values of props?

It is not possible to update the value of props as it is immutable.

53. Explain the meaning of Mounting and Demounting

The process of attaching the element to the DCOM is called mounting.
The process of detaching the element from the DCOM is called the demounting process. 54) What is the use of ‘prop-types’ library?

‘Prop-types’ library allows you to perform runtime type checking for props and similar object in a recent application.

55. Explain react hooks

React hooks allows you to use State, and other React features without writing a class.

56. What are Fragments?

You can use fragment keyword to group a list of children components without using any extra nodes to the DOM.

For example :

render() {

return (
);
} 57) What is the main difference between createElement and cloneElment?

createElement is used by react to create react elements.
cloneElement is used to clone an element and pass it new props. 58) What are Controlled Components?

Controlled components are component which controls the input elements.

59. Why do you need to use props.children?

This props.children allow you to pass a component as data to other components.

60. List down some of the methods in a react-dom package

Important methods for react-dom packages are:

render()
hydrate()
createPortal()
unmountComponentAtNode()
findDOMNode() 61) How can we do server-side rendering in React?

We can use reaction serve to do the server-side rendering.

62. State the difference between getIntialState() and constructor()?

If you want to create one component by extending ‘React. Component’, the constructor helps you to initialize the State. But, if you want to create by using ‘Reat.createClass.’ then you should use ‘genInitiaState.’

63. What is refs?

Ref are an attribute of the DOM elements. The primary purpose of the refs is to find the DOM elements easily.

64. What is ComponentWillMount()

This function is called after the DOM element removes from DOM, and it will swipe the memory, which helps you to increase the access space.

65. How to dispatch the data in-store?

We can dispatch the data to another component which should be based on the action which stores the parent component.

66. How will be you able to handle more action using redux?

In order to create the same component in more action flow, we are using the same functionality in various modules.

67. How can you spill the reducers?

We can spill the rescues based on the event actions. That action should be split in separate modules.

68. Name any five predefined prototypes used in React

Most important protoype used in React js are:

number
string
array
object
element 69) What is the purpose of using bindActionsCreators?

BindActionCreator helps you to bind the event based on the action dispatcher to the HTML element.

70. What is REFS in React

Ref is a reference to the element. It should be avoided in most cases. However, sometimes it is used when you need to access DOM or instance of the component directly.

71. Can JSX element be attached to other JSX components?

Yes, you can use attach JSX element with other JSX components which is very much similar to nesting HTML elements.

72. What is the Current Stable Version of React?

The current stable version of React is version 17.5

73. Name out an important feature of Redux workflow features

Important features of Redux workflow are:

Reset: Helps you to reset the State of the Store
Revert: Allows you to roll back to the last committed State
Sweep: All disable action that you might fire by mistake will be removed
Commit: Helps you to make the current State the initial State. 74) State the difference between React JS and React Native

React js is a front end open-source JavaScript library used for building UIs.

Rect Native, is an open-source, mobile framework which allows developers to user React on platforms like Android and iOS.
