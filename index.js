// array for button colors
var buttonColors = ["red", "blue", "green", "yellow"];

// adding game pattern array
var gamePattern = [];

// adding a user clicked pattern array
 var userClickedPattern = [];

 // keeping track if game has started 
 var started = false;
 
 // starting level at 0
 var level = 0;

// detecting whenever a keyboard has been pressed
$(document).keypress(function(){
    if (!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// detecting which buttons are clicked, getting the button clicked attributes, and adding to clicked pattern array
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer();
});

function nextSequence(){
    // increasing level every time function is called
    level++;
    
    // updating level when function is called
    $("#level-title").text("Level " + level);
    
    // creating random number generator
    var randomNumber = Math.floor(Math.random() * 4);
    
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

function checkAnswer(){
    // checks answer if the last index of gamePattern and userClickedPattern and displays game over if wrong
    if (gamePattern[gamePattern.length - 1] !== userClickedPattern[userClickedPattern.length - 1]){
        $("#level-title").text("Wrong! Game Over at Level " + level + "!");
        $("body").addClass("wrong");
        setTimeout(function(){
            $("body").removeClass("wrong");
        }, 100);
        $(".btn").off("click");
        restartButton();
    } else {
        setTimeout(function(){
            nextSequence();
        }, 500);
    }
}

function restartButton(){
    // added function to add a button whenever the wrong button is pressed with the ability to reload page
    $(".container").html("<button>Press to Restart!</button>");
    $("button").addClass("button");
    $("button").click(function(){
        window.location.reload();
    });
}