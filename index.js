const randomNumber1 = Math.floor(Math.random() * 6) + 1;

function changeDiceImage() {
  const imagePaths = {
    1: "./images/dice1.png",
    2: "./images/dice2.png",
    3: "./images/dice3.png",
    4: "./images/dice4.png",
    5: "./images/dice5.png",
    6: "./images/dice6.png",
  };

  document
    .querySelector("img.img1")
    .setAttribute("src", imagePaths[randomNumber1]);
}

changeDiceImage();

const randomNumber2 = Math.floor(Math.random() * 6) + 1;

function changeDiceImage2() {
  const imagePaths = {
    1: "./images/dice1.png",
    2: "./images/dice2.png",
    3: "./images/dice3.png",
    4: "./images/dice4.png",
    5: "./images/dice5.png",
    6: "./images/dice6.png",
  };

  document
    .querySelector("img.img2")
    .setAttribute("src", imagePaths[randomNumber2]);
}

changeDiceImage2();

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "It's a draw!";
}
