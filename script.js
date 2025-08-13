function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt('Choose "rock" "paper" or "scissors"');
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You won this round!");
      alert("You won this round!");
    } else if (
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "scissors" && humanChoice === "paper")
    ) {
      computerScore++;
      console.log("I won this round!");
      alert("I won this round!");
    } else {
      console.log("Draw!");
      alert("Draw!");
    }
  }
  for (let roundIndex = 0; roundIndex < 5; roundIndex++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore === computerScore) {
    console.log("It's a draw!");
    alert("It's a draw!");
  } else if (humanScore > computerScore) {
    console.log("I won!");
    alert("I won the game!");
  } else {
    console.log("You won!");
    alert("You won the game!");
  }
}

playGame();
