
const apiKey = "79c98147bc61b37a1d05ee66684f84e1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="; // matara
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIconSvg = document.querySelector('.weather-icon svg use');
const weatherIconImg = document.querySelector(".weather-icon");


weatherIconImg.setAttribute('href', '#clouds');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".err").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        
        document.querySelector(".err").style.display = "none";

        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIconSvg.setAttribute("href", "#clouds");
        }else if(data.weather[0].main == "Clear"){
            weatherIconSvg.setAttribute("href", "#clearSun");
        }else if(data.weather[0].main == "Rain"){
            weatherIconSvg.setAttribute("href", "#rain");
        }else if(data.weather[0].main == "Drizzle"){
            weatherIconImg.innerHTML = `<img src="./images/drizzle.png" alt="Weather Icon">`;
        }else if(data.weather[0].main == "Mist"){
            weatherIconImg.innerHTML = `<img src="./images/mist.png" alt="Weather Icon">`;
        }

        document.querySelector(".weather").style.display = "block";			
        }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})



