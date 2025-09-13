

async function name() {
     let d= await fetch("https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=22fb91fd2482666dfa0fc649ace2a65e&units=metric");
    const data=await d.json;
    console.log(JSON.parse( data));
} 
name();