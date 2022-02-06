let weather = {
    "key": "c8ff653992b21fd23fb4193caebd4ce2",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" + this.key)
        .then((response) => response.json())
        .then((data) => this.showWeather(data));
        console.log(weather);
    },
    showWeather: function(data){
        let deg = '°C';
         const { name } = data;
         const { id } = data.weather[0];
         const { icon, description } = data.weather[0];
         const { temp, humidity } = data.main;
         const { speed } = data.wind;
         document.querySelector('.city').innerText = name;
         document.querySelector('.description').innerText = description;
         document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
         document.querySelector('.temp').innerText = Math.round(temp) + deg;
         document.querySelector('.humidity').innerText = humidity + "%";
         document.querySelector('.wind').innerText = speed + "km/h";
         document.querySelector('.weather').classList.remove('loading');
         console.log(name,icon, id, description, temp, humidity);
         if(temp > 16){
             document.querySelector('.card').classList.add('sunny');
         } else{
             document.querySelector('.card').classList.remove('sunny');
         }
         if(id == 800){
            document.querySelector('.icon').src = './icons/clear-sky.png';
        }
        if(id == 701){
            document.querySelector('.icon').src = './icons/mist.png';
        }
        if(id == 711){
            document.querySelector('.icon').src = './icons/smoke.png';
        }
    },
    search: function (){
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
};

document.querySelector('.fas').addEventListener('click', () => {
  weather.search();
});

document.querySelector('.search-bar').addEventListener('keyup', function (e){
  if(e.key == "Enter"){
      weather.search();
  }
})

weather.fetchWeather("Tashkent");