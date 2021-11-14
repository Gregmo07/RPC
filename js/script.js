const play = ["rock", "paper", "scissors"];
const matrice = [
                    ["tie", false, true],
                    [true, "tie", false],
                    [false, true, "tie"]
                ];

function playRound(e) {
    let msg;
    let humanPlay = e.target.id;
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

window.addEventListener('click', playRound);
