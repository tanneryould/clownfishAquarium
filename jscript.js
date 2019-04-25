// Variables
let fishArray = [];
let placedFish = [];
let definedFish = [];
let coordX = [];
let coordY = [];
let dirX = [];
let dirY = [];
let dirYTracker = [];
let tankWidth = window.innerWidth;
let tankHeight = window.innerHeight;
let stop = false;
let swimSpeed = 10;
// Functions
function addToFishArray(newFish) {
	fishArray.push(newFish);
	setFishCoordinates();
	writeFish();

}
function removeFromFishArray(oldFish) {
	let tracker = 0;
	for (i = 0; i < fishArray.length; i++) {
		if (fishArray[i] == oldFish) {
			fishArray[i] = "";
			definedFish[i] = undefined;
			i = fishArray.length + 1;
		}
	}
}
function fishCompatibility() {
	let blueTangCount = 0;
	for (i=0; i<fishArray.length; i++) {
		if (fishArray[i] == 'blueTang') {
			blueTangCount++;
		}
	}
	if (blueTangCount > 0) {
		alert('Hey, I get that you enjoyed Finding Nemo, but Blue Tangs are fucking huge. Are you sure you want huge fucking fish in your tank?');
	}
}
function setFishCoordinates() {
	for (i=0; i<fishArray.length; i++){
		if (definedFish[i] == undefined) {
			coordX[i] = Math.random() * (tankWidth - 200) + 160;
			coordY[i] = Math.random() * (tankHeight - 200);
			dirX[i] = (1 - (Math.random() + Math.random()))*2;
			dirY[i] = (1 - (Math.random() + Math.random()))/2;
			// dirY[i] = (1 - (Math.random() + Math.random()))/2;
			definedFish[i] = i;
		}
	}
}
function writeFish () {
	for (i=0; i<fishArray.length; i++){
		if (dirX[i] > 0) {
			placedFish[i] = 
			'<div class = "fishBox" id = "'+fishArray[i]+'" style = "top: '+coordY[i]+'px; left: '+coordX[i]+'px;"></div>';
		} else {
			placedFish[i] = 
			'<div class = "fishBoxRev" id = "'+fishArray[i]+'" style = "top: '+coordY[i]+'px; left: '+coordX[i]+'px;"></div>';
		}

			/* Will output like: 
			<div id = "clownfish" style = "top: 20px; left: 400px;"></div> */
	}
	document.getElementById('swimmingFish').innerHTML = placedFish;	
}
/* function dontCollide(v) {
	var o = 0;
	for (n = 0; n<fishArray.length; n++) {
		if (o == 0 && Math.abs(coordX[v] - coordX[n]) < 100 && coordX[v] != coordX[n] && Math.abs(coordY[v] - coordY[n]) < 100) {
			dirY[v] *= -1;
			dirX[v] *= -1;
			o = n;
		}
	}
} */
function moveFish () {
	for (i=0; i<fishArray.length; i++) {
		// dontCollide(i);
		if (coordX[i] > tankWidth-100 || coordX[i] < 160) {
			dirX[i] *= -1;
		}
		if (coordY[i] > tankHeight || coordY[i] < 0) {
			dirY[i] *= -1;
		}
		coordX[i] += dirX[i];
		coordY[i] += dirY[i];
	}
	writeFish();
}
function animateFish () {
	setInterval(moveFish, swimSpeed);
}
function buildTank () {
	setFishCoordinates();
	fishCompatibility();
	animateFish();
}
function reset () {
	fishArray = [];
	placedFish = [];
	definedFish = [];
	coordX = [];
	coordY = [];
	dirX = [];
	dirY = [];
	document.getElementById('swimmingFish').innerHTML = placedFish;
	placeFishInTank();
}
function checkFishCompatibility {
	
}