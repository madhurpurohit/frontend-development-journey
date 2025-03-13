//* What is callback hell.

/* callback === ()=>{
        prepareOrder();
    }
    
    callback(); // Calling callback function.
*/

function placeOrder(callback) {
  console.log("Talking to Domino's.");

  setTimeout(() => {
    console.log("Order placed successfully.");
    callback();
  }, 2000);
}

// This is known as callback hell. In another word inside a callback we write another callback & so on. In simple words nested callbacks are called callback hell. In this code readability will be mashed or worse.
placeOrder(() => {
  prepareOrder(() => {
    pickupOrder(() => {
      deliverOrder();
    });
  });
});

function prepareOrder(callback) {
  console.log("Preparing the order.");

  setTimeout(() => {
    console.log("Order prepared successfully.");
    callback();
  }, 5000);
}

// prepareOrder();

function pickupOrder(callback) {
  console.log("Reaching the restaurant to pickup the order.");

  setTimeout(() => {
    console.log("Order picked up by delivery boy.");
    callback();
  }, 3000);
}

// pickupOrder();

function deliverOrder() {
  console.log("Reaching the customer's location.");

  setTimeout(() => {
    console.log("Order delivered successfully.");
  }, 5000);
}

// deliverOrder();
