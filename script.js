

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
const userImg =document.querySelector('user-img');
const houseImg =document.querySelector('house-img');
// play again 
const playAgain = document.getElementById('reset');

const choices =['paper','scissors','rock'];
let score =0;
let userChoice=undefined;
let houseChoice= undefined;

buttons.forEach(button => {
  button.addEventListener('click',()=>{
      userChoice =button.getAttribute ('data-choice');
      
      checkWinner();
      console.log(`user ${userChoice}`);
      console.log(`house ${houseChoice}`);
      
      userImg.src=`./images/icon-${userChoice}.svg`; 
      houseImg.src= `./images/icon-${houseChoice}.svg`;
  });
});

function housePick(){
  return(choices[Math.floor(Math.random() * choices.length)]);
}
console.log(housePick());
// logic
function checkWinner(){
   houseChoice= housePick();
  
  // update view 
 
  if(userChoice === houseChoice){
    // DRAW
    }else if(userChoice ==='paper' && houseChoice==='rock'|| userChoice ==='rock' && houseChoice==='scissors' || userChoice ==='scissors' && houseChoice==='paper') {
      // user win
      updateScore(1);
    }else{
      updateScore(-1);

      // user lost

    }
    gameDiv.style.display='none';
    selectionDiv.style.display='grid';
}
// score update
function updateScore(value){
  score += value;
  scoreCount.innerText =score;
}

// function updateSelection (selectionEl,choice){

//   selectionEl.classList.remove('btn-paper');
//   selectionEl.classList.remove('btn-scissors');
//   selectionEl.classList.remove('btn-rock');

// }  
//Rules buttons open/close actions

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


