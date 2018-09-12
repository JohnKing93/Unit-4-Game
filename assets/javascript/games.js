$(document).ready(function () {

// Genrtate random number for five variables:
// one target score variable between 19 and 120;

    function getRandomTargetScore(min, max) {
        min = Math.ceil(19);
        max = Math.floor(120);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var targetScore = getRandomTargetScore();

// four crystal value variables between 1 and 12.

    function getRandomCrystalValue(min, max) {
        min = Math.ceil(1);
        max = Math.floor(12);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var crystalOne = getRandomCrystalValue();
    var crystalTwo = getRandomCrystalValue();
    var crystalThree = getRandomCrystalValue();
    var crystalFour = getRandomCrystalValue();

// Create wins, losses, and total score variables with values of 0.

    var winsCounter = 0;
    var lossesCounter = 0;
    var totalScoreCounter = 0;

// Insert score counter variables into DOM.

    var insertWinsCounter = document.getElementById("wins-counter");
    insertWinsCounter.textContent = winsCounter;
    var insertLossesCounter = document.getElementById("losses-counter");
    insertLossesCounter.textContent = lossesCounter;
    var insertTargetScore = document.getElementById("target-score");
    insertTargetScore.textContent = targetScore;
    var insertTotalScore = document.getElementById("total-score");
    insertTotalScore.textContent = totalScoreCounter;

    if (totalScoreCounter < targetScore) {

        $("#crystal-one").on("click", function () {
            totalScoreCounter += crystalOne;
        })

        $("#crystal-two").on("click", function () {
            totalScoreCounter += crystalTwo;
        })

        $("#crystal-three").on("click", function () {
            totalScoreCounter += crystalThree;
        })

        $("#crystal-four").on("click", function () {
            totalScoreCounter += crystalFour;
        })
    }
    else if (totalScoreCounter === targetScore) {
        alert("You win! :)");
        winsCounter++;
        totalScoreCounter = 0;
        targetScore = getRandomTargetScore();
        crystalOne = getRandomCrystalValue();
        crystalTwo = getRandomCrystalValue();
        crystalThree = getRandomCrystalValue();
        crystalFour = getRandomCrystalValue();
    }
    else if (totalScoreCounter > targetScore) {
        alert("You loose! :(");
        lossesCounter++;
        totalScoreCounter = 0;
        targetScore = getRandomTargetScore();
        crystalOne = getRandomCrystalValue();
        crystalTwo = getRandomCrystalValue();
        crystalThree = getRandomCrystalValue();
        crystalFour = getRandomCrystalValue();
    }
})

// On click of crystal, increment score counter variable by the crystal's value.

// If total score = target target score, show win message and increment wins variable.

// If total score > target score, show loss message and increment losses variable.

// When either condition is met:
// regenerate random values for target score and crystal variables;

// set total score variable value to 0.