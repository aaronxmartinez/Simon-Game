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
    return gamePattern.push(randomChosenColor);
}
