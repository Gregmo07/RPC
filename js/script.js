const play = ["rock", "paper", "scissors"];
const matrice = [
                    ["tie", false, true],
                    [true, "tie", false],
                    [false, true, "tie"]
                ];
let humanScore = 0;
let computerScore = 0;
let msg;
const result = document.querySelector('.result'); 
const score = document.querySelector('.score');
const scores = document.querySelector('.scores');
const choiceButton = document.getElementsByClassName("key");
const restartButton = document.querySelector('.restart');

function playRound(e) {

    if (!e.target.id || humanScore == 5 || computerScore == 5) return;
    const buttonClicked = document.querySelector(`button[id="${e.target.id}"]`);
    buttonClicked.classList.add('playing');
    const wordChoose = document.querySelector(`span[id="word${e.target.id}"]`);
    wordChoose.classList.add('playing');

    let humanPlay = e.target.id;
    let computerPlay = Math.floor(Math.random() * 3);
    const roundScore = matrice[humanPlay][computerPlay];
    getScore(roundScore, humanPlay, computerPlay);  
}  



function getScore(roundScore, humanPlay, computerPlay){
    if (roundScore == "tie"){
        msg = `Egalité ! ${play[computerPlay]} = ${play[humanPlay]}`;
    } else if (roundScore){
        msg = `Vous avez gagné ! ${play[humanPlay]} bat ${play[computerPlay]}`;
        humanScore += 1;
    } else {
        msg = `Vous avez perdu! ${play[computerPlay]} bat ${play[humanPlay]}`;
        computerScore += 1;
    }
    result.textContent = `${msg} ! `;
    score.textContent = `${humanScore} - ${computerScore}`;
    if (humanScore == 5 || computerScore == 5)  checkScore(humanScore, computerScore);
}

function checkScore(humanScore, computerScore) {
    let gagnant;
    if (humanScore == 5){
        gagnant = 'l\'Humain';
    } else if (computerScore == 5){
        gagnant = 'la Machine'
    }
    
    const winner =  document.createElement('p');
    winner.setAttribute("id", "winner");
    winner.textContent = `Le vainqueur est : ${gagnant}`;
    scores.appendChild(winner);

    restartButton.style.visibility = "visible";
    restartButton.addEventListener('click', restartGame);     
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    result.textContent = "";
    score.textContent = "0 - 0";
    restartButton.style.visibility = "hidden";
    const winner =  document.getElementById('winner');
    winner.remove();
    
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  
const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 

Array.from(choiceButton).forEach(element => {
        element.addEventListener('click', playRound);
    });

    
