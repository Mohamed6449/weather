const quiz=[
    {
        question:"who ara mazen essam",
        answer:[
            {text:"home",correct:false},
            {text:"any",correct:false},
            {text:"kandy",correct:false},
            {text:"person",correct:true}
        ]
    },
    {
        question:"who is trumb ",
        answer:[
            {text:"presdint",correct:false},
            {text:"any",correct:false},
            {text:"kandy",correct:false},
            {text:"person",correct:true}
        ]
    },
    {
        question:"who ara jjj ",
        answer:[
            {text:"letter",correct:false},
            {text:"d",correct:false},
            {text:"j",correct:false},
            {text:"its nothing",correct:true}
        ]
    }]
let b=document.querySelectorAll(".btn");
let hidder=document.querySelector("#question");
let next=document.querySelector("#next");
let counter =0;
let right=0;
// console.log(quiz[counter].answer[3].correct);
function checkAnswer(item){
    if(quiz[counter].answer.find(f=>f.text===item.innerHTML).correct){
        item.style.background="rgba(32, 149, 32, 1)";
        right++;
    }
    else{
       let ind= quiz[counter].answer.indexOf(quiz[counter].answer.find(f=>f.correct));
        b[ind].style.background="rgba(32, 149, 32, 1)";

        item.style.background="rgba(208, 50, 10, 1)";
    }
    next.style.display= "block";
};



function test(element){
    hidder.innerHTML=element.question;
    let f=0;
    b.forEach((item)=>{
        item.innerHTML=element.answer[f].text;
        item.addEventListener("click",()=>{
            checkAnswer(item);
        });
        f++;
    });
}

test(quiz[0]);
function nextQuestion(){
    
}
