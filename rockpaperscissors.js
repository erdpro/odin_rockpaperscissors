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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        results.textContent = `It's a draw, ${humanChoice} cancels ${computerChoice}`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        results.textContent = `Human wins, ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        results.textContent = `Human wins, ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        results.textContent = `Human wins, ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        results.textContent = `Computer wins, ${computerChoice} beats ${humanChoice}`;
    }
}

function displayResults() {
    if (humanScore > computerScore) {
        results.textContent = `Human wins, ${humanScore} to ${computerScore}`;
    } else if (humanScore === computerScore) {
        results.textContent = `It's a draw, ${humanScore} to ${computerScore}`;
    } else if (humanScore < computerScore) {
        results.textContent = `Computer wins, ${computerScore} to ${humanScore}`;
    }
}

let humanScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll("button");
const results = document.querySelector(".results");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (humanScore + computerScore < 5) {
            playRound(btn.textContent,getComputerChoice());
        } else if (humanScore + computerScore == 5) {
            displayResults();
        }
    });
}); 