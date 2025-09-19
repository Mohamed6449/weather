
let input=document.querySelector("input");
let image=document.querySelector("img");
let btn=document.querySelector("button");

btn.onclick=()=>{
   if(input.value!=="")
  image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}` ;
}


