let s=0;
let m=0;
let h=0;
let idInterval=null;
let stop=document.querySelectorAll("button")[0];
let play=document.querySelectorAll("button")[1];
let reset=document.querySelectorAll("button")[2];
let text=document.querySelector("p");
play.onclick=()=>startTime();
reset.onclick=()=>{
    s=0;
    m=0;
    h=0;
    text.innerText="00:00:00"
}
function startTime(){
    if (idInterval!==null){
        clearInterval(idInterval);
    }
     idInterval=setInterval(()=>{
        s++;
        if(s===60){
            m++
            s=0
        }
        if(m===60){
            m=0;
            h++;
        }
        text.innerText=`${(h>=10)?h:"0"+h}:${(m>=10)?m:"0"+m}:${(s>=10)?s:"0"+s}`
    },1000);
    stop.onclick=()=>clearInterval(idInterval);
};
