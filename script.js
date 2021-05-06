

//Rules declaration 
const rulesModal= document.querySelector('.rules-modal');
const rulesBtn=document.querySelector('.rules-btn');
const closeBtn =document.querySelector('.close-btn');
// game declaration
const scoreCount =document.getElementById('score-count');
const buttons=document.querySelectorAll('.g-btns');

const gameDiv=document.getElementById('game');
const selectionDiv=document.getElementById('selection');

const userSelect = document.getElementById('user-select');
const computerSelect = document.getElementById('computer-select');

const userImg =document.querySelector('user-img');
const houseImg =document.querySelector('house-img');
const choices =['paper','scissors','rock'];
let score =0;
let userChoice=undefined;

buttons.forEach(button => {
  button.addEventListener('click',()=>{
      userChoice =button.getAttribute ('data-choice');
      console.log(userChoice);
      
      checkWinner();
      userImg.src=`./images/icon-${userChoice}.svg`;
      houseImg.src=`./images/icon-${houseChoice}.svg`;
      userSelect.classList.remove('btn-paper');
      computerSelect.classList.remove('tn-scissors');

      userSelect.classList.add(`btn-${userChoice}`);
      computerSelect.classList.add(`btn-${houseChoice}`);
      
     
  });
});

function housePick(){
  return(choices[Math.floor(Math.random() * choices.length)]);
}
console.log(`house pick ${housePick()}`);
// logic
function checkWinner(){
  const houseChoice= housePick();
  
  // update view 
  viewSelection(userSelect,userChoice);
  viewSelection(computerSelect,houseChoice);

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
    selectionDiv.style.display='flex';
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

rulesBtn.addEventListener('click',()=>{
  console.log('good');
  rulesModal.classList.toggle("show");
});
 
closeBtn.addEventListener('click',()=>{
   rulesModal.classList.toggle("show");
});


