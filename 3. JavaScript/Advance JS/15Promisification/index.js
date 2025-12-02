//* Promisification

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

//* Without Promise
function loadScript(src, callback) {
  const script = document.createElement("script");

  script.src = src;

  script.onload = () => callback(null, script);

  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// loadScript("test.js", (err, script) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Script Loaded");
//   }
// });

const loadScriptNew = promisify(loadScript);

loadScriptNew("test.js")
  .then(() => console.log("Done"))
  .catch((err) => console.log("Error Occur"));
