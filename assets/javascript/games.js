$(document).ready(function () {

    // Create all variables with values of 0.
        var winsCounter = 0;
        var lossesCounter = 0;
        var targetScore = 0;
        var totalScoreCounter = 0;
        var crystalOne = 0;
        var crystalTwo = 0;
        var crystalThree = 0;
        var crystalFour = 0;

    // Genrtate random interger between two numbers.
        function getRandomNumber (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    // Regenerate variables at the end of the each round.
        function reGenVars() {
            targetScore = getRandomNumber(19, 120);
            crystalOne = getRandomNumber(1, 12);
            crystalTwo = getRandomNumber(1, 12);
            crystalThree = getRandomNumber(1, 12);
            crystalFour = getRandomNumber(1, 12);
            totalScoreCounter = 0;
            insertTargetScore.textContent = "Target: " + targetScore;
            insertTotalScore.textContent = "Total: " + totalScoreCounter;
        }

    // Insert variables into DOM.
        var insertWinsCounter = document.getElementById("wins-counter");
        insertWinsCounter.textContent = "Wins: " + winsCounter;
        var insertLossesCounter = document.getElementById("losses-counter");
        insertLossesCounter.textContent = "Losses: " + lossesCounter;
        var insertTargetScore = document.getElementById("target-score");
        insertTargetScore.textContent = "Target: " + targetScore;
        var insertTotalScore = document.getElementById("total-score");
        insertTotalScore.textContent = "Total: " + totalScoreCounter;

    // Start round.
    reGenVars();

    // On click of any crystal, increment score counter variable by the specific crystal's value.
        $(".crystal-img").on("click", function () {
            
            var id = $(this).attr("id");

            if (totalScoreCounter < targetScore) {

                if (id === "crystal-one") {
                    totalScoreCounter += crystalOne;
                }

                else if (id === "crystal-two") {
                    totalScoreCounter += crystalTwo;
                }

                else if (id === "crystal-three") {
                    totalScoreCounter += crystalThree;
                }

                else if (id === "crystal-four") {
                    totalScoreCounter += crystalFour;
                }

                insertTotalScore.textContent = "Total: " + totalScoreCounter;
            }
            
            // If total score = target target score, show win message and increment wins variable.
            // If total score > target score, show loss message and increment losses variable.
            // When either condition is met, call new round function.
            else if (totalScoreCounter === targetScore) {
                alert("You win! :)");
                winsCounter++;
                insertWinsCounter.textContent = "Wins: " + winsCounter;
                reGenVars();
                }

            else {
                alert("You loose! :(");
                lossesCounter++;
                insertLossesCounter.textContent = "Losses: " + lossesCounter;
                reGenVars();
            }
        });
    });