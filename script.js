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

function playRound(playerSelection, winsCounter) {
    var computerSelection = getComputerChoice();
    var selections = playerSelection + " x " + computerSelection;
    document.querySelector(".computer-selection img").src = `images/${computerSelection}.png`;

    if (playerSelection == computerSelection) {
        console.log("It's a draw, let's try again");
        document.querySelector(".results h3").innerHTML = "It's a draw, let's try again";
    } else if (selections == "fire x water" || selections == "water x plant" || selections == "plant x fire") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        document.querySelector(".results h3").innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;

        roundsCounter++;
    } else {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        document.querySelector(".results h3").innerHTML = `You won! ${playerSelection} beats ${computerSelection}`;

        roundsCounter++;
        winsCounter++;
        document.querySelector(".wins span").innerHTML = winsCounter;
    }
}

// Set up the game environment

function game() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("content-wrapper").style.display = "flex";
    document.getElementById("result-wrapper").style.display = "none";
}

// Forward player's choice as a parameter to the function playRound()

function showResult(element) {
    winsCounter = Number(document.querySelector(".wins span").innerHTML);
    roundsCounter = Number(document.querySelector(".rounds span").innerHTML);

    if (element == "fire") {
        playRound("fire", winsCounter)
    } else if (element == "water") {
        playRound("water", winsCounter)
    } else {
        playRound("plant", winsCounter)
    }
    document.querySelector(".rounds span").innerHTML = roundsCounter;

    if (roundsCounter == 5) {
        if (winsCounter > 2) {
            document.querySelector("#result-wrapper h1").innerText = "Victory!";
            console.log(winsCounter)
        } else {
            document.querySelector("#result-wrapper h1").innerHTML = "Defeat";
        }
        roundsCounter = 0;
        winsCounter = 0;
        document.querySelector(".wins span").innerHTML = winsCounter;
        document.querySelector(".rounds span").innerHTML = roundsCounter;
        document.getElementById("start-button").style.display = "none";
        document.getElementById("content-wrapper").style.display = "none";
        document.getElementById("result-wrapper").style.display = "flex"
    }
}

// Theme customizations

var themeButton = document.getElementById("theme-button");
function themeChange() {
    if (themeButton.classList == "light") {
        $('.light').addClass('fire').removeClass('light');
    } else if (themeButton.classList == "fire") {
        $('.fire').addClass('water').removeClass('fire');
    } else if (themeButton.classList == "water") {
        $('.water').addClass('plant').removeClass('water');
    } else if (themeButton.classList == "plant") {
        $('.plant').addClass('dark').removeClass('plant');
    } else {
        $('.dark').addClass('light').removeClass('dark');
    }
}