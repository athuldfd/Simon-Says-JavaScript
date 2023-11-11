    
let gameSeq=[];

let userSeq=[];

let started=false;
let level=0;
let btns=["Orange","Red","Cyan","Blue"];

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){

        console.log("game started");
        started=true;
        levelUp();

    }
});

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){

        btn.classList.remove("flash");
    } ,100);

}


function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function(){

        btn.classList.remove("userFlash");
    } ,100);

}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=(`Level ${level}`);

    
    let random=Math.floor(Math.random()*3);
    let randomColour=btns[random];
    let randbtn=document.querySelector(`.${randomColour}`);
    gameSeq.push(randomColour)
    // console.log(randomColour);
    // console.log(randbtn);
    // console.log(random);
    console.log(gameSeq);
    btnFlash(randbtn);
   

}

function checkClr(indx){
    if(gameSeq[indx]==userSeq[indx]){
       if(userSeq.length==gameSeq.length){
         setTimeout(levelUp,500);
       }
   }else{
     h3.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`
     reset();
   }
 }

function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userSeq);
    // console.log(level);
    checkClr(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".box");

for(button of allBtns){
button.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}