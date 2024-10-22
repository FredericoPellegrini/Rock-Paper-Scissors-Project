let round = 0;

let humanScore = 0;
let computerScore = 0;

function playGame (){




function getComputerChoice(){
    let computerChoice = Math.random();

        if (computerChoice < 1/3){
            computerChoice = "rock"
        } else if (computerChoice < 2/3){
            computerChoice = "paper"
        } else {
            computerChoice = "scissors"
        }

    console.log(`Computer: ${computerChoice}`);
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    console.log(`Human: ${humanChoice}`)
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        console.log("Draw!");
    } else if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You loose!")
        computerScore++;
    }
}

console.log(`Round: ${round + 1}`)


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

}


while (round < 5){
    playGame();
    round++;
}

console.log("-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
console.log("Final Score");
console.log(`Human: ${humanScore}`);
console.log(`Computer: ${computerScore}`)
console.log("-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

