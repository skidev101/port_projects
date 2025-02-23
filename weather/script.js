let searchValue = document.getElementById('search');
let error = document.querySelector('.error');
let searchBar = 
document.getElementById('sb');
let loc = document.getElementById('loc');
let lImg = document.getElementById('loc-img');
let temperature = document.getElementById('temp');
let img = document.getElementById('wImg');
let state = document.getElementById('state');
let date = document.getElementById('date');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let load = 
document.getElementById('loader');
let form = 
document.querySelector('form');
const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
let today = new Date();
let d = today.getDate();
let m = today.getMonth();
let y = today.getFullYear();


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (searchValue.value == '') {
        error.style.display = 'block';
        load.style.display = 'none';
    } else {
        searchWeather();
        error.style.display = 'none';
        load.style.display = 'block';
    }
})

const id = '1798eac34823d69189a13f354aaf7b34';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;

const searchWeather = () =>{
    fetch(url + '&q=' + searchValue.value)
    .then(response => response.json())
    .then(data => {
        if (data.cod == 200) {         
            loc.innerHTML = data.name;
            state.innerText =  data.weather[0].description;
            img.src = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
            temperature.innerText = data.main.temp + "°c";
            clouds.innerText = data.wind.speed + "km/h";
            humidity.innerText = data.main.humidity + "%";
            pressure.innerText = data.main.pressure + "hpa";
            date.innerText = `${d} ${months[m]} ${y}`;
            
        } else if(data.cod == 404){
            error.innerText = 'Place not found';
            error.style.display = 'block';
        }
        
        searchValue.value = ''
        load.style.display = 'none';
        
    })
}













