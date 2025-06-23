const images = ['rock.png', 'paper.png', 'scissors.png'];
function changeImage(finalImage) {
    let imgElement = document.getElementById('mainImage');
    let counter = 0;
    let spinTime = 1000; // 1 second
    let intervalTime = 100; // how fast it cycles
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