


function startProgressBar() {
    //Getting all the variables at the top
    let progressBar = document.getElementById("progress-bar");
    let currentWidth = 0;
    let targetWidth = 100;
    let duration = 2000; // Total duration of animation in milliseconds
    let interval = 200; // Interval time in milliseconds

    let progress = duration / interval; // Calculate total number of intervals
    let increment = targetWidth / progress;


    //Had to do console logs for them all, because I couldn't find the issue
    console.log("Target width:", targetWidth);
    console.log("Interval:", interval);
    console.log("Duration:", duration);
    console.log("Progress:", progress);
    console.log("Increment:", increment);

    let animationInterval = setInterval(function() {
        currentWidth += increment;
        progressBar.style.width = currentWidth + "%";

        console.log("Current width:", currentWidth);

        if (currentWidth >= targetWidth) {
            clearInterval(animationInterval);
        }
    }, interval);
}

// After a log of googling, seems I needed "DOMContentLoaded" - I'll be researching this outside this project.
document.addEventListener("DOMContentLoaded", function() {
    let startButton = document.getElementById("start-button");

    startButton.addEventListener("click", function() {
        startProgressBar();
    });
});




