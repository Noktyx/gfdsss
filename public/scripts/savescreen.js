const fella = document.getElementById("fella");

let speedX = 3;
let speedY = 3;
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
		xAxisPosition = winWidth - box.width;
		speedX = -Math.abs(speedX);
		changeColor();
	} else if (xAxisPosition <= 0) {
		xAxisPosition = 0;
		speedX = Math.abs(speedX);
		changeColor();
	}

	// Y-Axis
	if ((yAxisPosition + box.height) >= winHeight) {
		yAxisPosition = winHeight - box.height;
		speedY = -Math.abs(speedY);
		changeColor();
	} else if (yAxisPosition <= 0) {
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
