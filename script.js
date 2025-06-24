let humanDone, computerDone;
const images = ['rock.png', 'paper.png', 'scissors.png'];
let humanChoice;
function changeImageHuman(finalImage) {
    let imgElement = document.getElementById('mainImageHuman');
    let counter = 0;
    let spinTime = 1000; // 1 second
    let intervalTime = 70; // how fast it cycles
    let interval;

    interval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * images.length);
        imgElement.src = images[randomIndex];
        counter += intervalTime;

        if (counter >= spinTime) {
            clearInterval(interval);
            imgElement.src = finalImage; // Set the final image after spinning
            humanChoice = finalImage.split('.')[0]; 
            console.log("Human Choice: " + humanChoice);
            humanDone = true;
            if (humanDone && computerDone) {
                checkWinner();
            }
        }
    }, intervalTime);    
}


let computerChoice;
function changeImageComputer() {
    let finalImage = images[Math.floor(Math.random() * images.length)];
    let imgElement = document.getElementById('mainImageComputer');
    let counter = 0;
    let spinTime = 1000; // 1 second
    let intervalTime = 70; // how fast it cycles
    let interval;

    interval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * images.length);
        imgElement.src = images[randomIndex];
        counter += intervalTime;

        if (counter >= spinTime) {
            clearInterval(interval);
            imgElement.src = finalImage;
            computerChoice = finalImage.split('.')[0]; 
            console.log("Computer Choice: " + computerChoice);
            computerDone = true;
            if (humanDone && computerDone) {
                checkWinner();
            }
        }
    }, intervalTime);
}

let winner;
function showWinner(resultText) {
    const announcementDiv = document.getElementById("congrats");
    const message = document.getElementById("winnerMessage");

    message.textContent = resultText; // Set custom message like "You Win!" or "Draw!"
    announcementDiv.style.display = "block";
}

let message = "";
function checkWinner() {
    if (humanChoice === computerChoice) {
        winner = "none";
        message = "It's a draw!";
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'paper' && computerChoice === 'rock') ||
             (humanChoice === 'scissors' && computerChoice === 'paper')) {
                winner = "human";
                message = winner + " wins!";
    } else {
        winner = "computer";
        message = winner + " wins!";
    }

    // ⏱️ Delay showing the result
    setTimeout(() => {
        showWinner(message);
    }, 500);
}