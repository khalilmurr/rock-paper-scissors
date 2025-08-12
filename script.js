function getComputerChoice() {
  let randomOption = Math.floor(Math.random() * 3);
  if (randomOption === 0) {
    return "rock";
  } else if (randomOption === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}


