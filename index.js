let result = document.querySelector("#result");
let searchBtn = document.querySelector("#search-btn");
let cityRef = document.querySelector("#city");

let getWeather = () => {
    let cityValue = cityRef.value;

    if (cityValue.length === 0) {
        result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        cityRef.value = ""; 

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                result.innerHTML = `
                <h2>${data.name}</h2>
                <h4 class="weather">${data.weather[0].main}</h4>
                <h4 class="desc">${data.weather[0].description}</h4>
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather icon"/>
                <h1>${data.main.temp}&#176;C</h1>
                <div class="temp-container">
                    <div>
                        <h4 class="title">Min</h4>
                        <h4 class="temp">${data.main.temp_min}&#176;C</h4>
                    </div>
                    <div>
                        <h4 class="title">Max</h4>
                        <h4 class="temp">${data.main.temp_max}&#176;C</h4>
                    </div>
                </div>
                `;
            })
            .catch(() => {
                result.innerHTML = `<h3 class="msg">City not found</h3>`;
            });
    }
};

searchBtn.addEventListener("click", getWeather);


