
// Generate a random number between 1 and 6 for players 1 & 2
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

// Selects the first dice image and updates its source based on the random number for players 1 & 2
var img1 = document.querySelector(".img1");
img1.src = "./images/dice" + randomNumber1 + ".png";
var img2 = document.querySelector(".img2");
img2.src = "./images/dice" + randomNumber2 + ".png";

// Compares the random numbers and updates the result in the heading
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "☝️ Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! ✌️";
}

else {
    document.querySelector("h1").innerHTML = "Draw try again 🫵";
} 
