const note= document.querySelector(".notes");
const create= document.querySelector("button");


function save(){
   localStorage.setItem("Note", note.innerHTML);
}
function loadNote(){
  note.innerHTML= localStorage.getItem("Note");
  let p=note.getElementsByTagName("p");
   for(let element of p){
        console.log(element)
       element.querySelector("img").onclick=()=>{
        element.remove();
        save();
       };
       element.onkeyup=()=>save();
   }
}
loadNote();

create.onclick=()=>{
    let input=document.createElement("p");
    input.setAttribute("contenteditable","true");
    input.className="input-box";
    input.onkeyup=()=>save();
    let img=document.createElement("img");
    img.src="photo/delete.png";
    img.onclick=()=>{
        input.remove();
        save();
    }
    input.appendChild(img);
    note.appendChild(input);
    save();
}
document.addEventListener("keydown",e=>{
    if(e.key==="Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})