let playerScore = 0;
let computerScore = 0;


// Get computer choice and store computer choice in a variable

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomElement = options[Math.floor(Math.random() * options.length)];
    return randomElement;
}

// Play a round

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore += 1;
            return "You lose! Paper beats Rock.";
        } else {
            playerScore += 1;
            return "You win! Rock beats Scissors.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore += 1;
            return "You lose! Scissors beat Paper.";
        } else {
            playerScore += 1;
            return "You win! Paper beats rock.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore += 1;
            return "You lose! Rock beats Scissors.";
        } else {
            playerScore += 1;
            return "You win! Scissors beat Paper.";
        }
    // If input is an invalid choice, computer scores
    } else {
        computerScore += 1;
        console.log("You lose! Your choice is invalid.");
    }
}
