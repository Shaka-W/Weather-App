(function weather() {
    const form = document.querySelector('form');
    const locationSearch = document.querySelector('#location');
    const searchBtn = document.querySelector('i');
    const weatherLocation = document.querySelector('.weather-location');
    const temperature = document.querySelector('.temperature');
    const weatherCondition = document.querySelector('.weather-condition');

    window.addEventListener('load', () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Braselton&units=imperial&appid=bab86470ddda8f382bb6436c9061325d`, {mode: 'cors'})
        .then(response => response.json())
        .then(response => {
            console.log(response);
            weatherLocation.textContent = `${response.name}, ${response.sys.country}`;
            weatherCondition.textContent = `${response.weather[0].description}`;
            temperature.innerHTML = `${Math.round(response.main.temp)}&deg;F`;
        })
    });
    
    function getLocation(e) {
        e.preventDefault();
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationSearch.value}&units=imperial&appid=bab86470ddda8f382bb6436c9061325d`, {mode: 'cors'})
        .then(response => response.json())
        .then(response => {
            console.log(response);
            weatherLocation.textContent = `${response.name}, ${response.sys.country}`;
            weatherCondition.textContent = `${response.weather[0].description}`;
            temperature.innerHTML = `${Math.round(response.main.temp)}&deg;F`;
        })
        form.reset();
    }

    searchBtn.addEventListener('click', getLocation);
    locationSearch.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            getLocation(e);
        }
    });
})();



