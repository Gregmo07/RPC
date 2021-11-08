const play = ["rock", "paper", "scissors"];
const matrice = [
                    ["tie", false, true],
                    [true, "tie", false],
                    [false, true, "tie"]
                ];

function playRound() {
    let msg;
    playerSelection = prompt("Choissisez Rock, Paper ou Scissors.");
    let humanPlay = play.findIndex(elem=>elem == playerSelection.toLowerCase());
    let computerPlay = Math.floor(Math.random() * 3);
    const score = matrice[humanPlay][computerPlay];
    if (score == "tie"){
        msg = `Egalité ! ${play[computerPlay]} = ${play[humanPlay]}`;
    } else if (score){
        msg = `Vous avez gagné ! ${play[humanPlay]} bat ${play[computerPlay]}`;
    } else {
        msg = `Vous avez perdu! ${play[computerPlay]} bat ${play[humanPlay]}`;
    }
    console.log(msg);
}  

function playGame() {
    for (let index = 1; index <= 5; index++) {
        console.log(index);
        playRound();
     }
}
