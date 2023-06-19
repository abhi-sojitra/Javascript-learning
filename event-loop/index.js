console.log('Start');

// Asynchronous task
setTimeout(function () {
  console.log('Async Task 1');
}, 2000);

// Synchronous task
console.log('Sync Task 1');

// Asynchronous task
setTimeout(function () {
  console.log('Async Task 2');
}, 1000);

// Synchronous task
console.log('Sync Task 2');

console.log('End');
