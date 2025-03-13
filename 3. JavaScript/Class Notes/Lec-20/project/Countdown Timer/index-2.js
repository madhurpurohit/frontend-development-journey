let showDays = document.getElementById("days");
let showHour = document.getElementById("hour");
let showMinutes = document.getElementById("minutes");
let showSecond = document.getElementById("second");

let lastDate = new Date("2025-06-30T23:59:59");

function updateCountdown() {
  let currentDate = new Date();
  let countDown = lastDate - currentDate;

  let totalSeconds = Math.floor(countDown / 1000);
  let totalMinutes = Math.floor(totalSeconds / 60);
  let totalHours = Math.floor(totalMinutes / 60);
  let totalDays = Math.floor(totalHours / 24);

  let hours = totalHours % 24;
  let minutes = totalMinutes % 60;
  let seconds = totalSeconds % 60;

  showDays.innerHTML = totalDays;
  showHour.innerHTML = hours;
  showMinutes.innerHTML = minutes;
  showSecond.innerHTML = seconds;
}

// Initial call to update immediately when the page loads
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000);
