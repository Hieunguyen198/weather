
const DEFAULT = '--';
const DEFAULT_VALUE='00';
const APP_ID = '69876ae9532b127ddf894bbfd6a2ee04';


const searchInput = document.querySelector('#search-input');
const weatherState = document.querySelector('.weather-state')
const cityName = document.querySelector('.city-name');
const weathericon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const windSpeed = document.querySelector('.wind-speed');



searchInput.addEventListener('change', (e) => {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(res => res.json())
        .then(data => {
            cityName.innerHTML = data.name || DEFAULT;
            weathericon.setAttribute('src', ` http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
            weatherState.innerHTML = data.weather[0].description || DEFAULT;
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT;
            windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
            humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;

            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
            sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm')||DEFAULT_VALUE;

        }).catch((error)=>{
            alert('Nhập tên thành phố không chính xác')
        })
    
});