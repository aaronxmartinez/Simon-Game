// array for button colors
var buttonColors = ["red", "blue", "green", "yellow"];

// adding game pattern array
var gamePattern = [];

// adding a user clicked pattern array
 var userClickedPattern = [];

// detecting which buttons are clicked, getting the button clicked attributes, and adding to clicked pattern array
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

// detecting whenever a keyboard has been pressed
$(document).one("keypress", nextSequence);
$(document).one("keypress", function(){
    $("h1").text("Level 1");
});

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

function playSound(name){
    // playing sound when buttons are clicked
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    // adding animation to whenever a button is pressed
    $("#" + currentColor).addClass("pressed");

    // removing animation after 100 miliseconds
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}