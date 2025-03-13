//* fetch():- It is an async task, in this we request some APIs & the API will give some data.
const obj = fetch(
  "http://api.weatherapi.com/v1/current.json?key=82bd2fbbf49e42b2a63100351250302&q=London&aqi=yes"
);

//? For async task we always wait for some time until it didn't get the data, but in this we immediately print the obj. So it will give unexpected output.

console.log(obj); // This will give output:- Promise {<pending>}

//? How to solve this above problem, means how to know when the data is retrieve.
// If we use steTimeout function than how we know the exact time interval so that we know at what time we retrieve the data.

//* .then():- For preventing the above error we use .then() function to retrieve the data. But this will only run if the obj has some kind of data otherwise it will not run.
//! Syntax:- .then(callback function);

obj.then((data) => {
  console.log(data);
});

//* .catch():- For error handling we use .catch() function, so when the .then() function is fail than .catch() will work.
obj
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

//? How to get header part of an API?
obj.then((data) => {
  console.log(data);
});

//? How to get body part of an API?
// obj.then((data) => {
//   const pro2 = data.json(); // This will give the body part of an API, but if body part is also an async task than we have to use the same .then() & .catch() function on that body part.
//   console.log(pro2); // This will give output:- Promise {<pending>}, because it is also an async task.
// });

// Method-1.
// obj.then((response) => {
//   const promises = response.json();

//   promises.then((data) => {
//     console.log(data);
//   });
// });

// Method-2 Promise Chaining.
// obj
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// Another way for method-2, as we know if we have only resturn statement in fat arrow function than we can write in single line.
obj
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.current.temp_c);
  });

// In above method obj is assign to response & everything which is return by this is assign to data, so basically the response body part is assign to data. & than we can print the key or use the key with the help of data.

//! Response Body Part.
/*
{
    "location": {
        "name": "Harda",
        "region": "Madhya Pradesh",
        "country": "India",
        "lat": 22.3333,
        "lon": 77.1,
        "tz_id": "Asia/Kolkata",
        "localtime_epoch": 1738577409,
        "localtime": "2025-02-03 15:40"
    },
    "current": {
        "last_updated_epoch": 1738576800,
        "last_updated": "2025-02-03 15:30",
        "temp_c": 34.0,
        "temp_f": 93.2,
        "is_day": 1,
        "condition": {
            "text": "Sunny",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
            "code": 1000
        },
        "wind_mph": 8.1,
        "wind_kph": 13.0,
        "wind_degree": 250,
        "wind_dir": "WSW",
        "pressure_mb": 1009.0,
        "pressure_in": 29.79,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 21,
        "cloud": 2,
        "feelslike_c": 32.2,
        "feelslike_f": 90.0,
        "windchill_c": 34.0,
        "windchill_f": 93.3,
        "heatindex_c": 32.2,
        "heatindex_f": 90.0,
        "dewpoint_c": 8.8,
        "dewpoint_f": 47.8,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 2.3,
        "gust_mph": 9.3,
        "gust_kph": 14.9,
        "air_quality": {
            "co": 636.4,
            "no2": 5.92,
            "o3": 94.0,
            "so2": 14.985,
            "pm2_5": 55.5,
            "pm10": 63.825,
            "us-epa-index": 3,
            "gb-defra-index": 7
        }
    }
}
*/
