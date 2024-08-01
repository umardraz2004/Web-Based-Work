const cityName = document.getElementById('myInput');
const getWeather = document.getElementById('findBtn');
const weatherCard = document.querySelector('.container');
const loading = document.querySelector('.loading');
const apiKey = "Your Api Key Here";

getWeather.addEventListener('submit', async event => {
    event.preventDefault();
    let City = cityName.value;
    if(City) {
        loading.style.display = "block";
        try {
            const weatherData = await getWeatherData(City);
            displayWeatherData(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error.message);
        } finally {
            loading.style.display = "none";
        }
    }
    else {
        displayError("Please enter a city!");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if(!response.ok) {
        throw new Error("Could not fetch weather data!");
    }
    return response.json();
}

function displayWeatherData(data) {
    const {name: city,
           main: {temp,humidity},
           weather: [{id,description}]} = data;
    
    weatherCard.textContent = "";
    weatherCard.style.display = "flex";
    const cityDisplay = document.createElement('h1');
    const tempDisplay = document.createElement('div');
    const humidityDisplay = document.createElement('div');
    const weatherDisplay = document.createElement('div');
    const weatherImage = document.createElement('div');
    
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(2)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    weatherDisplay.textContent = description;
    weatherImage.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add('cityName');
    tempDisplay.classList.add('tempDisplay');
    humidityDisplay.classList.add('humidityDisplay');
    weatherDisplay.classList.add('weatherDisplay');
    weatherImage.classList.add('weatherImage');

    weatherCard.appendChild(cityDisplay);
    weatherCard.appendChild(tempDisplay);
    weatherCard.appendChild(humidityDisplay);
    weatherCard.appendChild(weatherDisplay);
    weatherCard.appendChild(weatherImage);
}

function getWeatherEmoji(weatherId) {
    if(weatherId >= 200 && weatherId < 300) {
        return "🌩️";
    }
    else if(weatherId >= 300 && weatherId < 400) {
        return "🌧️";
    }
    else if(weatherId >= 400 && weatherId < 600) {
        return "🌧️";
    }
    else if(weatherId >= 600 && weatherId < 700) {
        return "❄️";
    }
    else if(weatherId >= 700 && weatherId < 800) {
        return "🌫️";
    }
    else if(weatherId === 800) {
        return "🌞";
    }
    else if(weatherId >= 801 && weatherId < 810) {
        return "☁️";
    }
    else {
        return "???";
    }
}

function displayError(message) {
    let errorDisplay = document.createElement('div');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');

    weatherCard.textContent = "";
    weatherCard.style.display = "flex";
    weatherCard.appendChild(errorDisplay);
}