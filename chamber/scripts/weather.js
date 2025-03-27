// Define static values for temperature and wind speed
const temperature = 10; // in °C
const windSpeed = 5; // in km/h

// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
    return (temperature <= 10 && windSpeed > 4.8) ? Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)) : "N/A";
}

// Display windchill factor in the "Weather" section of the page
document.getElementById("wind-chill").innerText = `Wind Chill: ${calculateWindChill(temperature, windSpeed)}`;