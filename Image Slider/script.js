const nextButton = document.getElementById("nextButton");
let currentIndex = 0;

const images = [
    'Cat-1.jpg',
    'Cat-2.jpg',
    'Cat-3.jpg',
    'Cat-4.jpg',
    'Cat-5.jpg',
    'Cat-6.jpg'
]

imageDisplay = document.getElementById("imageDisplay");
imageDisplay.src =  images[0];


nextButton.addEventListener("click", nextImg);

function nextImg() {
    console.log("Button clicked"); // Check if the button click event is being detected
    currentIndex++;
    console.log("Current Index:", currentIndex); // Check the value of currentIndex
    if (currentIndex >= images.length) {
        currentIndex = 0;
        console.log("Resetting index to 0"); // Check if the index is being reset
    }
    imageDisplay.src = images[currentIndex];
    console.log("Image displayed:", images[currentIndex]); // Check which image is being displayed
}