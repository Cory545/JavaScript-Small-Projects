// Defining my variables, getting slightly used to this now. First thing I usually do
// Although I need to check if this isn't very efficient at all.
const burgerButton = document.getElementById("burger");
const friesButton = document.getElementById("fries");
const descriptionBox = document.getElementById("descriptionBox");

//Adding event listeners to my button, need to check if good to group up at the top
// Or if it wastes power and unnecessary.
burgerButton.addEventListener("click", ButtonPress);
friesButton.addEventListener("click", ButtonPress);

// Making a variable for descriptions, and attaching ids with descriptions so they
// Can be called.
const descriptions = {
    burger: "Honestly this is just a test for my JavaScript.",
    fries: "Looks pretty ugly, cause I'm practising Javascript, not CSS. That'll happen later",
};

//The actual function. Waits on a click of a button, finds out which id made the click
// and then changes the text inside the box to match the description from above this function

//I struggled to find why this wouldn't work so I put console logs around the place.
// Conclusion was that it simply didn't like the IDs I had. I changed them, works.
//How fun...
function ButtonPress(event){
    const buttonID = event.target.id; 
    console.log("Button ID:", buttonID); // Log the button ID
    const description = descriptions[buttonID];
    console.log("Description:", description); // Log the description
    descriptionBox.textContent = description;
}

