
$(document).ready(function () {
    var gameNum = gameNumber();
    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    // UPDATES TO THE INITIAL HTML ELEMENTS
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
        var random = Math.floor(Math.random() * 101) + 19;
        return random;
    }

    // PLAYING HTE GAME - REGISTERS CLICKS
    $(".crystals").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        totalScore += crystalValue;
        click.play();
        $("#total-score").html(totalScore);
        
        if (totalScore === gameNum) {
            wins +=1;
            $("#wins").html(wins);
            winRound.play();
            alert("You did it! Great job beating the odds with this random numbers game.");
            startNewRound();
        }

        else if (totalScore >= gameNum) {
            losses += 1;
            loseRound.play();
            $("#losses").html(losses);
            alert("Bummer, you lost! But don't take it personally, just try again.");
            startNewRound();
        }
    })

    // START A NEW ROUND
    function startNewRound() {
        totalScore = 0;
        valToCrystalNumber();
        gameNum = gameNumber();
        $("#your-number").html(gameNum);
        $("#total-score").html(totalScore);
    }

    // play sounds 
    var winRound = new Audio("assets/javascript/sounds/win.mp3");
    var click = new Audio('assets/javascript/sounds/click.mp3');
    var loseRound = new Audio('assets/javascript/sounds/fail.mp3');
});



// EXTRA----------
    // EVALUATE THE BEST COMBINATION WITH THE LEAST AMOUNT OF CLICKS