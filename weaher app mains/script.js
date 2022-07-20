let weather = {
    apiKey: "70c7161a583e76f85788a7d11f1d587d",
    fetchWeather: function() {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
           
        )
            .then((Response) => Response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description} = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "weather in " + name;
        document.querySelector(".icon").scr = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
    }
};
