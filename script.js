// script.js

async function getWeather() {
    const apiKey = '1ef67120eb580461706014ef32754748';
    const city = document.getElementById('cityInput').value;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperatura: ${data.main.temp}°C</p>
            <p>Tempo: ${data.weather[0].description}</p>
            <p>Umidade: ${data.main.humidity}%</p>
            <p>Pressão: ${data.main.pressure} hPa</p>
            <p>Vento: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        console.error('Erro ao obter dados:', error);
    }
}
