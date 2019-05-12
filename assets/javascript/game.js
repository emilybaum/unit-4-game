
$(document).ready(function () {
var gameNum = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;
    // var gettingCrystalsNumbers = valToCrystalNumber();

$("#your-number").html(gameNum);
$("#wins").html(wins);
$("#losses").html(losses);
$("#total-score").html(totalScore);

// RANDOM NUMBER FOR CRYSTALS
function randomCrystalNum() {
    var random = Math.floor(Math.random() * 12) + 1;
    return random;
}

// CRYSTAL NUMBER GENERATOR OPTION 2
function valToCrystalNumber() {
    var array = ["#crystal1", "#crystal2", "#crystal3", "#crystal4"]
    for (var i = 0; i < array.length; i++) {
        $(array[i]).attr("data-crystalvalue", randomCrystalNum());
    }
}
valToCrystalNumber();

// GAME NUMBER GENERATOR
function gameNumber() {
    var gameNum = Math.floor(Math.random() * 101) + 19;
    return gameNum;
}
gameNumber();


$(".crystals").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + totalScore);

    if (totalScore === gameNum) {
        alert("You win!");
    }

    else if (totalScore >= gameNum) {
        alert("You lose!!");
    }

});








// CALCULATING SCORE
// when an image is selected, add that value to the totalScore
// return totalScore

// HAS WON
// if the sum for guesses === the original game value, win
// call a function for updating wins/losses
// function isWinner(gameNum, totalScore) {
//     if (gameNum === totalScore) {
//         wins +=1;
//         updateHTML()
//         return true;
//     }
// }


// HAS LOST
// if the sum for gussess > the gameNum, lose
// call a function for updating wins/losses
// function isLoser(gameNum, totalScore) {
//     if (totalScore > gameNum) {
//         losses +=1;
//         updateHTML()
//         return true;
//     }
// }

// PLAYING THE GAME
// listen for button clicks on the gems
// when a button is clicked, update the guesses value/variable
// continue to add together the numbers for the crystals that are clicked
// display sum on the page for guesses






// STARTING A NEW ROUND
// call funciton for generating new crystal number
// call funciton for generating new random number


// UPDATE HTML
// display the game number on HTML
// give value to each image on HTML



});


// EXTRA----------
    // EVALUATE THE BEST COMBINATION WITH THE LEAST AMOUNT OF CLICKS