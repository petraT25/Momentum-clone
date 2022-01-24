


async function getLocation() {
    const response = await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=aff34ca6044f4a67bf6024e149a826e3");
    const data = await response.json();
    console.log(data);

    const city = document.querySelector('#city')
    //city.textContent = `${data.city.name}, ${data.country.name}`
}

getLocation();


async function getWeather() {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=bce5781048194d4fbad170845222401&q=Split&aqi=no');
    const data = await response.json();
    console.log(data);
}
getWeather();







