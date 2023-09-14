const API_KEY = "3564cfc4742b2aea0f905b5b740cc1b1";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} /${data.main.temp}`;
    });
}

function onGeoError() {
  alert("error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
