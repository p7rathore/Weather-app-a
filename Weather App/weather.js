
let weather = document.querySelector(".weather");
let serBtn = document.getElementById("ser-btn");
let input = document.getElementById("input");

let ApiKey = "369e364799401b0388472bc6823c6460";
let inpute = "bela";

// button click show data
serBtn.addEventListener("click",()=>{
    WeatherApp();
    input.value = "";
});


// main logic function

function WeatherApp(){
  weather.innerHTML=`
   <h1 class="alert">Lodding.....</h1> `
// api feach
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${ApiKey}&units=metric`)
  .then( res => res.json())
  .then( data =>{
    // inpute value none to alert
    if (input.value == "") {
      weather.innerHTML=`
      <h1 class="alert">Enter City & Country Name</h1> `
    }
      // condition to not city name to alert
      if (data.cod === "404") {
        weather.innerHTML=`
        <h1 class="alert">${data.message} !</h1> `
      }
    // sunset sunrise time define
    var unixSunrise = data.sys.sunrise;
    let unixsunset = data.sys.sunset;
    let sunset = new Date (unixsunset*1000);
    var sunrise = new Date(unixSunrise*1000);
  // data show the Display
    let html = "";
    html=`
    <h1 class="city-name">${data.name}</h1>
    <div class="img-data">
       <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon.png" class="icon">
       <h1 class="ceal">${data.main.temp}&#176;C</h1>
    </div>
    <div class="data">
         <h3 class="max-Temp">max_Temp : <span id="max-temp">${data.main.temp_max}&#176;C</span></h3>
         <h3 class="min-Temp">min_Temp : <span id="min-temp">${data.main.temp_min}&#176;C</span></h3>
    </div> 
    <div class="sun-set">
        <h3 class="suneise">Sunrise : <span id="suneise">${sunrise}</span></h3>
        <h3 class="sunset">Sunset : <span id="sunset">${sunset}</span></h3>
     </div> 
      <h1 class="sky">${data.weather[0].description}</h1>
      <h2 class="wind">Wind Speed:<span id="wind">${data.wind.speed}km/s</span></h2>
    `
    weather.innerHTML=html;
  });
};