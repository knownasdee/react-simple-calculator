# react-simple-calculator
~ basic calculator built with react ~

A super simple calculator that supports addition and subtraction.

Check it out here: https://knownasdee.github.io/react-simple-calculator/

## Build Setup
```
# install dependencies
npm install

# serve at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run test
```

## Theory
Synchronous operations get executed in the order that they appear (top to botttom). The execution waits for each operation to complete, and will only after that execute the next operation. There is no predefined order in which asynchronous operations are executed. Execution doesn't wait for the asynchronous operation to complete and the result of such an operation will be handled once it becomes available.

JavaScript is synchronous and single-threaded (it executes one operation at a time). When someone labels JavaScript asynchronous, what they are referring to (probably) is that JavaScript has mechanisms that support asynchronous programming. Asynchronous programming makes it possible to express waiting for long-running actions without freezing the program during these actions. A common example of such an action is a server call that fetches resources. This style of programming is in JavaScript usually implemented using callbacks, functions that are called when the actions complete. An event loop schedules such callbacks to be called when appropriate, one after the other, so that their execution does not overlap. Asynchronous programming is made easier by promises, objects that represent actions that might complete in the future.
