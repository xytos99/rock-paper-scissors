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
    return `You chose ${playerSelection} and the computer chose ${computerSelection}. It's a tie!`;
  } else if ((playerSelection === 'rock' && computerSelection === 'scissors') 
          || (playerSelection === 'paper' && computerSelection === 'rock')
          || (playerSelection === 'scissors' && computerSelection === 'paper')) {
      playerScore +=1;
      return `You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`;
  } else {
      computerScore += 1;
      return `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost.`;
  }
}

function getResult(playerScore, computerScore) {
  if (playerScore === 5) {
    buttons.forEach((button) => button.disabled = true);
    return 'You win the game! Please refresh the page to play again.';
  }
  else if (computerScore === 5) {
    buttons.forEach((button) => button.disabled = true);
    return 'Computer wins the game. Please refresh the page to play again.';
  }
  else {
    return;
  };
}

const buttons = document.querySelectorAll("button");

const scoreDiv = document.createElement('div');
scoreDiv.textContent = `Player ${playerScore}:${computerScore} CPU`;
scoreDiv.style.margin = '16px 0px';

const bod = document.querySelector('body');
bod.appendChild(scoreDiv);

const choicesDiv = document.createElement('div');
choicesDiv.style.margin = '16px 0px';
bod.appendChild(choicesDiv);

const resultDiv = document.createElement('div');
bod.appendChild(resultDiv);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerChoice = button.getAttribute('class');
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    choicesDiv.textContent = result;
    scoreDiv.textContent = 
    `Player ${playerScore}:${computerScore} CPU`;
    resultDiv.textContent = getResult(playerScore, computerScore);
  });
});