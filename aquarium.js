// Variables
let fishArray = [];
let compatibilityReport = [];
let dirYTracker = [];
let tankWidth = window.innerWidth;
let swimmingWidth = tankWidth - 160;
let tankCenter = swimmingWidth/2;
let tankHeight = window.innerHeight;
let swimSpeed = 10; // The global speed at which all of the fish move.

// OK now functions
// General Functions
function removeValueAtIndex(index, list) {
	let list1 = list.slice(0,index);
	let list2 = list.slice(index+1, list.length);
	return list1.concat(list2);
}
function moveValue(value, list, start, end) {
	list = removeValueAtIndex(start, list);
	list.splice(end,0,value);
	return list;
}
function removeValueFromArray (value, array) {
	let index = findValueIn2DArray(value, array);
	let array1 = array.slice(0, index);
	let array2 = array.slice(index+1, array.length);
	return (array1.concat(array2));
}
function findValueIn2DArray(value, array) {
	for (i = 0; i < array.length; i++) {
		if (array[i] === value) {
			return i;
		}
	}
	console.log(`Value '${value}' not found in array`);
	return -1;
}
function removeDuplicates(array) {
	let uniqueValues = [];
	let qualifier = 1;
	for (i = 0; i<array.length; i++) {
		for (n=0; n<uniqueValues.length;n++) {
			if (uniqueValues[n] === array[i]) {
				qualifier = 0;
				break;
			}
		}
		if (qualifier === 1) {
			uniqueValues.push(array[i]);
		}
		qualifier = 1;
	}
	return uniqueValues;
}

// Fishy Functions
/*
function addToFishArray(newFish) {
    fishArray.push(newFish);
    setFishCoordinates();
    writeFish();
    console.log(checkFishCompatibility(newFish));
}
*/
class createNewFish {
	constructor(species, posX, posY, dirX, dirY, xSin, speed) {
		this.species = species;
		this.posX = posX;
		this.posY = posY;
		this.dirX = dirX;
		this.dirY = dirY;
		this.xSin = xSin;
		this.speed = speed;
	}
}
function addFish(newFish) {
	let fishToAdd = new createNewFish(
		newFish, // species
		(Math.random() * (tankWidth - 400) + 160), // posX
		(Math.random() * (tankHeight - 200)), // posY
		Math.floor(0.5 - Math.random()), // dirX
		Math.floor(0.5 - Math.random()), // dirY
		(Math.random() * Math.PI), // sin height
		Math.random() * 10 // speed
	)
	fishArray.push(fishToAdd);
}
function removeFish(oldFish) {
	for (i = 0; i < fishArray.length; i++) {
		if (fishArray[i].species == oldFish) {
			fishArray = removeValueFromArray(fishArray[i], fishArray);
			break;
		}
	}
}
function writeFish () {
	let placedFish = [];
	for (i=0; i<fishArray.length; i++){
		if (fishArray[i] !== undefined) {
		if (fishArray[i].dirX > 0) {
			placedFish[i] = 
			'<div class = "fishBox" id = "'+fishArray[i].species+'" style = "top: '+fishArray[i].posY+'px; left: '+fishArray[i].posX+'px;"></div>';
		} else {
			placedFish[i] = 
			'<div class = "fishBoxRev" id = "'+fishArray[i].species+'" style = "top: '+fishArray[i].posY+'px; left: '+fishArray[i].posX+'px;"></div>';
		}

			/* Will output like: 
			<div id = "clownfish" style = "top: 20px; left: 400px;"></div> */
	}
}
	document.getElementById('swimmingFish').innerHTML = placedFish;	
}
function moveFish () {
	for (i=0; i<fishArray.length; i++) {
		if (fishArray[i].posX > tankWidth-100 || fishArray[i].posX < 160) {
			fishArray[i].dirX *= -1;
		}
		if (fishArray[i].posY > tankHeight-100 || fishArray[i].posY < 100) {
			fishArray[i].dirY *= -1;
		}
		fishArray[i].posX += fishArray[i].dirX;
		fishArray[i].posY += (Math.sin(fishArray[i].xSin))/4 + fishArray[i].dirY// fishArray[i].dirY;
		fishArray[i].xSin += Math.random() * .05;
	}
	writeFish();
}
function animateFish() {
	setInterval(moveFish, swimSpeed);
}
function reset () {
	fishArray = [];
	placedFish = [];
	coordX = [];
	coordY = [];
	dirX = [];
	dirY = [];
	document.getElementById('swimmingFish').innerHTML = placedFish;
}
//OK Start.
animateFish();