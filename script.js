function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors']
  // console.log(choices[Math.floor(Math.random() * 3)])
  return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return [0, 'The game is a draw.']
  }
  if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
      playerSelection == 'Scissors' && computerSelection == 'Paper' ||
      playerSelection == 'Paper' && computerSelection == 'Rock') {
    return [1, 'You Win! ' + playerSelection + ' beats ' + computerSelection]
      }
  return [-1, 'You Lose! ' + computerSelection + ' beats ' + playerSelection]
}

function game() {
  let score = 0, currentGame = null
  for (let i = 0; i < 5; i++) {
    currentGame = playRound(prompt('RPS'), getComputerChoice())
    score += currentGame[0]
    console.log(currentGame[1])
  }
  if (score > 0) {
    console.log('You have won the match!')
  }
  else if (score < 0) {
    console.log('You have lost the match!')
  }
  else {
    console.log('The match is a draw.')
  }
}