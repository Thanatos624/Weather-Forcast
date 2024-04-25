const cityNameElement = document.getElementById("cityName");

const getWeather = async (city) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6d87aba7a4mshc4c55cf994397f6p1bf552jsnac8dcb0af868',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const temp = document.getElementById('temp');
    const feels_like = document.getElementById('feels_like');
    const humidity = document.getElementById('humidity');
    const min_temp = document.getElementById('min_temp');
    const max_temp = document.getElementById('max_temp');
    const wind_speed = document.getElementById('wind_speed');
    const wind_degrees = document.getElementById('wind_degrees');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');

    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
        const result = await response.json(); 
        console.log(result); 
        cityNameElement.textContent = city; // Update city name
        temp.innerHTML = result.temp;
        temp2.innerHTML = result.temp;
        feels_like.innerHTML = result.feels_like;
        humidity.innerHTML = result.humidity;
        humidity2.innerHTML = result.humidity;
        min_temp.innerHTML = result.min_temp;
        max_temp.innerHTML = result.max_temp;
        wind_speed.innerHTML = result.wind_speed;
        wind_speed2.innerHTML = result.wind_speed;
        wind_degrees.innerHTML = result.wind_degrees;
        sunrise.innerHTML = result.sunrise;
        sunset.innerHTML = result.sunset;
    } catch (error) {
        console.error(error);
    }
};

// Function to fetch weather data for Delhi by default
const fetchWeatherForDefaultCity = () => {
    const defaultCity = "Delhi";
    getWeather(defaultCity);
};

const form = document.querySelector('form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityInput = document.getElementById('city');
    const city = cityInput.value.trim();
    getWeather(city);
});

// Fetch weather data for Delhi by default when the page loads
fetchWeatherForDefaultCity();
