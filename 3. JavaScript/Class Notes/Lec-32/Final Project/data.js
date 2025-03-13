const restaurants = [];

const images = [
  "First",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "Eigth",
  "nine",
  "tenth",
];

const rest_name = [
  "Spice Junction",
  "Tandoori Nights",
  "Curry Leaf",
  "Masala Magic",
  "Royal Darbar",
  "Saffron Soul",
  "Chai & Chapati",
  "Biryani House",
  "Punjabi Rasoi",
  "Ganges Grill",
  "Namaste Bistro",
  "Kebab Kingdom",
  "Dosa Delight",
  "Himalayan Hut",
  "Street Spice",
  "Mango Masala",
  "Golden Temple Kitchen",
  "Paneer Palace",
  "Chutney & Co.",
  "Thali Tales",
];

const foods = [
  "Indian",
  "North Indian",
  "South Indian",
  "Chinese",
  "Mexican",
  "Italian",
  "Thai",
  "Japanese",
  "Mediterranean",
  "Continental",
  "American",
  "Middle Eastern",
  "Korean",
  "French",
  "Vietnamese",
  "Spanish",
  "Greek",
  "Lebanese",
  "Turkish",
  "Fusion",
];

const indoreLocation = [
  "Vijay Nagar",
  "Scheme 54",
  "New Palasia",
  "MG Road",
  "Bhawarkua",
  "Rau",
  "Geeta Bhawan",
  "Sapna Sangeeta",
  "Treasure Island Mall",
  "South Tukoganj",
];

for (let i = 0; i < 100; i++) {
  const obj = {};

  obj["image"] = images[Math.floor(Math.random() * 10)];

  obj["name"] = rest_name[Math.floor(Math.random() * 20)];

  obj["rating"] = `${Math.floor(Math.random() * 4 + 1)}.${Math.floor(
    Math.random() * 10
  )}`;

  obj["food_type"] = foods[Math.floor(Math.random() * 20)];

  obj["price_for_food"] = Math.floor(Math.random() * (2500 - 100 + 1) + 100);

  obj["location"] = indoreLocation[Math.floor(Math.random() * 10)];

  obj["distance"] = (Math.random() * 10 + 1).toFixed(1);

  obj["offers"] = Math.floor(Math.random() * 51 + 5);

  obj["alcohol"] = Math.random() > 0.7; // It will give true & false, & 0.7 means 70% rest is not selling alcohol.

  obj["restaurant_open_time"] = Math.floor(Math.random() * 18 + 7);

  obj["restaurant_close_time"] = (obj["restaurant_open_time"] + 12) % 24;

  restaurants.push(obj);
}

const jsonString = JSON.stringify(restaurants, null, 2);
module.exports = jsonString;
