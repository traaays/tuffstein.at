var spriteNumber = getRandomNumber();

function getRandomNumber() {
    return Math.floor(Math.random() * 4);
}

// Function that runs on start and changes the image based on the number
window.addEventListener('load', function() {
    var img = document.getElementById("centerImg");
    switch (spriteNumber) {
        case 0:
            img.src = "assets/randGifs/fatassbanananooutline.gif";
            break;
        case 1:
            img.src = "assets/randGifs/holdfrog.gif";
            break;
        case 2:
            img.src = "assets/randGifs/mrsausageap64big.gif";
            break;
        case 3:
            img.src = "assets/randGifs/ceedeedee.gif";
            break;
    }
});

