async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '8e2178f723ca6587529340a163114e41';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const resultBox = document.getElementById('weatherResult');
  resultBox.innerHTML = "Fetching weather...";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    const weatherInfo = `
      <p><strong>City:</strong> ${data.name}</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;

    resultBox.innerHTML = weatherInfo;

  } catch (error) {
    resultBox.innerHTML = "❌ Error: " + error.message;
  }
}
