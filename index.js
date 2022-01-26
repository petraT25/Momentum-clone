function newDate() {
    const date = new Date().toLocaleString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        year: 'numeric',
        month: '2-digit'
    });
    const clock = new Date().toLocaleString('en-GB', {
        hourCycle: 'h24',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

const clockSelect = document.querySelector('#clock');
const greet = document.querySelector('#greet');
const time = document.querySelector('#date');

greet.innerHTML = `Good morning!`;
time.innerHTML = date;
clockSelect.innerHTML = clock;

console.log(date, clock);
}

setInterval(newDate, 1000);


/*async function getWeather() {
    const api_key = 'bce5781048194d4fbad170845222401'
    const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=auto:ip&aqi=no`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const location = document.querySelector('#city_weather');
    const temperature = document.querySelector('#temperature');
    const icon = document.querySelector('.icon');

    location.innerHTML = `${data.location.name}, ${data.location.country}`;
    temperature.innerHTML = `${data.current.temp_c}°C`;
    icon.innerHTML = `${data.current.condition.text}, ${data.current.condition.icon}`;

    const iconImg = `https:${data.current.condition.icon}`
}

getWeather()*/

async function getIcons() {
    const response = await fetch('https://www.weatherapi.com/docs/weather_conditions.json');
    const data 
}




