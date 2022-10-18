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

// play a single round of the game 

function playRound(playerSelection, victoriesCounter) {
    var computerSelection = getComputerChoice();
    var selections = playerSelection + " x " + computerSelection;

    if (playerSelection == computerSelection) {
        console.log("It's a draw, let's try again");
    } else if (selections == "fire x water" || selections == "water x plant" || selections == "plant x fire") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        victoriesCounter++;
        document.querySelector(".results span").innerHTML = victoriesCounter;
    }
}

function game() {
    document.getElementById("start-button").style.display = "none";
    document.querySelector(".content-wrapper").style.display = "flex";
    document.querySelector(".results span").innerHTML = "0";
    /*
    var playerVictories = 0;
    var computerVictories = 0;

    var i = 1
    while (i < 6) {
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

    document.querySelector(".content-wrapper").style.display = "none";
    document.getElementById("start-button").style.display = "block";
    */
}

function showResult(element) {
    victoriesCounter = Number(document.querySelector(".results span").innerHTML);
    if (element == "fire") {
        playRound("fire", victoriesCounter)
    } else if (element == "water") {
        playRound("water", victoriesCounter)
    } else {
        playRound("plant", victoriesCounter)
    }
}

// Theme customizations

var themeButton = document.getElementById("theme-button");
function themeChange() {
    if(themeButton.classList == "fire") {
        themeButton.classList.remove("fire");
        themeButton.classList.add("water");
        document.querySelectorAll(".fire").classList.add("water");
        document.querySelectorAll(".fire").classList.remove("fire");
    } else if(themeButton.classList == "water") {
        themeButton.classList.remove("water");
        themeButton.classList.add("plant");
        document.querySelectorAll(".water").classList.add("plant");
        document.querySelectorAll(".water").classList.remove("water");
    } else {
        themeButton.classList.remove("plant");
        themeButton.classList.add("fire");
        document.querySelectorAll(".plant").classList.add("fire");
        document.querySelectorAll(".plant").classList.remove("plant");
    }
}