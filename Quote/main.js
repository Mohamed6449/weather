
let quote=document.querySelector("blockquote");

async function getQuote() {
   let q=await fetch("https://api.quotable.io/random");
   let Data =await q.json();
   console.log(Data);
    
}

getQuote();


