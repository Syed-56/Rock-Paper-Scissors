let gameActive = true;
let humanDone = false;
let computerDone = false;
let humanChoice, computerChoice;
const images = ['rock.png', 'paper.png', 'scissors.png'];
let winner, message = "";

const inputText = document.getElementById('nameBar');
console.log("Input field:", inputText.value);
function setName() {
    const nameContent = inputText.value.trim();
    if (nameContent === '') {
        alert('Please enter your Name.');
        return;
    }
    else {
        const nameElement = document.getElementById('Player1');
        nameElement.textContent = "👤 " + nameContent;
        console.log("Name set to:", nameContent);
        const gameModes = document.getElementById('modes');
        gameModes.setAttribute('class','modes');

        window.scrollBy({
            top: 100,
            behavior: 'smooth'
        });
    }
}

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

function showWinner(resultText) {
    const announcementDiv = document.getElementById("congrats");
    const message = document.getElementById("winnerMessage");

    message.textContent = resultText; // Set custom message like "You Win!" or "Draw!"
    announcementDiv.style.display = "block";
}

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

function playAgain(choice) {
    const announcementDiv = document.getElementById("congrats");

    if (choice) {
        announcementDiv.style.display = "none";
        humanDone = false;
        computerDone = false;
        let imgElement1 = document.getElementById('mainImageHuman'); 
        imgElement1.src = 'Qmark.png'; 
        let imgElement2 = document.getElementById('mainImageComputer'); 
        imgElement2.src = 'Qmark.png'; 
    } else {
        announcementDiv.style.display = "none";
        gameActive = false;
    }
}

function handleHumanChoice(imageName) {
    if (!gameActive) return; 
    humanDone = false;
    computerDone = false;
    changeImageHuman(imageName);
    const compImage = images[Math.floor(Math.random() * images.length)];
    changeImageComputer(compImage);
}

function playGame() {
    playAgain(true); 
}