// 3. What's the output of the code below? Try to understand how it works as we explained in the class.

const fs = require('fs');
fs.readFile('hello.txt', () => {
  console.log('readFile....');
});
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('Immediate'));

//Answer: The output of the code is:
// timeout
// Immediate
// readFile....

// Explanation: The code reads the file hello.txt asynchronously using fs.readFile function. 
// The callback function is enqueued in the `Polling` first before pushing to I/O Callback Queue.
// The setTimeout function is enqueued in the Timer Queue with a delay of (1, 0) mean 1 millisecond.
// The setImmediate function is enqueued in the Check Queue. The order of execution is as follows:
// 1. The setTimeout function is executed first and prints 'timeout' to the console.
// 2. The setImmediate function is executed next and prints 'Immediate' to the console.
// 3. The callback function for fs.readFile is executed last and prints 'readFile....' to the console because it is enqueued in the Polling Queue and it can not call I/O Callback Queue.
// This demonstrates the event loop mechanism in Node.js where different types of callbacks are enqueued in different queues and executed in a specific order based on their priority.
