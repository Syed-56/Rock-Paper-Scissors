const images = ['rock.png', 'paper.png', 'scissors.png'];
function changeImageHuman(finalImage) {
    let imgElement = document.getElementById('mainImageHuman');
    let counter = 0;
    let spinTime = 2000; // 1 second
    let intervalTime = 70; // how fast it cycles
    let interval;

    interval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * images.length);
        imgElement.src = images[randomIndex];
        counter += intervalTime;

        if (counter >= spinTime) {
            clearInterval(interval);
            imgElement.src = finalImage; // Set the final image after spinning
        }
    }, intervalTime);
}

function changeImageComputer() {
    let finalImage = images[Math.floor(Math.random() * images.length)];
    let imgElement = document.getElementById('mainImageComputer');
    let counter = 0;
    let spinTime = 2000; // 1 second
    let intervalTime = 70; // how fast it cycles
    let interval;

    interval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * images.length);
        imgElement.src = images[randomIndex];
        counter += intervalTime;

        if (counter >= spinTime) {
            clearInterval(interval);
            imgElement.src = finalImage; // Set the final image after spinning
        }
    }, intervalTime);
}