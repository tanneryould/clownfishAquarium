// Variables
let fishArray = [];
let compatibilityReport = [];
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
	['Blue tang','0','0','0','0','0','0','0','0','2','0','0','0','1','0','0','0','0','0','0','0','1','2','1','0','0','2','0','0','0'],
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
buildTank();
// Functions
function addToFishArray(newFish) {
	fishArray.push(newFish);
	setFishCoordinates();
	writeFish();
	console.log(checkFishCompatibility(newFish));
}
function removeFromFishArray(oldFish) {
	let tracker = 0;
	for (i = 0; i < fishArray.length; i++) {
		if (fishArray[i] == oldFish) {
			fishArray[i] = '';
			definedFish[i] = undefined;
			i = fishArray.length + 1;
		}
	}
	console.log(checkFishCompatibility());
}
function setFishCoordinates() {
	for (i=0; i<fishArray.length; i++){
		if (definedFish[i] == undefined) {
			coordX[i] = Math.random() * (tankWidth - 400) + 160;
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
function animateFish() {
	setInterval(moveFish, swimSpeed);
}
function buildTank() {
	setFishCoordinates();
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
function findValueIn2DArray(value, array) {
	for (i = 0; i < array.length; i++) {
		if (array[i] === value) {
			return i;
		}
	}
	console.log(`Value '${value}' not found in array`);
	return -1;
}
/* function checkFishCompatibility2() {
	compatibilityReport = [];
	let inputFish;
	for (n = 0; n<fishArray.length; n++) {
		inputFish = fishArray[n];
		if (inputFish === 'blueGreenChromis') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'dogFacedPufferfish':
						compatibilityReport.push(`\nCAUTION: ${inputFish} 
						can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'lionfish':
					case 'seaHorse':
					case 'eel':
					case 'nigerTrigger':
					case 'clownTriggerfish':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					case 'yellowtailDamselfish':
					case 'blueDamselfish':
					case 'dominoDamsel':
					case 'humbugDamselfish':
					case 'fourStripeDamselfish':
					case 'azureDamselfish':
						compatibilityReport.push(`Damselfish typically do not like other species of damselfish`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'blueDamselfish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'banggaiCardinalFish':
					case 'crab':
					case 'shrimp':
					case 'snail':
					case 'dogFacedPufferfish':
					case 'ocellarisClownfish':
					case 'pajamaCardinalfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'eel':
					case 'lionfish':
					case 'nigerTrigger':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					case 'azureDamselfish':
					case 'blueDamselfish':
					case 'blueGreenChromis':
					case 'dominoDamsel':
					case 'fourStripeDamselfish':
					case 'humbugDamselfish':
					case 'yellowtailDamselfish':
						compatibilityReport.push(`Damselfish typically do not like other species of damselfish`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'yellowtailDamselfish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'dogFacedPufferfish':
					case 'ocellarisClownfish':
					case 'banggaiCardinalFish':
					case 'pajamaCardinalfish':
					case 'crab':
					case 'shrimp':
					case 'snail': 
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'eel':
					case 'lionfish':
					case 'nigerTrigger':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					case 'azureDamselfish':
					case 'blueDamselfish':
					case 'blueGreenChromis':
					case 'dominoDamsel':
					case 'fourStripeDamselfish':
					case 'humbugDamselfish':
						compatibilityReport.push(`Damselfish typically do not like other species of damselfish`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'dominoDamsel') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'banggaiCardinalFish':
					case 'crab':
					case 'shrimp':
					case 'snail':
					case 'dogFacedPufferfish':
					case 'ocellarisClownfish':
					case 'pajamaCardinalfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'eel':
					case 'lionfish':
					case 'nigerTrigger':
					case 'seaHorse':
					case 'mandarinfish':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					case 'azureDamselfish':
					case 'blueDamselfish':
					case 'blueGreenChromis':
					case 'fourStripeDamselfish':
					case 'humbugDamselfish':
					case 'yellowtailDamselfish':
						compatibilityReport.push(`Damselfish typically do not like other species of damselfish`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'humbugDamselfish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'banggaiCardinalFish':
					case 'crab':
					case 'shrimp':
					case 'snail':
					case 'dogFacedPufferfish':
					case 'ocellarisClownfish':
					case 'pajamaCardinalfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'eel':
					case 'lionfish':
					case 'mandarinfish':
					case 'nigerTrigger':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					case 'azureDamselfish':
					case 'blueDamselfish':
					case 'blueGreenChromis':
					case 'dominoDamsel':
					case 'fourStripeDamselfish':
					case 'yellowtailDamselfish':
						compatibilityReport.push(`Damselfish typically do not like other species of damselfish`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'fireGoby') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'dogFacedPufferfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'fireGoby':
						compatibilityReport = compatibilityReport+`\nFire gobies need to be in mated pairs`;
						break;
					case 'clownTriggerfish':
					case 'crab':
					case 'shrimp':
					case 'snail':
					case 'eel':
					case 'lionfish':
					case 'mandarinfish':
					case 'nigerTrigger':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'ocellarisClownfish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'azureDamselfish':
					case 'blueDamselfish':
					case 'dogFacedPufferfish':
					case 'dominoDamsel':
					case 'fourStripeDamselfish':
					case 'humbugDamselfish':
					case 'ocellarisClownfish':
					case 'yellowtailDamselfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'eel':
					case 'lionfish':
					case 'nigerTrigger':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'banggaiCardinalFish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'bluestreakCleanerWrasse':
					case 'dogFacedPufferfish':
					case 'sixlineWrasse':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'eel':
					case 'lionfish':
					case 'nigerTrigger':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'flameAngelfish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'coral':
					case 'dogFacedPufferfish':
					case 'eel':
					case 'lionfish':
					case 'nigerTrigger':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'coralBeautyAngelfish':
					case 'flameAngelfish':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'sixlineWrasse') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'banggaiCardinalFish':
					case 'crab':
					case 'shrimp':
					case 'snail':
					case 'dogFacedPufferfish':
					case 'eel':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'bluestreakCleanerWrasse':
					case 'clownTriggerfish':
					case 'lionfish':
					case 'nigerTrigger':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'fourStripeDamselfish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'banggaiCardinalFish':
					case 'crab':
					case 'shrimp':
					case 'snail':
					case 'dogFacedPufferfish':
					case 'ocellarisClownfish':
					case 'pajamaCardinalfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'eel':
					case 'lionfish':
					case 'mandarinfish':
					case 'nigerTrigger':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					case 'azureDamselfish':
					case 'blueDamselfish':
					case 'blueGreenChromis':
					case 'dominoDamsel':
					case 'humbugDamselfish':
					case 'yellowtailDamselfish':
						compatibilityReport.push(`Damselfish typically do not like other species of damselfish`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'occellarisClownfish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'yellowtailDamselfish':
					case 'blueDamselfish':
					case 'dominoDamselfish':
					case 'humbugDamselfish':
					case 'ocellarisClownfish':
					case 'fourStripeDamselfish':
					case 'azureDamselfish':
					case 'dogFacedPufferfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'lionfish':
					case 'seaHorse':
					case 'nigerTrigger':
					case 'eel':
					case 'clownTriggerfish':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'pajamaCardinalfish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'azureDamselfish':
					case 'bluestreakCleanerWrasse':
					case 'dogFacedPufferfish':
					case 'fourStripeDamselfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'eel':
					case 'lionfish':
					case 'nigerTrigger':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'azureDamselfish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'banggaiCardinalFish':
					case 'crab':
					case 'shrimp':
					case 'snail':
					case 'dogFacedPufferfish':
					case 'ocellarisClownfish':
					case 'pajamaCardinalfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'eel':
					case 'lionfish':
					case 'mandarinfish':
					case 'nigerTrigger':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					case 'blueDamselfish':
					case 'blueGreenChromis':
					case 'dominoDamsel':
					case 'fourStripeDamselfish':
					case 'humbugDamselfish':
					case 'yellowtailDamselfish':
						compatibilityReport.push(`Damselfish typically do not like other species of damselfish`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'mandarinfish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'mandarinfish':
						compatibilityReport = compatibilityReport+`\nMandarinfish need to be in mated pairs`;
						break;
					case 'anemono':
					case 'blueTang':
					case 'clownTriggerfish':
					case 'dominoDamsel':
					case 'eel':
					case 'fourStripeDamselfish':
					case 'humbugDamselfish':
					case 'lionfish':
					case 'nigerTrigger':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'watchmanGoby') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'crab':
					case 'shrimp':
					case 'snail':
					case 'dogFacedPufferfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'eel':
					case 'lionfish':
					case 'nigerTrigger':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'blueTang') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'dogFacedPufferfish':
					case 'lionfish':
					case 'nigerTrigger':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'mandarinfish':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'jewelledBlenny') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'dogFacedPufferfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'jewelledBlenny':
						compatibilityReport = compatibilityReport+`Jewelled Blenny needs to be in a mated pair`;
					case 'clownTriggerfish':
					case 'eel':
					case 'lionfish':
					case 'nigerTrigger':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'coralBeautyAngelfish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'coral':
					case 'dogFacedPufferfish':
					case 'eel':
					case 'lionfish':
					case 'nigerTrigger':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'coralBeautyAngelfish':
					case 'flameAngelfish':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'bluestreakCleanerWrasse') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'banggaiCardinalFish':
					case 'coral':
					case 'crab':
					case 'shrimp':
					case 'snail':
					case 'dogFacedPufferfish':
					case 'eel':
					case 'nigerTrigger':
					case 'pajamaCardinalfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'bluestreakCleanerWrasse':
					case 'clownTriggerfish':
					case 'lionfish':
					case 'seaHorse':
					case 'sixlineWrasse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'bluebandGoby') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'coral':
					case 'dogFacedPufferfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'eel':
					case 'lionfish':
					case 'nigerTrigger':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'lionfish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'anemone':
					case 'blueTang':
					case 'coralBeautyAngelfish':
					case 'coral':
					case 'crab':
					case 'shrimp':
					case 'snail':
					case 'dogFacedPufferfish':
					case 'eel':
					case 'flameAngelfish':
					case 'jewelledBlenny':
					case 'nigerTrigger':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'azureDamselfish':
					case 'banggaiCarindalFish':
					case 'blueDamselFish':
					case 'blueGreenChromis':
					case 'bluebandGoby':
					case 'bluestreakCleanerWrasse':
					case 'clownTriggerfish':
					case 'dominoDamsel':
					case 'fireGoby':
					case 'fourStripeDamselfish':
					case 'humbugDamselfish':
					case 'mandarinfish':
					case 'ocellarisClownfish':
					case 'pajamaCardinalfish':
					case 'seaHorse':
					case 'sixlineWrasse':
					case 'watchmanGoby':
					case 'yellowtailDamselfish':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'seaHorse') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'bluebandGoby':
					case 'fireGoby':
					case 'mandarinFish':
					case 'seaHorse':
					case 'watchmanGoby':
						break;
					default:
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
				}
			}
		}
		else if (inputFish === 'nigerTrigger') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'anemone':
						break;
					case 'blueTang':
					case 'CoralBeautyAngelfish':
					case 'dogFacedPufferfish':
					case 'eel':
					case 'flameAngelfish':
					case 'lionfish':
					case 'nigerTrigger':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					default:
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
				}
			}
		}
		else if (inputFish === 'eel') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'anemone':
					case 'bluestreakCleanerWrasse':
					case 'coralBeautyAngelfish':
					case 'crab':
					case 'shrimp':				
					case 'snail':
					case 'dogFacedPufferfish':
					case 'eel':
					case 'flameAngelfish':
					case 'lionfish':
					case 'nigerTrigger':
					case 'sixlineWrasse':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'blueTang':
						break;
					default:
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
				}
			}
		}
		else if (inputFish === 'dogFacedPufferfish') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'blueGreenChromis':
					case 'clownTriggerfish':
					case 'coral':
					case 'crab':
					case 'shrimp':
					case 'snail':
					case 'mandarinfish':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
				}
			}
		}
		else if (inputFish === 'clownTriggerfish') {
			compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
		}
		else if (inputFish === 'coral') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'anemone':
					case 'coralBeautyAngelfish':
					case 'coral':
					case 'crab':
					case 'shrimp':
					case 'snail':
					case 'flameAngelfish':
					case 'lionfish':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'dogFacedPufferFish':
					case 'eel':
					case 'fourStripeDamselfish':
					case 'nigerTrigger':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'anemone') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'anemone':
					case 'coral':
					case 'shrimp':
					case 'snail':
					case 'dogFacedPufferfish':
					case 'eel':
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
					case 'clownTriggerfish':
					case 'fourStripeDamselfish':
					case 'mandarinfish':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					case 'azureDamselfish':
					case 'blueDamselfish':
					case 'blueGreenChromis':
					case 'fourStripeDamselfish':
					case 'humbugDamselfish':
					case 'yellowtailDamselfish':
						compatibilityReport.push(`Damselfish typically do not like other species of damselfish`);
						break;
					default:
						break;
				}
			}
		}
		else if (inputFish === 'crab' || inputFish === 'shrimp' || inputFish === 'snail') {
			for (i = 0; i < fishArray.length; i++) {
				switch (fishArray[i]) {
					case 'watchmanGoby':
					case 'seaHorse':
						compatibilityReport.push(`${inputFish} cannot coexist with ${fishArray[i]}`);
						break;
					case 'banggaiCardinalFish':
					case 'blueTang':
					case 'flameAngelfish':
					case 'mandarinFish':
					case 'ocellarisClownfish':
					case 'pajamaCardinalfish':
					case 'blueGreenChromis':
					case 'JewelledBlenny':
						break;
					default:
						compatibilityReport.push(`CAUTION: ${inputFish} can coexist with ${fishArray[i]} only under certain conditions`);
						break;
				}
			}
		}
		else if (inputFish === '') {
		}
		else {
			alert('Unrecognized checkFish input: ' + inputFish);
		}
	}
return removeDuplicates(compatibilityReport);
} */
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