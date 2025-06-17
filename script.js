let humanScore=0, computerScore=0;

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    if(choice==1)   return "Rock";
    else if(choice==2)  return "Paper";
    else if(choice==3)  return "Scissors";
    else    return "Error\n";
}
function getHumanChoice() {
    let choice = prompt("Enter Your Choice");
    return choice;
}
function playRound(humanChoice, computerChoice) {
    let winner;
    console.log("Human Choose " + humanChoice);
    console.log("Computer Choose " + computerChoice);
    
    
    if(humanChoice==computerChoice)  {
        winner = "Draw";
    }
    else if(humanChoice=="Rock" || humanChoice=="rock") {
        if(computerChoice=="Paper")   winner = "Computer";
        else    winner = "Human";
    }
    else if(humanChoice=="Scissors" || humanChoice=="scissors") {
        if(computerChoice=="Rock")  winner = "Computer";
        else    winner = "Human";
    }
    else if(humanChoice=="Paper" || humanChoice=="paper") {
        if(computerChoice=="Scissors")  winner = "Computer";
        else    winner = "Human";
    }
    return winner;
}
function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let winner = playRound(humanSelection,computerSelection);
    if(winner=="Computer") {
        console.log("Computer Wins this Round");
        computerScore++;
    }
    else if(winner=="Human") {
        console.log("Human Wins this Round");
        humanScore++;
    }
    else if(winner=="Draw") {
        console.log("Round Draw");
    }

}

let roundNum = prompt("How many Rounds You Want to Play");
for(i=0; i<roundNum; i++) {
    playGame();
}
if(computerScore > humanScore)  console.log("Computer Win");
else if(humanScore > computerScore)  console.log("Human Win");
else if(humanScore == computerScore)    console.log("Game Draw");
