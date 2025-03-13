// generateJson.js

const fs = require("fs"); // Import File System module
const jsonString = require("./data"); // Import jsonString from data.js

// Convert the JSON string into a properly formatted JSON file
fs.writeFileSync("arrayData.json", jsonString, "utf8");

console.log("✅ arrayData.json file has been created successfully!");
