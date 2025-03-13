let showDays = document.getElementById("days");
let showHour = document.getElementById("hour");
let showMinutes = document.getElementById("minutes");
let showSecond = document.getElementById("second");

let lastDate = new Date("2025-06-30T23:59:59");

function showCountDay() {
  let currentDate = new Date();
  let countDown = lastDate - currentDate;
  let totalDay = Math.floor(countDown / (1000 * 60 * 60 * 24));
  let totalHour = Math.floor((countDown / (1000 * 60 * 60)) % 24);
  let totalMinute = Math.floor((countDown / (1000 * 60)) % 60);
  let totalSecond = Math.floor((countDown / 1000) % 60);

  showDays.innerHTML = totalDay;
  showHour.innerHTML = totalHour;
  showMinutes.innerHTML = totalMinute;
  showSecond.innerHTML = totalSecond;
}

function showCountHour() {}

setInterval(showCountDay, 1000);
