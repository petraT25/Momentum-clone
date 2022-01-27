function newDate() {
    const date = new Date().toLocaleString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        year: 'numeric',
        month: '2-digit'
    });
    const clock = new Date().toLocaleString('en-GB', {
        hourCycle: 'h23',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    
    
    const time = document.querySelector('#date');
    const clockDiv = document.querySelector('#clock');

    time.innerHTML = date;
    clockDiv.innerHTML = clock;
    

    console.log(clock[0], clock[1]);
}

console.log(new Date().toString());
setInterval(newDate, 1000);

function greetFunc() { 
let slicedTime = new Date().toString().slice(22, 24)
console.log(slicedTime);

const greet = document.querySelector('#greet');
//greet.innerHTML = ``;


switch(slicedTime) {
    case '00':
    case '01':
    case '02':
        console.log('evening');
        greet.innerHTML = 'Good evening!'
    break;

    case '03':
        console.log('nottt working');
        greet.innerHTML = 'Morning'
}
}

setInterval(greetFunc, 1000);


async function getWeather() {
    const api_key = 'bce5781048194d4fbad170845222401'
    const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=auto:ip&aqi=no`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const location = document.querySelector('#city_weather');
    const temperature = document.querySelector('#temperature');
    const description = document.querySelector('.description');

    location.innerHTML = `${data.location.name}, ${data.location.country}`;
    temperature.innerHTML = `${data.current.temp_c}°C`;
    description.innerHTML = `${data.current.condition.text}`;

    const iconImg = `https:${data.current.condition.icon}`
}

getWeather()

async function getIcons() {
    const response = await fetch('https://www.weatherapi.com/docs/weather_conditions.json');
    const data = await response.json();
    console.log(data);
}

getIcons()

async function getSaying() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    console.log(data);
    console.log(data.content);
    console.log(data.author);

    const saying = document.querySelector('#saying_paragraph');
    const author = document.querySelector('#author');
    saying.innerHTML = `<q>${data.content}</q>`;
    author.innerHTML = `-- ${data.author}`;

    
}

getSaying();








