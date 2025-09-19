let toastbox=document.querySelector(".toast-box");
let success=`<i class="fa-solid fa-circle-check"></i> successfuly`;
let errormsg=` <i class="fa-solid fa-circle-xmark"></i>  there is an error`;
let invalid=` <i class="fa-solid fa-circle-exclamation"></i>  Invalid`;

function showToast(e){
  let toast=document.createElement("div") ;
  toast.innerHTML=e;
  toast.classList.add("toast");
   toastbox.appendChild(toast);
   if(e.includes("error")){
      console.log("kkk")
      toast.querySelector("i").style.color="red";
   }
   else if(e.includes("Invalid")){
      toast.querySelector("i").style.color="orange";
      
   }
   setTimeout(()=>toast.remove(),3000);
}