
/*
// randome image1

var randomNumber1 = Math.floor(Math.random()*6+1)
var randomImage1 = "images/dice" + randomNumber1 + ".png";

// randome image2

var randomNumber2 = Math.floor(Math.random()*6+1)
var randomImage2 = "images/dice" + randomNumber2 + ".png";

// html objects

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);
var header = document.querySelectorAll("h1")[0];

// if/else, printing out winner and changing header

if(randomNumber1>randomNumber2){
  header.innerHTML = "Player 1 wins";
} else if (randomNumber2>randomNumber1){
  header.innerHTML = "Player 2 wins";
 }else{
 header.innerHTML= "draw";
}

*/

var btn = document.getElementById("btn");


function roll(){

  // randome image1

  var randomNumber1 = Math.floor(Math.random()*6+1)
  var randomImage1 = "images/dice" + randomNumber1 + ".png";

  // randome image2

  var randomNumber2 = Math.floor(Math.random()*6+1)
  var randomImage2 = "images/dice" + randomNumber2 + ".png";

  // html objects

  document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
  document.querySelectorAll("img")[1].setAttribute("src", randomImage2);
  var header = document.querySelectorAll("h1")[0];

  // if/else, printing out winner and changing header

  if(randomNumber1>randomNumber2){
    header.innerHTML = "Player 1 wins";
  } else if (randomNumber2>randomNumber1){
    header.innerHTML = "Player 2 wins";
   }else{
   header.innerHTML= "draw";
  }

}

btn.onclick=roll;
