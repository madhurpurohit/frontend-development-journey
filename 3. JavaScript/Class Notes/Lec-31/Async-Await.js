//* Async Await.
const cart = ["Pizza", "Burger", "French Fries"];

function placeOrder(cart) {
  console.log("Talking to Domino's.");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const food_available = true;

      if (food_available) {
        console.log("Order placed successfully.");
        const order = {
          order_id: 25413,
          food: cart,
          restaurant: "Dominos, New york City, Indore",
          location: "Indore",
        };
        resolve(order); // This data will go inside promise.
      } else {
        reject("Items out of stock.");
      }
    }, 2000);
  });

  return promise;
}

function prepareOrder(order) {
  console.log("Preparing the order.");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const food_available = true;

      if (food_available) {
        console.log("Order prepared successfully.");

        const foodDetails = {
          token_no: 1245,
          restaurant: order.restaurant,
          location: order.location,
        };
        resolve(foodDetails);
      } else {
        reject("Restaurant rejects your order.");
      }
    }, 5000);
  });

  return promise;
}

function pickupOrder(foodDetails) {
  console.log("Reaching the restaurant to pickup the order.");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const food_available = true;

      if (food_available) {
        console.log("Order picked up by delivery boy.");

        const dropLocation = foodDetails.location;
        resolve(dropLocation);
      } else {
        reject("Delivery boy cancels your order.");
      }
    }, 3000);
  });

  return promise;
}

function deliverOrder(dropLocation) {
  console.log("Reaching the customer's location.");

  setTimeout(() => {
    console.log("Order delivered successfully.");
  }, 5000);
}

// placeOrder(cart)
//   .then((order) => prepareOrder(order))
//   .then((foodDetails) => pickupOrder(foodDetails))
//   .then((dropLocation) => deliverOrder(dropLocation))
//   .catch((error) => console.log(error)); // The value from reject(value) is print here.

//? The above code is little bit messy & little hard to debug or read. So instead of this we can use async/await.
async function greet() {
  const order = await placeOrder(cart);
  const foodDetails = await prepareOrder(order);
  const dropLocation = await pickupOrder(foodDetails);
  deliverOrder(dropLocation);
}

greet();

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Hello Everyone");
  }, 20000);
});

//? Using Promise Method.
// promise then((response) => console.log(response));

//? Using Async/Await Method.
async function callback() {
  const data = await promise;
  console.log(data);
}

callback();

//? What is the output of below code.
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Hello");
  }, 22000);
});

async function call1() {
  const data1 = await p1;
  console.log(data1);

  const data2 = await p1;
  console.log(data2);
}

call1();

// In the above code data1 was executed after waiting to resolve the p1, but for data2 the p1 was already resolve, so data2 will be run immediately.

//todo What is the output of below code.
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("First Async/Await");
//   }, 24000);
// });

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("First Async/Await");
  }, 25000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Second Async/Await");
  }, 24000);
});

async function call2() {
  const data1 = await p2;
  console.log(data1);

  const data2 = await p3;
  console.log(data2);
}

// call2();

//todo What if we solve the above code using promise only.
p2.then((value) => console.log(value));
p3.then((value) => console.log(value));

//todo What if we use function in Async/Await.
function test1() {
  const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("First Async/Await inside function.");
    }, 5000);
  });

  return p2;
}

function test2() {
  const p3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Second Async/Await inside function.");
    }, 5000);
  });

  return p3;
}

async function call3() {
  const data1 = await test1();
  console.log(data1);

  const data2 = await test2(); // Here this will also take 5 second because for function execution context only made when we call the function after that it will execute the code which is written inside  function.

  console.log(data2);
}

call3();

//* Async function always return promise & if we return anything instead of promise like string,array,object etc, than it will automatically convert it into promise & than return it. But if we don't return anything than it will implicitly return undefined.

async function call4() {}

call4().then((value) => console.log(value)); // This will give undefined.
