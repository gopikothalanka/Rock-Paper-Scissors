

//Rules declaration 
const rulesModal= document.querySelector('.rules-modal');
const rulesBtn=document.querySelector('.rules-btn');
const closeBtn =document.querySelector('.close-btn');
// game declaration
const scoreCount =document.getElementById('score-count');
const buttons=document.querySelectorAll('.g-btns');

const gameEl=document.getElementById('game');
const selectionEl=document.getElementById('selection');


const choices =['paper','scissor','rock'];
let score =0;
let userChoice=undefined;

buttons.forEach(button => {
  button.addEventListener('click',()=>{
      userChoice =button.getAttribute ('data-choice');
      console.log(userChoice);
     

      checkWinner();
      
  });
});

function housePick(){
  return(choices[Math.floor(Math.random() * choices.length)]);
}
console.log(`house pick ${housePick()}`);
// logic
function checkWinner(){
  const houseChoice= housePick();
  
  if(userChoice === houseChoice){
    // DRAW
    }else if(userChoice ==='paper' && houseChoice==='rock'|| userChoice ==='rock' && houseChoice==='scissor' || userChoice ==='scissor' && houseChoice==='paper') {
      // user win
      updateScore(1);
    }else{
      updateScore(-1);

      // user lost

    }
    gameEl.style.display='none';
    selectionEl.style.display='flex';
}
// score update
function updateScore(value){
  score += value;
  scoreCount.innerText =score;
}

//Rules buttons open/close actions

rulesBtn.addEventListener('click',()=>{
  console.log('good');
  rulesModal.classList.toggle("show");
});
 
closeBtn.addEventListener('click',()=>{
   rulesModal.classList.toggle("show");
});


