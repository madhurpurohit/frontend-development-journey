const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const place = document.getElementById("location").value;

  function updateTemp(data) {
    const element = document.getElementById("weatherInfo");
    element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
  }

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=82bd2fbbf49e42b2a63100351250302&q=${place}&aqi=yes`
  )
    .then((response) => response.json())
    .then((data) => updateTemp(data))
    .catch((error) => console.log(error));
});
