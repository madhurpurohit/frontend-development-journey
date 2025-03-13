let watchSpace = document.getElementById("container");

function showTime() {
  let currentTime = new Date().toLocaleTimeString();
  watchSpace.innerText = currentTime;
}

setInterval(showTime, 1000);
