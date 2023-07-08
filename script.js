let playerScore = 0;
let computerScore = 0;


// Get computer choice and store computer choice in a variable

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomElement = options[Math.floor(Math.random() * options.length)];
    return randomElement;
}

let computerSelection = getComputerChoice();
// console.log(computerSelection);

let playerSelection = "scissors";

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
    }
}

// console.log(playRound(playerSelection, computerSelection));

function game(numberOfRounds) {

    for (let i = 0; i < numberOfRounds; i++) {
        let playerChoice = prompt("Please enter your choice: ").toLowerCase();
        let computerChoice = getComputerChoice();
        console.log(playerChoice, computerChoice);
        playRound(playerChoice, computerChoice);
        let currentScore = `Current score: Player ${playerScore} : ${computerScore} Computer`
        console.log(currentScore);
    }

    if (playerScore > computerScore) {
        console.log("You WIN! Congratulations!");
    } else if (playerScore < computerScore) {
        console.log("You LOSE! Better luck next time!");
    } else {
        console.log("It's a TIE!");
    }
}

game(5);