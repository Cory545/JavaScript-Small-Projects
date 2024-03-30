let intervalId;
let countDownNumber;

// Start button
function startTimer(){
    document.getElementById("countdown");
    // Declaring what the variable of countDownNumber is equal to.
    countDownNumber = 10;
    clearInterval(intervalId);
    // Counts down from whatever number it is, 1 by each second.
    intervalId = setInterval(updateCountdown, 1000);
    // Function of "updateCountdown".
    function updateCountdown(){
        // Counts down. 2nd line down updates the number of "countdown"
        // to what countDownNumber is equal to.
        countDownNumber--;
        document.getElementById("countdown").textContent = countDownNumber;
        // Conditional, if countDownNumber is equal to 0, stops the countdown
        if (countDownNumber === 0) {
            clearInterval(intervalId);
        }
    }
}

// Reset button
function resetTimer(){
    document.getElementById("countdown");
    //When pressed, makes the variable 10. Clears whatever is in intervalId.
    // Then changes the text of "countdown" to "countDownNumber" which is 10.
    countDownNumber = 10;
    clearInterval(intervalId);
    document.getElementById("countdown").textContent = countDownNumber;
}
