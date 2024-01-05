const moveButtons = document.querySelectorAll(".move");
const playerChoiceElement = document.querySelector("#playerChoise");
const computerChoiceElement = document.querySelector("#computerChoise");
const scoreElemnet = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;

let winnerScore = 3;

const choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
  const randomChoiceIndex = Math.floor(Math.random() * 3);

  const computerChoice = choices[randomChoiceIndex];

  updateScores(playerChoice, computerChoice);
  displayResut(playerChoice, computerChoice);
  checkGameEnd();
}

function displayResut(playerChoice, computerChoice) {
  playerChoiceElement.innerText = getEmoji(playerChoice);
  computerChoiceElement.innerText = getEmoji(computerChoice);

  scoreElemnet.innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function updateScores(playerChoice, computerChoice) {
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
  } else if (playerChoice === computerChoice) {
  } else {
    computerScore++;
  }
}

function checkGameEnd() {
  if (playerScore === winnerScore || computerScore === winnerScore) {
    disableButtons();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  playerChoiceElement.innerText = "";
  computerChoiceElement.innerText = "";
  enableButtons();
}

function disableButtons() {
  moveButtons.forEach((button) => {
    button.disabled = true;
  });
}

function enableButtons() {
  moveButtons.forEach((button) => {
    button.disabled = false;
  });
}

function getEmoji(choice) {
  const emojiObj = {
    rock: "🪨",
    paper: "🧻",
    scissors: "✂️",
  };
  return emojiObj[choice];
}
