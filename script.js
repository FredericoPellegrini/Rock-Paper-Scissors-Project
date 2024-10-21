console.log("Hello World!")

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let computerChoice = Math.random();

        if (computerChoice < 1/3){
            computerChoice = "rock"
        } else if (computerChoice < 2/3){
            computerChoice = "paper"
        } else {
            computerChoice = "scissors"
        }

    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    console.log(humanChoice)
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        console.log("Empate!");
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ) {
        console.log("Você ganhou!");
        humanScore++;
    } else {
        console.log("Você perdeu!")
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)