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
}

setInterval(newDate, 1000);







/*async function getLocation() {
    const response = await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=aff34ca6044f4a67bf6024e149a826e3");
    const data = await response.json();
    console.log(data);
    console.log(data.continent_name, data.country_capital)
    console.log()

    const city = document.querySelector('#city');
    const city_weather = document.querySelector('#city_weather');
    
    city.textContent = `In ${data.continent_name}/${data.country_capital}`;
    city_weather.textContent = data.country_capital;
}

getLocation();*/

/*const position = navigator.geolocation.getCurrentPosition();
console.log(position)*/
/*async function getWeather(getLocation) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=bce5781048194d4fbad170845222401&q=Zagreb&aqi=no`);
    const data = await response.json();
    console.log(data);
    console.log(data.current.temp_c)

    const temperature = document.querySelector('#temperature');
    temperature.textContent = `${data.current.temp_c}°C`;
    

}
getWeather();*/

/*async function quotes()
{
  const response = await fetch('https://zenquotes.io/api/quotes');
  const data = await response.json();
  console.log(data);
}

quotes();*/






