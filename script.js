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
        console.log("You lose! Your choice is invalid.")
    }
}

// Play a game of one or more rounds

function game(numberOfRounds) {

    for (let i = 0; i < numberOfRounds; i++) {
        let playerChoice = prompt("Please enter your choice: ").toLowerCase();
        let computerChoice = getComputerChoice();
        console.log(playerChoice, computerChoice);
        playRound(playerChoice, computerChoice);
        // Show the current score
        let currentScore = `Score: Player ${playerScore} - ${computerScore} Computer`
        console.log(currentScore);
    }

    // Declare the result
    if (playerScore > computerScore) {
        console.log("You WIN! Congratulations!");
    } else if (playerScore < computerScore) {
        console.log("You LOSE! Better luck next time!");
    } else {
        console.log("It's a TIE!");
    }
}

// Get the number of rounds to be played
noOfRounds = parseInt(prompt("Welcome to the Rock Paper Scissors game. Please enter the number of rounds you want to play: ", "3"));
game(noOfRounds);