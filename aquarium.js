// Variables
let fishArray = [];
let compatibilityReport = [];
let dirYTracker = [];
let tankWidth = window.innerWidth;
let swimmingWidth = tankWidth - 160;
let tankCenter = swimmingWidth/2;
let tankHeight = window.innerHeight;
let swimSpeed = 10; // The global speed at which all of the fish move.

//Huge Table below, expand at your own risk!
const fishList = [
	['Anemones','Azure Damselfish','Banggai cardinal fish','Blue damselfish','Blue green chromis','blueTang','Blueband goby','Bluestreak cleaner wrasse',
	'Clown Triggerfish','Coral Beauty Angelfish','Corals','Crabs, shrimp and snails','Dog faced pufferfish','Domino damsel','Eel','Fire goby','Flame angelfish',
	'Four stripe damselfish','Humbug damselfish','Jewelled blenny','Lionfish','Mandarinfish','Niger Trigger','ocellarisClownfish','Pajama cardinalfish','Sea horses',
	'Sixline wrasse','Watchman goby','Yellowtail damselfish'],
	['Anemones','1','0','0','0','0','0','0','0','2','0','1','1','1','0','1','0','0','2','0','0','0','2','0','0','0','2','0','0','0'],	
	['Azure Damselfish','0','0','1','2.1','2.1','0','0','0','2','0','0','1','1','2.1','2','0','0','2.1','2.1','0','2','0','2','1','1','2','0','0','2.1'],
	['Banggai cardinal fish','0','0','0','0','0','0','0','1','2','0','0','0','1','0','2','0','0','0','0','0','2','0','2','0','0','2','1','0','0'],
	['Blue damselfish','0','2.1','1','0','2.1','0','0','0','2','0','0','1','1','2.1','2','0','0','2.1','2.1','0','2','0','2','1','1','2','0','0','2.1'],
	['Blue green chromis','0','2.1','0','2.1','0','0','0','0','2','0','0','0','1','2.1','2','0','0','2.1','2.1','0','2','0','2','0','0','2','0','0','2.1'],	
	['blueTang','0','0','0','0','0','0','0','0','2','0','0','0','1','0','0','0','0','0','0','0','1','2','1','0','0','2','0','0','0'],
	['Blueband goby','0','0','0','0','0','0','0','0','2','0','0','1','1','0','2','0','0','0','0','0','2','0','2','0','0','0','0','0','0'],
	['Bluestreak cleaner wrasse','0','0','1','0','0','0','0','2','2','0','1','1','1','0','1','0','0','0','0','0','2','0','1','0','1','2','2','0','0'],
	['Clown Triggerfish','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2'],
	['Coral Beauty Angelfish','0','0','0','0','0','0','0','0','2','2','1','0','1','0','1','0','2','0','0','0','1','0','1','0','0','2','0','0','0'],
	['Corals','1','0','0','0','0','0','0','0','2','1','1','1','2','0','2','0','1','2','0','0','1','0','2','0','0','2','0','0','0'],
	['Crabs, shrimp and snails','1','1','0','1','0','0','1','1','2','1','1','1','1','1','1','1','0','1','1','0','1','0','1','0','0','2','1','1','1'],
	['Dog faced pufferfish','1','1','1','1','2','1','1','1','2','1','2','2','1','1','1','1','1','1','1','1','1','2','1','1','1','2','1','1','1'],
	['Domino damsel','0','2.1','1','2.1','2.1','0','0','0','2','0','0','1','1','0','2','0','0','2.1','2.1','0','2','2','2','1','1','2','0','0','2.1'],
	['Eel','1','2','2','2','2','0','2','1','2','1','2','1','1','2','1','2','1','2','2','2','1','2','1','2','2','2','1','2','2'],
	['Fire goby','0','0','0','0','0','0','0','0','2','0','0','2','1','0','2','4','0','0','0','0','2','0','2','0','0','0','0','0','0'],
	['Flame angelfish','0','0','0','0','0','0','0','0','2','2','1','0','1','0','1','0','2','0','0','0','1','0','1','0','0','2','0','0','0'],
	['Four stripe damselfish','0','2.1','1','2.1','2.1','0','0','0','2','0','0','1','1','2.1','2','0','0','0','2.1','0','2','2','2','1','1','2','0','0','2.1'],
	['Humbug damselfish','0','2.1','1','2.1','2.1','0','0','0','2','0','0','1','1','2.1','2','0','0','2.1','0','0','2','2','2','1','1','2','0','0','2.1'],
	['Jewelled blenny','0','0','0','0','0','0','0','0','2','0','0','0','1','0','2','0','0','0','0','0.1','2','0','2','0','0','2','0','0','0'],
	['Lionfish','1','2','2','2','2','1','2','2','2','1','1','1','1','2','1','2','1','2','2','1','0','2','1','2','2','2','2','2','2'],
	['Mandarinfish','2','0','0','0','0','2','0','0','2','0','0','0','2','2','2','0','0','2','2','0','2','0.1','2','0','0','0','0','0','0'],
	['Niger Trigger','0','2','2','2','2','1','2','2','2','1','2','2','1','2','1','2','1','2','2','2','1','2','1','2','2','2','2','2','2'],
	['ocellarisClownfish','0','1','0','1','0','0','0','0','2','0','0','0','1','1','2','0','0','1','1','0','2','0','2','1','0','2','0','0','1'],
	['Pajama cardinalfish','0','1','0','0','0','0','0','1','2','0','0','0','1','0','2','0','0','1','0','0','2','0','2','0','0','2','0','0','0'],
	['Sea horses','2','2','2','2','2','2','0','2','2','2','2','2','2','2','2','0','2','2','2','2','2','0','2','2','2','0','2','0','2'],
	['Sixline wrasse','0','0','1','0','0','0','0','2','2','0','0','1','1','0','1','0','0','0','0','0','2','0','2','0','0','2','2','0','0'],
	['Watchman goby','0','0','0','0','0','0','0','0','2','0','0','1','1','0','2','0','0','0','0','0','2','0','2','0','0','0','0','0','0'],
	['Yellowtail damselfish','0','2.1','1','2.1','2.1','0','0','0','2','0','0','1','1','2.1','2','0','0','2.1','2.1','0','2','0','2','1','1','2','0','0','0']
];

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
		0.4 + Math.random()*.5, // dirX
		(0.4 + Math.random()*.5)/5, // dirY
		(Math.random() * Math.PI),
		10
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
function checkFishCompatibility(inputFish) {
	compatibilityReport = [];
	let fishPosition = findValueIn2DArray(inputFish, fishList[0]);
	let comparedFish;
	for (n=0; n<fishArray.length; n++) {
		comparedFish = findValueIn2DArray(fishArray[n], fishList[0]);
		console.log(comparedFish);
		console.log(fishPosition);
		console.log(fishArray);
		console.log(fishArray.length);
		console.log('value of n is: '+n);
		switch (fishList[comparedFish][fishPosition]) {
			case '0':
				break;
			case '1':
				compatibilityReport.push(`CAUTION: ${inputFish} can coexist with another ${fishArray[n]} only under certain conditions`);
				break;
			case '2':
				compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[n]}`);
				break;	
			case '3':
				compatibilityReport.push(`Damselfish (${inputFish})typically do not like other species of damselfish (${fishArray[n]})`);
				break;
			case '4':
				compatibilityReport.push(`(${inputFish}) want to be in a mated pair. Please add another`);
				break;
			default:
				console.log(`Unable to find inputFish (${inputFish}) and fishArray[i] (${fishArray[n]}) in table fishList
				code returned: ${fishList[comparedFish][fishPosition]}`);
				break;
		}
	}
	return removeDuplicates(compatibilityReport);
}

//OK Start.
animateFish();