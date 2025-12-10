// WEATHER API URL
const url =
    "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true";

const output = document.getElementById("weatherOutput");
const spinner = document.getElementById("spinner");
const iconBox = document.getElementById("iconBox");

// WEATHER ICONS (you can replace with your own files)
function getWeatherIcon(code) {
    if (code >= 0 && code < 2) return "icons/sunny.png";
    if (code >= 2 && code <= 3) return "icons/cloudy.png";
    if (code >= 51) return "icons/rain.png";
    return "icons/wind.png";
}

// FETCH WEATHER FUNCTION
async function getWeather() {
    spinner.classList.remove("hidden");
    output.textContent = "Fetching weather...";
    iconBox.innerHTML = "";

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch weather");

        const data = await response.json();
        const w = data.current_weather;

        output.innerHTML = `
            <strong>Temperature:</strong> ${w.temperature}°C <br>
            <strong>Wind Speed:</strong> ${w.windspeed} km/h
        `;

        const iconPath = getWeatherIcon(w.weathercode);
      

        console.log("Weather Data:", w);

    } catch (err) {
        console.error(err);
        output.textContent = "Error fetching weather!";
    }

    spinner.classList.add("hidden");
}

// AUTO REFRESH EVERY 10 SEC
setInterval(getWeather, 10000);

// DARK MODE
document.getElementById("darkToggle").addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});

// FIRST LOAD
getWeather();
