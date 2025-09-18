let numbers = ["0","1","2","3","4","5","6","7","8","9"];
let capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
               "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let small = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"];
let special = ["!","@","#","$","%","^","&","*","-","_","="];
let all=[...numbers,...capital,...small,...special];
document.querySelector("button").onclick=()=>generatePass();
document.querySelector(".display img").onclick=()=>{
    document.querySelector("#password").select();
     document.execCommand("copy");
     document.querySelector("#password").unSelect();
};
function generatePass(){
    let pass="";
    for(let d=0 ;d<20;d++){
        pass+=all[Math.floor(Math.random()*all.length)];
    }
    document.querySelector("#password").value=pass;

}

generatePass();