//SET DATE AND TIME
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

    //display date and time
    const time = document.querySelector('#date');
    const clockDiv = document.querySelector('#clock');

    time.innerHTML = date;
    clockDiv.innerHTML = clock;
}

setInterval(newDate, 1000);


//DISPLAY GREETING DEPENDING ON THE HOUR
function greetFunc() { 
    const slicedTime = new Date().toString().slice(16, 18);

    const greet = document.querySelector('#greet');

    switch(slicedTime) {
        case '19':
        case '20':
        case '21':
        case '22':
        case '23':
        case '00':
        case '01':
        case '02':
        case '03':
        case '04':
            greet.innerHTML = '<i class="fas fa-moon"></i> Good Evening!';
            document.querySelector(".container-fluid").style.backgroundImage = 'url("./NIGHT.jpg")';
        break;
        case '05':
        case '06':
        case '07':
        case '08':
        case '09':
        case '10':
        case '11':
            greet.innerHTML = '<i class="fas fa-sun"></i> Good Morning!';
            document.querySelector(".container-fluid").style.backgroundImage = 'url("./MORNING.jpg")';
        break;
        case '12':
        case '13':
        case '14':
        case '15':
        case '16':
        case '17':
        case '18':
            greet.innerHTML = '<i class="fas fa-sun"></i> Good Afternoon!';
            document.querySelector(".container-fluid").style.backgroundImage = 'url("./AFTERNOON2.jpg")';
        break;
        default: 
        greet.innerHTML = 'Hello!';
        document.querySelector(".container-fluid").style.backgroundImage = 'url("./AFTERNOON.jpg")';
        }
    }

setInterval(greetFunc, 1000);


//GET WEATHER DATA
async function getWeather() {
    const url = `http://api.weatherapi.com/v1/current.json?key=bce5781048194d4fbad170845222401&q=auto:ip&aqi=no`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const location = document.querySelector('#city_weather');
    const description = document.querySelector('#description');
    const temperature = document.querySelector('#temperature');
    

    location.innerHTML = `${data.location.name}, ${data.location.country}`;
    description.innerHTML = `${data.current.condition.text}`;
    temperature.innerHTML = `${Math.round(data.current.temp_c)}°C`;
}

getWeather();
setInterval(getWeather, 180000)


//GET QUOTES
async function getSaying() {
    const response = await fetch('https://api.quotable.io/random?tags=inspirational&maxLength=80&page=2');
    const data = await response.json();

    const saying = document.querySelector('#saying_paragraph');
    const author = document.querySelector('#author');

    saying.innerHTML = `<q>${data.content}</q>`;
    author.innerHTML = `-- ${data.author}`;
}

getSaying();








