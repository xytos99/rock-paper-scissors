// Get computer choice and store computer choice in a variable

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomElement = options[Math.floor(Math.random() * options.length)];
    return randomElement;
}

let computerSelection = getComputerChoice();
console.log(computerSelection);

// Get player choice and store it in a variable

