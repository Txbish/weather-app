import "./styles.css";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const resultDiv = document.getElementById("weather-result");

const urlBase =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const key = "SFKJ9VDR3CB36R5BSCZ6FVVUY";

// Fetch weather data
const fetchWeather = async (location) => {
  const fullUrl = `${urlBase}${encodeURIComponent(
    location
  )}?key=${key}&unitGroup=metric&include=days`;

  try {
    const response = await fetch(fullUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the actual weather data
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    return null;
  }
};

btn.addEventListener("click", async () => {
  const loc = input.value.trim();
  resultDiv.innerHTML = ""; // Clear previous result
  resultDiv.innerHTML = "<p>Loading...</p>"; // Show loading message

  if (!loc) {
    resultDiv.textContent = "Please enter a location.";
    return;
  }

  // Set loading flag to true while data is being fetched
  const weatherInfo = await fetchWeather(loc);

  // Remove loading message once the fetch is completed
  resultDiv.innerHTML = "";

  if (weatherInfo) {
    const today = weatherInfo.days[0]; // Get today's weather
    resultDiv.innerHTML = `
      <h2>${weatherInfo.resolvedAddress}</h2>
      <p><strong>Conditions:</strong> ${today.conditions}</p>
      <p><strong>Temp:</strong> ${today.temp} °C</p>
      <p><strong>Humidity:</strong> ${today.humidity}%</p>
      <p><strong>Wind:</strong> ${today.windspeed} km/h</p>
    `;
  } else {
    resultDiv.textContent = "Could not fetch weather data.";
  }
});
