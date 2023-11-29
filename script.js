const apiKey="0ce03c0865aaecca0d0911b3c514fe3f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".searchInput");
const searchBtn=document.querySelector("#searchButton");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city)
{
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();

    if(response.status == 404)
    {
        document.querySelector(".error").style.display="block";
    }

    else
    {
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png"
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png"
        }
                           
        document.querySelector(".error").style.display="none"; 
    }  
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

});

