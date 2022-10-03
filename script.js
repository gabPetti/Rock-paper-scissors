// create computer choice of either fire, water or plant
function getComputerChoice() {
    var computerChoice = Math.ceil(Math.random() * 3);

    if (computerChoice === 1) {
        computerChoice = 'fire';
    } else if (computerChoice === 2) {
        computerChoice = 'water';
    } else {
        computerChoice = 'plant';
    }

    return computerChoice;
}

function playRound() {
    var playerSelection = prompt("What is your choice: fire, water or plant?").toLowerCase();
    var computerSelection = getComputerChoice();
    var selections = playerSelection + " x " + computerSelection;

    if (playerSelection == computerSelection) {
        console.log("It's a draw, let's try again");
        return 0
    } else if (selections == "fire x water" || selections == "water x plant" || selections == "plant x fire") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return -1
    } else {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        return 1
    }
}

function game() {
    var playerVictories = 0;
    var computerVictories = 0;

    for (let i = 1; i <= 5; i++) {
        var roundResult = playRound();
        while (roundResult == 0) {
            roundResult = playRound();
        }
        if (roundResult > 0) {
            playerVictories++;
        } else if (roundResult < 0) {
            computerVictories++;
        }

        if (playerVictories == 3) {
            console.log("You are the winner")
        } else if (computerVictories == 3) {
            console.log("Game Over")
        }
    }
}
var themeButton = document.getElementById("theme-button");
function themeChange() {
    if(themeButton.classList == "fire") {
        themeButton.classList.remove("fire");
        themeButton.classList.add("water");
        document.querySelectorAll(".fire").classList.add("water");
        document.querySelectorAll(".fire").classList.remove("fire");
    } else if(themeButton.classList == "water") {
        themeButton.classList.remove("water");
        themeButton.classList.add("leaf");
        document.querySelectorAll(".water").classList.add("leaf");
        document.querySelectorAll(".water").classList.remove("water");
    } else {
        themeButton.classList.remove("leaf");
        themeButton.classList.add("fire");
        document.querySelectorAll(".leaf").classList.add("fire");
        document.querySelectorAll(".leaf").classList.remove("leaf");
    }
}