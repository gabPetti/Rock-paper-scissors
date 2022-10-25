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
    document.querySelector(".computer-selection img").src = `images/${computerSelection}.png`;

    if (playerSelection == computerSelection) {
        console.log("It's a draw, let's try again");
    } else if (selections == "fire x water" || selections == "water x plant" || selections == "plant x fire") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        victoriesCounter++;
        document.querySelector(".victories span").innerHTML = victoriesCounter;
    }
}

function game() {
    document.getElementById("start-button").style.display = "none";
    document.querySelector(".content-wrapper").style.display = "flex";
    document.querySelector(".victories span").innerHTML = "0";
}

function showResult(element) {
    victoriesCounter = Number(document.querySelector(".victories span").innerHTML);
    roundsCounter = Number(document.querySelector(".rounds span").innerHTML);

    if (element == "fire") {
        playRound("fire", victoriesCounter)
    } else if (element == "water") {
        playRound("water", victoriesCounter)
    } else {
        playRound("plant", victoriesCounter)
    }
    roundsCounter++;
    document.querySelector(".rounds span").innerHTML = roundsCounter;
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