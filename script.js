// let city = document.querySelector("city").value

//Example fetch using pokemonapi.co

document.querySelector("button").addEventListener("click", getTemp);

function getTemp(){
const city = document.querySelector(".search-bar").value

    // console.log(city)

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2825b15a4737b5aee5cbfd9c7f06ea0f&units=imperial`;



  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)

    document.querySelector(".city").innerText = "Weather in " + data.name;
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.querySelector(".description").innerText = data.weather[0].description;
    document.querySelector(".humidity").innerText = `Humidty: ${data.main.humidity}%`; 
    document.querySelector(".wind").innerText = `Wind Speed: ${data.wind.speed} km/h`;
    document.querySelector(".temp").innerText =  `${Number.parseFloat(data.main.temp).toFixed(0)}°F/${ Number((Number.parseFloat(data.main.temp).toFixed(0) - 32) * 5/9).toFixed(0)}°C`

    document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${data.name}")`
    

})

  .catch(err => {
      console.log(`error ${err}`)
  });


}

document.addEventListener("keypress", function(enter){
    if(enter.key == "Enter"){
        getTemp();
    }
});

// document.querySelector(".weather").classList.remove("loading");

