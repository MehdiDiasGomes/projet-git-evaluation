const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const buttons = document.querySelectorAll(".choices button");
const resultText = document.getElementById("resultText");

function determineWinner(playerChoice, aiChoice) {
  if (playerChoice === aiChoice) {
    return "Égalité !";
  }

  if (
    (playerChoice === "rock" && (aiChoice === "scissors" || aiChoice === "lizard")) ||
    (playerChoice === "paper" && (aiChoice === "rock" || aiChoice === "spock")) ||
    (playerChoice === "scissors" && (aiChoice === "paper" || aiChoice === "lizard")) ||
    (playerChoice === "lizard" && (aiChoice === "spock" || aiChoice === "paper")) ||
    (playerChoice === "spock" && (aiChoice === "scissors" || aiChoice === "rock"))
  ) {
    return "Vous avez gagné !";
  }

  return "Vous avez perdu !";
}

function aiChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;  
    const aiChoiceResult = aiChoice(); 
    const result = determineWinner(playerChoice, aiChoiceResult); 

    resultText.textContent = `Vous avez choisi ${playerChoice}. L'IA a choisi ${aiChoiceResult}. ${result}`;
  });
});
