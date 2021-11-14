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

function playRound(e) {

    if (!e.target.id) return;

    let humanPlay = e.target.id;
    let computerPlay = Math.floor(Math.random() * 3);
    const roundScore = matrice[humanPlay][computerPlay];

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

    
}  

function checkScore(humanScore, computerScore) {
    let gagnant;
    if (humanScore == 5){
        gagnant = 'l\'Humain';
    } else if (computerScore == 5){
        gagnant = 'la Machine'
    }
    
    const winner =  document.createElement('p');
    
       
}

document.addEventListener('click', playRound);
