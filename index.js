// array for button colors
var buttonColors = ["red", "blue", "green", "yellow"];

// adding game pattern array
var gamePattern = [];

function nextSequence(){
    // creating random number generator
    var randomNumber = Math.floor((Math.random() * 4));

    // choosing button colors depending on random number
    var randomChosenColor = buttonColors[randomNumber];
    
    // adding the chosen random color into the gamePattern array
    gamePattern.push(randomChosenColor);

    // selecting the random button color with the button id with animation
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    // playing matching button sound with matching button color
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}