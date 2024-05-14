// 1. How many callbacks queues in Node.js and what are they? Give examples to explain how different callbacks are enqueued in different queues.

// Answer: There are 6 types of callbacks queues in Node.js:
// 1. Timer Queue: consists of callbacks of expired timers added using setTimeout or interval functions added using setInterval.
// 2. I/O Callback Queue: completed IO events
// 3. Check Queue: Callbacks added using setImmediate function
// 4. Close Callback Queue: close event callbacks
// 5. Promises Queue: Includes other microtasks such as resolved promise callbacks
// 6. Next Ticks Queue: Callbacks added using process.nextTick function
