
let city="cairo"
function getCityInput(){
   return document.querySelector(".search input").value;
}
async function DataFromApi(url) {
     let d= await fetch(url);
    const data=await d.json();
    
    return data;
} 

 async function operation(city){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=22fb91fd2482666dfa0fc649ace2a65e&units=metric`
    let data=await DataFromApi(url);
    document.querySelector(".city").innerHTML=city;
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".temp").innerHTML=data.main.temp +" °C";
    document.querySelector(".wind").innerHTML=data.wind.speed;
}
 operation("cairo");
document.querySelector(".button").addEventListener("click",()=>operation(getCityInput()));






