//* Proxy:- It Intercepts actions (get, set, delete) on an object.
// 1. The Target (Real Object)
const user = {
  username: "Madhur",
  age: 25,
};

// 2. The Handler (The Logic/Security Rules)
const handler = {
  // Trap for READING data (get)
  get: function (target, prop) {
    if (prop in target) {
      console.log(`[READ]: Accessing ${prop}`);
      return target[prop];
    } else {
      return `404: Property '${prop}' does not exist!`; // Custom error message
    }
  },

  // Trap for WRITING data (set)
  set: function (target, prop, value) {
    if (prop === "age") {
      if (typeof value !== "number") {
        throw new Error("Age must be a number!");
      }
      if (value < 0) {
        throw new Error("Age cannot be negative!");
      }
    }

    console.log(`[WRITE]: Changing ${prop} to ${value}`);
    target[prop] = value; // Actually updating the object
    return true; // Use true to indicate success
  },
};

// 3. Create the Proxy
//! Syntax:- new Proxy(target, handler); where target means the real object & handler means the logic/security rules
const secureUser = new Proxy(user, handler);

// --- TEST ---

// Reading (GET)
console.log(secureUser.username); // Output: [READ]: Accessing username -> "Madhur"

// console.log(secureUser.password); // Output: 404: Property 'password' does not exist! (Instead of undefined)

// Writing (SET)
secureUser.age = 30; // Output: [WRITE]: Changing age to 30

// secureUser.age = -5; // Output: Error: Age cannot be negative!

//* Reflect:- It Performs the actual action on the object, but cleaner and safer than direct assignment. They are usually used together.
const product = {
  name: "Macbook Pro",
  price: 1200,
};

const handler2 = {
  get(target, prop, receiver) {
    console.log(`Getting ${prop}`);
    // Old Way: return target[prop]

    // New Way:
    return Reflect.get(target, prop, receiver);
  },

  set(target, prop, value, receiver) {
    console.log(`Setting ${prop} to ${value}`);

    // Old Way: target[prop] = value; return true;

    // New Way: Returns true/false automatically based on success
    const success = Reflect.set(target, prop, value, receiver);

    if (success) {
      console.log("Update Successful!");
    } else {
      console.log("Update Failed (maybe object is frozen?)");
    }

    return success;
  },

  // Bonus: Easy Deletion
  deleteProperty(target, prop) {
    console.log(`Deleting ${prop}...`);
    return Reflect.deleteProperty(target, prop);
  },
};

const proxyProduct = new Proxy(product, handler2);

// --- TEST ---
proxyProduct.price = 1500; // Output: Setting price to 1500 -> Update Successful!

Reflect.deleteProperty(proxyProduct, "price"); // Output: Deleting price... -> true

console.log(proxyProduct.price); // Output: Getting price --> undefined
