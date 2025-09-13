let ul = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}

function addEvents(li){
    li.onclick = () => {
        li.className === "checked" ? li.className = "" : li.className = "checked";
        saveData();
    }

    let span = li.querySelector("span");
    if(span){
        span.onclick = () => {
            li.remove();
            saveData();
        }
    }
}

button.addEventListener("click", () => {
    if (input.value !== "" && input.value !== null) {
        let li = document.createElement("li");
        li.innerHTML = input.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        ul.appendChild(li);
        addEvents(li);
        saveData();
        input.value = "";
    }
});

if (localStorage.getItem("data") !== null) {
    ul.innerHTML = localStorage.getItem("data");
    ul.querySelectorAll("li").forEach(li => addEvents(li));
}