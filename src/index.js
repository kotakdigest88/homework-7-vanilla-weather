function showWeather (response){


    let temperatureElement = document.querySelector("#temperature-value");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperature);
    let cityElement = document.querySelector("#weather-app-city");
    cityElement.innerHTML = response.data.city;
   
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