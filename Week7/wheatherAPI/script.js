let key2 = "598f817ceab618e1ba26cc4bea70139b";
let myCity;
let myUrl2 = `http://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${key2}`;


let dataWeather;

let selectArea = document.querySelector('#select');
let options = document.getElementsByTagName("option");
let infoSec = document.querySelector('#infoSec');


let searchBtn = document.querySelector('#research');

searchBtn.addEventListener('click', event => {
    event.preventDefault();
    infoSec.innerHTML = "";

    let selectedOption = selectArea.selectedIndex;
    let optionValue = options[selectedOption].value;
    console.log(optionValue);
    myCity = optionValue;
    myUrl2 = `http://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=${key2}`;
    getInfo();
})


let getInfo = async() => {
    let response = await fetch(myUrl2);
    let data = await response.json();
    dataWeather = data;
    console.log(dataWeather);
    showInfo();
}

let showInfo = () => {
    let desc = dataWeather.weather[0].description;
    let descriptionNode = document.createElement('p');
    descriptionNode.textContent = `Description : ${desc} `;
    infoSec.appendChild(descriptionNode);

    let icon = dataWeather.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
    let iconNode = document.createElement('img');
    iconNode.src = iconUrl;
    infoSec.appendChild(iconNode);


    let timeZone = dataWeather.timezone;
    console.log(timeZone);
    let timezoneNode = document.createElement('p');
    timezoneNode.textContent = `Time Zone : ${timeZone} `;
    infoSec.appendChild(timezoneNode);

    let temp = dataWeather.wind.deg;
    console.log(temp);
    let temperature = document.createElement('p');
    temperature.textContent = `Temprature : ${temp} F`;
    infoSec.appendChild(temperature);
}