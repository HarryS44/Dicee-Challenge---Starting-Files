const randomNumber1 = Math.floor(Math.random() * 7);

function changeDiceImage() {
    

    const imagePaths = {
        1: "./images/dice1.png",
        2: "./images/dice2.png",
        3: "./images/dice3.png",
        4: "./images/dice4.png",
        5: "./images/dice5.png",
        6: "./images/dice6.png"
    };

    const imagePath = imagePaths[randomNumber1];

    document.querySelector("img.img1").setAttribute("src", imagePath);
}

changeDiceImage()

const randomNumber2 = Math.floor(Math.random() * 7);

function changeDiceImage2() {
    

    const imagePaths = {
        1: "./images/dice1.png",
        2: "./images/dice2.png",
        3: "./images/dice3.png",
        4: "./images/dice4.png",
        5: "./images/dice5.png",
        6: "./images/dice6.png"
    };

    const imagePath = imagePaths[randomNumber2];

    document.querySelector("img.img2").setAttribute("src", imagePath);
}

changeDiceImage2()

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a draw!";
}

