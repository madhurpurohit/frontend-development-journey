//? How to create date. & the date will be calculated from millisecond & millisecond will be given from January 1, 1970 (12:00:00 AM).
let d = new Date(); // This will give current time & date.
console.log(d); // This will give international format of date with time.

//? How to know the date format?
console.log(d.toDateString());

//? How to know the date format with time?
console.log(d.toString());

//? How to get date & time? get methods.
// In JS, the first day of week is Sunday & it is zero-based. & the first month is Jan & it is also zero-based. like (0 for sunday, 1 for monday, ..., 6 for saturday) & (0 for Jan, 1 for Feb, ..., 11 for Dec).
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());

console.log(d.getMilliseconds());
console.log(d.getTime());

//? How to get time?
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

const d1 = new Date("2025-01-12");
const d2 = new Date("January 12, 2025");
console.log(d1);
console.log(d2);

//* How to set date & time?
const d3 = new Date();
console.log(d3);

d3.setDate(20);
d3.setFullYear(2030);
d3.setMonth(2);
console.log(d3);

d3.setHours(10);
d3.setMinutes(31);
d3.setSeconds(15);
console.log(d3);

let d5 = new Date();
console.log(d5.toLocaleString());
console.log(d5.toLocaleDateString());
console.log(d5.toLocaleTimeString());

//* Some extra operation on date.
// Date will be stored in milliseconds.
const date1 = new Date();
const date2 = new Date("2025-04-21");

console.log(date2 - date1);
console.log(date2 > date1);
console.log(date2 < date1);
