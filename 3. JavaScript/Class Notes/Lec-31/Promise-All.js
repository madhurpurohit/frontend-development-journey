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
  console.log("Hello I greet you.");

  const data1 = await test1();
  console.log(data1);

  const data2 = await test2();
  console.log(data2);
}

call3();
console.log("Hello Everyone.");
console.log("How are you all?");

/* How the above code will execute?
    It will ignore test1, test2, call3 function than it will see an call3(), calling function so it will execute it first, but here after executing log it will wait 5 second to resolve test1, so test1 will go into Microtask queue, & than In this 5 second of time span it will go to the main thread means outside of function where it stands, & it will execute the below line until when 5 seconds were not complete, & after that it will go to call3 function, here after executing console it will wait for 5 second, so it will came to the main thread, & so on.
*/

// const date = Date.now();
// while (Date.now() - date < 7000) {}

// console.log("After while loop.\n");

//* How to handle error in Async/Await.
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

async function greet() {
  try {
    const order = await placeOrder(cart);
    const foodDetails = await prepareOrder(order);
    const dropLocation = await pickupOrder(foodDetails);
    deliverOrder(dropLocation);
  } catch (error) {
    console.log(error);
  }
}

greet();

//* Promise All:- If we want to execute some function parallel, in that case we use Promise.all() inside this we give an array & it will always return array, so we destructure it.
async function call1() {
  const [data1, data2] = await Promise.all([test1(), test2()]);
  console.log(data1);
  console.log(data2);
}

call1();
