// script.js

async function getWeather() {
    const apiKey = '604eeaed4848ce7c493b0a13d9e06efe';
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
