const search = document.getElementById("search");
const span = document.querySelector("h2 span");

const callApi = (value) => {
  console.log(this);
  console.log(value);
};

//* Throttle Function
const throttleText = (fn, interval = 1000) => {
  let firstCall = true; //* This is used to run the function for the first time.

  let lastArgs = []; //* This is used to store the last arguments. Because the throttle function will run after the interval, so in args it will only store the value which is present at that time when the function call.

  let timerId = null;

  return function (...args) {
    console.log(this);
    lastArgs = args;

    //* It will immediately runs for the first time when user typing.
    if (firstCall) {
      fn.apply(this, lastArgs);
      firstCall = false;
      return;
    }

    if (timerId) return;

    //* For rest of the time, it will run after the interval.
    timerId = setTimeout(() => {
      timerId = null;
      fn.apply(this, lastArgs);
    }, interval);
  };
};

const logInput = throttleText(callApi, 1000);

search.addEventListener(
  "input",
  (e) => {
    logInput.call({ username: "DevFlux" }, e.target.value);
  },
  1000
);

//* Throttle function for update number.
const throttleNumber = (fn, interval = 1000) => {
  let timerId = null;
  return function (...args) {
    if (timerId) return;

    timerId = setTimeout(() => {
      timerId = null;
      fn(...args);
    }, interval);
  };
};

function updateNumber(e) {
  span.innerText = ++span.innerText;
}

document.addEventListener("mousemove", throttleNumber(updateNumber, 1000));
