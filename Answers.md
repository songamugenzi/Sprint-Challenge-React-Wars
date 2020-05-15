# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

When a page has data that changes over time at high rates, there are lots of DOM operations going on in the background causing the app to render slowly. ReactJS solves this problem by using a virtual DOM. When a page is rendered using React, the DOM tree structure is stored. When UI is updated, REACT compares the new DOM tree to the old one and only updates the changes which improves performance considerably.

1. Describe component state.

Component state stores React component data and it can be modified based on user action or other actions. When a component state is changed, React will re-render the component to the browser.

1. Describe props.

Similar to function arguments in JS and  attributes in HTML, Props are arguments passed into React components.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

A side effect is anything that affects something outside the scope of the function being executed. Things like a network request which has your code communicating with a third party and making the request, causing logs to be recorded, caches to be saved or updated, all sorts of effects that are outside the function. Side effects can be synced to changes of certain state or props using the dependency array.
