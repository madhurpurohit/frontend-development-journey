//* Method1:- Using global variable, because when a function again call than it gets new memory & every variable inside this function also gets new memory allocation, that's why we create a global variable to memoized things.
const cache = {};

function doHeavyCalculation(x) {
  if (cache[x]) return cache[x];

  const startTime = Date.now();
  let currentTime = startTime;
  while (startTime + 1000 > currentTime) {
    currentTime = Date.now();
    console.log("Calculating...", currentTime - startTime);
  }

  const result = +Math.sqrt(x).toFixed(3); //* In this we use + because of toFixed() it return string so we convert it to number.

  cache[x] = result;
  return result;
}

//! But their is a flow in above method, as cache variable is global than anyone can modify it manually or using any other function, which is not good practice.

//* Method2:- To prevent the flow/drawback of above method we wrap the whole code inside a function & return the doHeavyCalculation function, so when it return it will be closure with cache variable which is only accessible & modified by the doHeavyCalculation function.

function getYourMemoizedFunction() {
  const cache = {};

  function doHeavyCalculation(x) {
    if (cache[x]) return cache[x];

    const startTime = Date.now();
    let currentTime = startTime;
    while (startTime + 5000 > currentTime) {
      currentTime = Date.now();
      // console.log("Calculating...", currentTime - startTime);
    }

    const result = +Math.sqrt(x).toFixed(3); //* In this we use + because of toFixed() it return string so we convert it to number.

    cache[x] = result;
    return result;
  }

  return doHeavyCalculation;
}

const memoizedDoHeavyCalculation = getYourMemoizedFunction();

console.log(memoizedDoHeavyCalculation(16));
console.log(memoizedDoHeavyCalculation(19));
console.log(memoizedDoHeavyCalculation(26));
console.log(memoizedDoHeavyCalculation(36));
console.log(memoizedDoHeavyCalculation(56));
console.log(memoizedDoHeavyCalculation(16));
