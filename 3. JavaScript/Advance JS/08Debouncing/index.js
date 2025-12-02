const search = document.getElementById("search");

const handleInput = (e) => {
  console.log(e.target.value);
};

//* Debounce function
const debounce = (func, wait) => {
  let timeoutId;
  return (...args) => {
    console.log("Calling Debounce");
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

const debouncedCallApi = debounce(handleInput, 500);

search.addEventListener("input", debouncedCallApi);
