// create computer choice of either rock, paper or scissors
function getComputerChoice() {
    var computerChoice = Math.ceil(Math.random() * 3);

    if (computerChoice === 1) {
        computerChoice = 'rock';
    } else if (computerChoice === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

