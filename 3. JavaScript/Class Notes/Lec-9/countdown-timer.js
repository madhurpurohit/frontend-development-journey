const date1 = new Date();
const date2 = new Date("2025-02-04T00:00:00");

const date = date2 - date1;

const days = Math.floor(date / (1000 * 60 * 60 * 24)); // 1000 means ms to sec, 60 means sec to min, 60 means min to hour, 24 means hour to day.
console.log(days);

const hour = Math.floor((date / (1000 * 60 * 60)) % 24); // Mod 24 means give the remaining hour only for today, because we already calculate the day.
console.log(hour);

const minutes = Math.floor((date / (1000 * 60)) % 60);
console.log(minutes);

const second = Math.floor((date / 1000) % 60);
console.log(second);

console.log(
  `\nCountDown Timer:- Days-${days}, Hours-${hour}, Minutes-${minutes}, Second-${second}`
);
