
  
    var weather = document.getElementById("weather");

    async function getweather() {
        try {
            let city = document.getElementById("search").value;
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e6ed6dd294b2aefb354deddf76a8f17d&&units=metric`)
            let data = await res.json();
            console.log("data:", data)
            appEnd(data)
        } catch (err) {
            console.log("err:", err)
        }
    }


    function appEnd(data) {
        weather.innerHTML = null;
        let name = document.createElement("h3")
        name.innerText ="🏙️"+"City:-" + " " + data.name;

        let Min_Temp = document.createElement("h3");
        Min_Temp.innerText ="🌡️"+"Minimun Temperature:-" + " " + data.main.temp_min;

        let Max_Temp = document.createElement("h3");
        Max_Temp.innerText ="🌡️"+"Maximum temperature:-" + " " + data.main.temp_max;

        let wind = document.createElement("h3");
        wind.innerText = "💨"+"Wind Speed:-" + " " + data.wind.speed;

        let cloud = document.createElement("h3");
        cloud.innerText = "⛈️"+"Clouds:-" + " " + data.clouds.all;



        let sunrise = document.createElement("h3");
        sunrise.innerText = "🌅"+"Sunrise:-" + " " + data.sys.sunrise;



        let sunset = document.createElement("h3");
        sunset.innerText = "🌇"+"Sunset:-" + " " + data.sys.sunset;

        weather.append(name, Min_Temp, Max_Temp, wind, cloud, sunrise, sunset);

        let ifr = document.getElementById("ifr")

        ifr.innerHTML = null;
        let iframe = document.createElement("iframe")
        iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        iframe.height = "300px";
        iframe.width = "500px";
        ifr.append(iframe)
    }
