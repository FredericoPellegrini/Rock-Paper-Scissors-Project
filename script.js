console.log("Hello World!")

function getComputerChoice(){
    let computerChoice = Math.random();

        if (computerChoice < 1/3){
            computerChoice = "Rock"
        } else if (computerChoice < 2/3){
            computerChoice = "Paper"
        } else {
            computerChoice = "Scissors"
        }

    console.log(computerChoice);
}


getComputerChoice();