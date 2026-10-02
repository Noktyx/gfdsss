const logo = document.getElementById("logo");

let speedX = 3;
let speedY = 3;
let x = 0;
let y = 0;


function changeColor() {
	const hue = Math.random() * 360;
	logo.style.filter = `sepia(1) saturate(6) hue-rotate(${hue}deg)`;
}


function animate() {
	const rect = logo.getBoundingClientRect();
	const winWidth = window.innerWidth;
	const winHeight = window.innerHeight;

	x += speedX;
	y += speedY;

	// X-Axis
	if ((x + rect.width) >= winWidth) {
		x = winWidth - rect.width;
		speedX = -Math.abs(speedX);
		changeColor();
	} else if (x <= 0) {
		x = 0;
		speedX = Math.abs(speedX);
		changeColor();
	}

	// Y-Axis
	if ((y + rect.height) >= winHeight) {
		y = winHeight - rect.height;
		speedY = -Math.abs(speedY);
		changeColor();
	} else if (y <= 0) {
		y = 0;
		speedY = Math.abs(speedY);
		changeColor();
	}


	logo.style.transform = `translate(${x}px, ${y}px)`;
	requestAnimationFrame(animate);
}


function start() {
	const r = logo.getBoundingClientRect();
	x = Math.random() * (window.innerWidth - r.width);
	y = Math.random() * (window.innerHeight - r.height);
	requestAnimationFrame(animate);
}


if (logo.complete) start();
else logo.onload = start;
