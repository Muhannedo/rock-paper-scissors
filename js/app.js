/* -------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissors'];

/* -------------------------------- Variables --------------------------------*/
let playerChoice;
let computerChoice;
let msg;

/* ------------------------ Cached Element References ------------------------*/
const resultDisplay = document.querySelector('#result-display');
/* -------------------------------- Functions --------------------------------*/

function getPlayerChoice(event) {
  playerChoice = event.target.id;
}

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
};

const compare = () => {
  if (playerChoice === computerChoice) {
    msg = 'You tied!';
  } else if (playerChoice === choices[0] && computerChoice === choices[2]) {
    // "rock" vs. "scissors"
    msg = 'Congrats! You win!';
  } else if (playerChoice === choices[1] && computerChoice === choices[0]) {
    // "paper" vs. "rock"
    msg = 'Congrats! You win!';
  } else if (playerChoice === choices[2] && computerChoice === choices[1]) {
    // "scissors" vs. "paper"
    msg = 'Congrats! You win!';
  } else {
    msg = 'You lose! Try again?';
  }
};

function resetGame() {
  playerChoice = '';
  computerChoice = '';
  msg = '';

}

function render() {
  resultDisplay.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`;
}

function play(event) {
  getPlayerChoice(event);
  getComputerChoice();
  compare();
  render();
}

/* ----------------------------- Event Listeners -----------------------------*/
document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);
document.querySelector('#reset').addEventListener('click', resetGame);