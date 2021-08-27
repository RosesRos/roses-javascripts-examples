
// Select colors
const colors = ["red", "blue", "yellow", "orange", "skyblue", "green", "yellowgreen", "purple", "black", "pink", "aqua"];

// change the background of the canvas when button is clicked

let button = document.getElementById("button");

button.addEventListener("click", function () {
    // Select a random number between 1 - 12
    let index = parseInt((Math.random() * colors.length) + 1);
    // Grab the canvas
    let canvas = document.getElementById("canvas");
    canvas.style.background = `${colors[index]}`
})

