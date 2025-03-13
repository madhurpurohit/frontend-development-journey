//* Real world example: If we want to make an order from dominos than we want that some sequence is followed:-
//? Step1:- User will Place Order, in this we will make an order object where the order_id, food, restaurant_location, user_location etc for next team.
//? Step2:- Prepare Order team will use the information which is given by step1(placeOrder). & than prepare the food. After that it will make an foodDetails like token_no. for order, restaurant_location, user_location etc so they can pass the right order to delivery boy.
//? Step3:- In this rider will come & show the token_no to receive the order, after that it will need user_location to deliver the order.
//? Step4:- Deliver the order successfully.

// const cart = ["Pizza", "Burger", "French Fries"];

// function placeOrder(cart, callback) {
//   console.log("Talking to Domino's.");

//   setTimeout(() => {
//     console.log("Order placed successfully.");
//     const order = {
//       order_id: 25413,
//       food: cart,
//       restaurant: "Dominos, New york City, Indore",
//       location: "Indore",
//     };
//     callback(order);
//   }, 2000);
// }

// function prepareOrder(order, callback) {
//   console.log("Preparing the order.");

//   setTimeout(() => {
//     console.log("Order prepared successfully.");

//     const foodDetails = {
//       token_no: 1245,
//       restaurant: order.restaurant,
//       location: order.location,
//     };
//     callback(foodDetails);
//   }, 5000);
// }

// function pickupOrder(foodDetails, callback) {
//   console.log("Reaching the restaurant to pickup the order.");

//   setTimeout(() => {
//     console.log("Order picked up by delivery boy.");

//     const dropLocation = foodDetails.location;
//     callback(dropLocation);
//   }, 3000);
// }

// function deliverOrder(dropLocation) {
//   console.log("Reaching the customer's location.");

//   setTimeout(() => {
//     console.log("Order delivered successfully.");
//   }, 5000);
// }

// placeOrder(cart, (order) => {
//   prepareOrder(order, (foodDetails) => {
//     pickupOrder(foodDetails, (dropLocation) => {
//       deliverOrder(dropLocation);
//     });
//   });
// });

const cart = ["Pizza", "Burger", "French Fries"];

placeOrder(cart)
  .then((order) => prepareOrder(order))
  .then((foodDetails) => pickupOrder(foodDetails))
  .then((dropLocation) => deliverOrder(dropLocation))
  .catch((error) => console.log(error)); // The value from reject(value) is print here.

//? How to create promise.
/*  const vName = new Promise(function(resolve, reject){
        Code Here.

        if(){
          Code here.
          resolve(value);
        } else {
          reject(value);
        }
    });
    
    return vName; // In vName there is any value either it is from resolve or from reject.
*/

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
