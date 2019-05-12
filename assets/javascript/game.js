
// $(document).ready(function () {
// var crystalArray = [];
var crystal1 = crystalNumber();
var crystal2 = crystalNumber();
var crystal3 = crystalNumber(); 
var crystal4 = crystalNumber();
var gameNum = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;

// CRYSTAL NUMBER GENERATOR OPTION 2
function crystalNumber() {
    // var array = [] SHOULD I BE USING AN ARRAY HERE ????
    var random = Math.floor(Math.random() * 12) + 1;
    // SHOULD I ASSIGN .val() to element ID here?
    return random;
}

// GAME NUMBER GENERATOR
function gameNumber() {
    var gameNum = Math.floor(Math.random() * 101) + 19;
    return gameNum;
}

// SET UP VALUES FOR CRYSTALS
// display the crystal values on the html page using .val()
// set total to 0



// CALCULATING SCORE
// when an image is selected, add that value to the totalScore
// return totalScore



// HAS WON
// if the sum for guesses === the original game value, win
// call a function for updating wins/losses
function isWinner(gameNum, totalScore) {
    if (gameNum === totalScore) {
        wins +=1;
        updateHTML()
        return true;
    }
}


// HAS LOST
// if the sum for gussess > the gameNum, lose
// call a function for updating wins/losses
function isLoser(gameNum, totalScore) {
    if (totalScore > gameNum) {
        losses +=1;
        updateHTML()
        return true;
    }
}

// PLAYING THE GAME
// listen for button clicks on the gems
// when a button is clicked, update the guesses value/variable
// continue to add together the numbers for the crystals that are clicked
// display sum on the page for guesses
$("#img-pink-gem").click(function () {
    totalScore += crystal1;    
})

$("#img-cupcake").on("click", function () {

})

$("#img-aztec").click(function () {

})


$("#img-ice-cube").click(function () {

})

// STARTING A NEW ROUND
// call funciton for generating new crystal number
// call funciton for generating new random number


// UPDATE HTML
// display the game number on HTML
// give value to each image on HTML
function updateHTML() {
    $("#your-number").html(gameNum);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#total-score").html(totalScore);
}



// });


// EXTRA----------
    // EVALUATE THE BEST COMBINATION WITH THE LEAST AMOUNT OF CLICKS