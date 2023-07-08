// Get computer choice and store computer choice in a variable

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomElement = options[Math.floor(Math.random() * options.length)];
    return randomElement;
}

let computerSelection = getComputerChoice();
console.log(computerSelection);

let playerSelection = "scissors";

// Play a round

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats Rock.";
        } else {
            return "You win! Rock beats Scissors.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beat Paper.";
        } else {
            return "You win! Paper beats rock.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors.";
        } else {
            return "You win! Scissors beat Paper.";
        }
    }
}

console.log(playRound(playerSelection, computerSelection));

