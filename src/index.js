function showWeather (response){
console.log(response.data);

    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-app-city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let speedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time *1000);
    let icon =`<img src ="${response.data.condition.icon_url}" class="weather-app-icon"/>`;



    temperatureElement.innerHTML = Math.round(temperature);
    cityElement.innerHTML = response.data.city;  
    timeElement.innerHTML = formatDate (date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    speedElement.innerHTML = `${response.data.wind.speed}km/h`;
    
}


function formatDate (date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
        
        if (minutes<10){
            minutes = `0${minutes}`
        }
        if (hours<10){
            hours = `0${hours}`;
        }
        return `${day} ${hours}:${minutes}`;
        
    }


function searchCity (city){
    let apiKey ="2c9e95a4078b004c2cb60t37off36a27";
    let urlKey =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(urlKey).then(showWeather);
}

function handleSearchSubmit (event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");

    searchCity(searchInput.value);
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);