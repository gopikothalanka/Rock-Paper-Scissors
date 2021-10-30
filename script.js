
'use strict';
//Rules declaration 
const rulesModal= document.querySelector('.rules-modal');
const rulesBtn=document.querySelector('.rules-btn');
const closeBtn =document.querySelector('.close-btn');
// game declaration
const scoreCount =document.getElementById('score-count');
const buttons=document.querySelectorAll('.g-btns');
// gamediv & container div 
const gameDiv=document.getElementById('game');
const selectionDiv=document.getElementById('selection');
// you select and house select buttons
const userSelect = document.getElementById('user-select');
const computerSelect = document.getElementById('computer-select');
// user img & house img
const userImg =document.querySelector('.user-img');
const houseImg =document.querySelector('.house-img');
// play again 
const playAgain = document.getElementById('reset');

const wiN = document.getElementById('win');
const board =document.querySelector('.board')

let [score,userChoice,houseChoice] = [0,undefined,undefined];


buttons.forEach(button => {
  button.addEventListener('click',()=>{
      userChoice =button.getAttribute ('data-choice');
      gameDiv.style.display='none';
      selectionDiv.style.display='grid';
      checkWinner();
      updatePics();
    
  });
});

function updatePics(){
      userSelect.classList.remove("btn-paper");
      userSelect.classList.remove("btn-rock");
      userSelect.classList.remove("btn-scissors");
      computerSelect.classList.remove("btn-paper");
      computerSelect.classList.remove("btn-rock");
      computerSelect.classList.remove("btn-scissors");
       userSelect.classList.add(`btn-${userChoice}`);
      computerSelect.classList.add(`btn-${houseChoice}`);
      userImg.src=`./images/icon-${userChoice}.svg`; 
      houseImg.src= `./images/icon-${houseChoice}.svg`;
      
}
// random selection by system
function housePick(){
  const choices =['paper','scissors','rock'];
  return(choices[Math.floor(Math.random() * choices.length)]);
}

function checkWinner(){
   houseChoice= housePick();
  
   if(userChoice === houseChoice){
    // DRAW
    
    wiN.innerText='DRAW';

    }else if(userChoice ==='paper' && houseChoice==='rock'|| userChoice ==='rock' && houseChoice==='scissors' || userChoice ==='scissors' && houseChoice==='paper') {
      // user win
    
      wiN.innerText=' YOU WIN';
      updateScore(1);
    }else{
      // user loses
      if (score>0){
        updateScore(-1);
      }
      
      wiN.innerText='YOU lose';
    }
    
}
// score update
function updateScore(value){
  score += value;
  scoreCount.innerText =score;
}


playAgain.addEventListener('click',()=>{
  gameDiv.style.display='grid';
  selectionDiv.style.display='none';
} );

rulesBtn.addEventListener('click',()=>{
  console.log('good');
  rulesModal.classList.toggle("show");
});
 
closeBtn.addEventListener('click',()=>{
   rulesModal.classList.toggle("show");
});


