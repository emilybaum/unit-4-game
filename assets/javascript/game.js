
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
        var gameNum = Math.floor(Math.random() * 101) + 19;
        return gameNum;
    }

    // PLAYING HTE GAME - REGISTERS CLICKS
    $(".crystals").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        totalScore += crystalValue;
        $("#total-score").html(totalScore);
        
        if (totalScore === gameNum) {
            wins +=1;
            $("#wins").html(wins);
            alert("You win!");
            startNewRound();
        }

        else if (totalScore >= gameNum) {
            losses += 1;
            $("#losses").html(losses);
            alert("You lose!!");
            startNewRound();
        }
    
    })

    // START A NEW ROUND
    function startNewRound() {
        valToCrystalNumber();
        gameNumber();
        totalScore = 0
    }
});



// EXTRA----------
    // EVALUATE THE BEST COMBINATION WITH THE LEAST AMOUNT OF CLICKS