const results = document.querySelector('#results');
const score = document.querySelector('#score');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return [0, 'The game is a draw.'];
  }
  if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
      playerSelection == 'Scissors' && computerSelection == 'Paper' ||
      playerSelection == 'Paper' && computerSelection == 'Rock') {
    return [1, 'You Win! ' + playerSelection + ' beats ' + computerSelection];
      }
  return [-1, 'You Lose! ' + computerSelection + ' beats ' + playerSelection];
}

function game(playerSelection) {
  let currentGame = playRound(playerSelection, getComputerChoice());
  if (currentGame[0] == 1) playerScore++;
  else if (currentGame[0] == -1) computerScore++;
  results.textContent = currentGame[1];
  score.textContent =
  'Your score: ' + playerScore + 
  ", Opponent's score: " + computerScore;
  if (playerScore == 5) {
    results.textContent = 'You have won the match!';
    playerScore = 0;
    computerScore = 0;
  }
  else if (computerScore == 5) {
    results.textContent = 'You have lost the match!';
    playerScore = 0;
    computerScore = 0;
  }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  game('Rock');
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  game('Paper');
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  game('Scissors');
});