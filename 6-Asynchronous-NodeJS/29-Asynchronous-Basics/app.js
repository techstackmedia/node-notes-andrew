console.log("Blocking or Syncronous operation");

const timerHandlerFunction = () => {
  console.log("Long running process executed in the background...");
};
const timeout = 2000;

setTimeout(timerHandlerFunction, timeout);

console.log("Another blocking or Syncronous operation");
