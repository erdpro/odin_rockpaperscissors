function getComputerChoice() {
    let choice = Math.random() * 3;
    // Return based on what value 0 and 3
    if (choice < 1) {
        return "rock";
    } else if (choice < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Pick either rock paper or scissors");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log(`It's a draw, ${humanChoice} cancels ${computerChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log(`Human wins, ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log(`Human wins, ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log(`Human wins, ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`Computer wins, ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log(`Human wins, ${humanScore} to ${computerScore}`);
    } else if (humanScore === computerScore) {
        console.log(`It's a draw, ${humanScore} to ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`Computer wins, ${computerScore} to ${humanScore}`);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();