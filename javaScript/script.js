let chances=20;
let score =0;
let theNumber;
let number;
// DOM Elements
const chancesText =document.querySelector(".chances");
const scoreText= document.querySelector(".high-score");
const hintText =document.querySelector(".hints");
const checkButton= document.querySelector(".check");
const guessInput=document.querySelector(".number-text");
const againButton= document.querySelector(".again");
theNumber=newNumber();
console.log(theNumber);
console.log(hintText)
// Functions
function newNumber(){
    return Math.floor(Math.random()*20)+1;
}
function again(){
    theNumber=newNumber();
    chances=20;
    chancesText.innerHTML=chances;
    hintText.innerHTML="Start guessing...";
    document.body.style.backgroundColor="#27363a";
}

function lostRound(){
    if(chances<=1){
        lostGame();
        console.log("chances")
    }
    else{
        chances-=1;
        chancesText.innerHTML=chances;
        if(number>theNumber)
            hintText.innerHTML="Try again!! Your number is higher.";
        else
            hintText.innerHTML="Try again!! Your number is lower.";
        

    }
}
function lostGame(){
    hintText.innerHTML="Hard Luck!! You are out of chances, Click again ";
    document.body.style.backgroundColor="red";
    checkButton.disabled=true;
}
function highScoreCheck(){
    if (chances > score){
        score=chances;
        scoreText.innerHTML=score;
    }
}
function win(){
    hintText.innerHTML="Congratulation!!! You won ";
    document.body.style.backgroundColor="green";
    highScoreCheck();
}
function checkAnswer(number){
    if(number>20 && number >= 0)
        alert("The number's range from 1 to 20");
    else if(number===theNumber)
        win();
    else {
        lostRound();
    }
}

// Initialize buttons 
checkButton.onclick= function(){
    number = Number(guessInput.value);
    checkAnswer(number);
}

againButton.onclick =function(){
    again();
};