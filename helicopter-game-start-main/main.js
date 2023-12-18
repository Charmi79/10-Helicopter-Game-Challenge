// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables (0nce)
let heliImg = document.createElement("img");
heliImg.src = "img/heliBlueTransparent.png";
let mouseIsPressed = false;

// Global Variables (Reset)
let state;
let heli;
let wall1, wall2, wall3;
reset();
// Draw Function
window.addEventListener("load", draw);

function draw() {
	if (state === "start") {
		drawStart();
	} else if (state === "gameon") {
		runGame();
	} else if (state === "gameover") {
		drawGameOver();
	}

	// Request Animation Frame
	requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);

function mousedownHandler() {
	mouseIsPressed = true;

	if (state === "start") {
		state = "gameon";
	}
}

function mouseupHandler() {
	mouseIsPressed = false;
}
