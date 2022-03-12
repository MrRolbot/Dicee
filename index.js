// Dice Image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImg1 = "dice" + randomNumber1 + ".png";

var randomImgSource1 = "images/" + randomImg1;

document.querySelector(".d1").setAttribute("src",randomImgSource1);


// Dice Image 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImg2 = "dice"+randomNumber2+".png";

var randomImgSource2 = "images/"+randomImg2;

document.querySelector(".d2").setAttribute("src",randomImgSource2);


// Title who won

if (randomNumber1 > randomNumber2) {
    document.querySelector(".who-won").innerHTML = "🚩 Player 1 Wins!";
    document.querySelector(".dice1").style.color = "green";
} 

else if (randomNumber1 < randomNumber2) {
    document.querySelector(".who-won").innerHTML = "Player 2 Wins! 🚩";
    document.querySelector(".dice2").style.color = "green";
} 

else {
    document.querySelector(".who-won").innerHTML = "Draw!";
    document.querySelector(".dice1").style.color = "red";
    document.querySelector(".dice2").style.color = "red";


}
