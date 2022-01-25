function newDate() {
const date = new Date();
const time = document.querySelector('#greet');
time.textContent = `Good morning, it's currently ${date}`
}

setInterval(function() {
    newDate()
}, 1000);




async function getLocation() {
    const response = await fetch("htps://api.ipgeolocation.io/ipgeo?apiKey=aff34ca6044f4a67bf6024e149a826e3");
    const data = await response.json();
    console.log(data);
    console.log(data.continent_name, data.country_capital)
    console.log()

    const city = document.querySelector('#city');
    
    city.textContent = `In ${data.continent_name}/${data.country_capital}`
}

getLocation();


async function getWeather() {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=bce5781048194d4fbad170845222401&q=Split&aqi=no');
    const data = await response.json();
    console.log(data);
    console.log(data.current.temp_c)

    const temperature = document.querySelector('#temperature');
    temperature.textContent = `${data.current.temp_c}°C`;
    const city_weather = document.querySelector('#city_weather');
    city_weather.innerHTML = this.city

}
getWeather();





