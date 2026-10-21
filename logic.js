let search=document.getElementById('inputSearchContent')
let searchButton=document.getElementById('searchIcon')
let city="kerala"
let background=document.getElementById('background')
let seasonimage=document.getElementById('seasonImage')
let seasonContainer=document.getElementById('seasonContent')
let sesonText=document.getElementById('seasonText')
function getWeather(x){
    let temperatire=document.getElementById('temp')
    let humidity=document.getElementById('humidity')
    let windSpeed=document.getElementById('windSpeed')
    temperatire.textContent=Math.round(x.main.temp-273.15)+'°C'
    humidity.textContent=Math.round(x.main.humidity*3.6)+"Km/h"
    windSpeed.textContent=Math.round(x.wind.speed)+"%"

    if (x.weather[0].main=="Clouds"){
        seasonimage.src="cloud.png"
        sesonText.textContent="Clouds"
        background.style.backgroundImage='url("stormbg.png")'
    }
    else if(x.weather[0].main=="Rain"){
        seasonimage.src="rain.png"
        sesonText.textContent="Rainy"
        background.style.backgroundImage='url("rainbg.png")'
       
    }
    else if(x.weather[0].main=="Clear"){
        seasonimage.src="sunny.png"
        sesonText.textContent="Clear Sky"
        background.style.backgroundImage='url("bgsunny.png")'
        seasonContainer.backgroundImage='';
        seasonContainer.backgroundImage='url("sunny.png)'
    }   
    else if(x.weather[0].main=="Snow"){
        seasonimage.src="snow.png"
        sesonText.textContent="Snow"
        background.style.backgroundImage='url("snowbg.png")'
    
    }
    else if(x.weather[0].main=="Stormy"){
        seasonimage.src="thunder.png"
        sesonText.textContent="Thunder/Lightning"
        background.style.backgroundImage='url("bgsunny.png")'
    
    }
    else if(x.weather[0].main=="Mist"|| x.weather[0].main=="Fog"|| x.weather[0].main=="Haze"){
        seasonimage.src="foggy.png"
        sesonText.textContent="Fog"
        background.style.backgroundImage='url(mistybg.png")'
    
    }
    else if(x.weather[0].main=="Drizzle"){
        seasonimage.src="drizzle.png"
        sesonText.textContent="Drizzle"
        background.style.backgroundImage='url("drizzlebg.png")'
    
    }
}
searchButton.onclick=function(){
    let url="https://api.openweathermap.org/data/2.5/weather?id="
    let apikey="022506f48d563a493b0882e0bd0eb1d0"
    city=search.value
    let wholeurl="https://api.openweathermap.org/data/2.5/weather?q="+`${city}`+`&appid=${apikey}`
    let options={
        method:"GET"
    }
    fetch(wholeurl,options)
    .then(function(x){
        return x.json()
    })
    .then(function(x){
        getWeather(x)
    })
    .catch(function(err){
        alert("please enter a valid City!")
    })
}



