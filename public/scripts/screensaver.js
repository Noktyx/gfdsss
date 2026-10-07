const fella = document.getElementById("fella");

// [pixels/frame]
let speedX = 3;
let speedY = 3;
// Positions are randomised, anyway
let xAxisPosition = 0;
let yAxisPosition = 0;


function changeColor() {
	const hue = Math.random() * 360;
	fella.style.filter = `sepia(1) saturate(6) hue-rotate(${hue}deg)`;
}


function animate() {
	const box = fella.getBoundingClientRect();
	const winWidth = window.innerWidth;
	const winHeight = window.innerHeight;

	xAxisPosition += speedX;
	yAxisPosition += speedY;

	// X-Axis
	if ((xAxisPosition + box.width) >= winWidth) {
	    // Right wall
		xAxisPosition = winWidth - box.width;
		speedX = -(Math.abs(speedX));
		changeColor();
	} else if (xAxisPosition <= 0) {
	    // Left wall
		xAxisPosition = 0;
		speedX = Math.abs(speedX);
		changeColor();
	}

	// Y-Axis
	if ((yAxisPosition + box.height) >= winHeight) {
	    // Bottom wall
		yAxisPosition = winHeight - box.height;
		speedY = -(Math.abs(speedY));
		changeColor();
	} else if (yAxisPosition <= 0) {
	    // Top wall
		yAxisPosition = 0;
		speedY = Math.abs(speedY);
		changeColor();
	}


	fella.style.transform = `translate(${xAxisPosition}px, ${yAxisPosition}px)`;
	requestAnimationFrame(animate);
}


function start() {
	const box = fella.getBoundingClientRect();
	xAxisPosition = Math.random() * (window.innerWidth - box.width);
	yAxisPosition = Math.random() * (window.innerHeight - box.height);
	
	requestAnimationFrame(animate);
}


if (fella.complete) start();
else fella.onload = start;

