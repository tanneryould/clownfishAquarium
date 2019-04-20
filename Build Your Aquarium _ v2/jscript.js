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
const fishList = [
	'anemone',
	'azureDamselfish',
	'banggaiCardinalFish',
	'blueDamselfish',
	'blueGreenChromis',
	'blueTang',
	'bluebandGoby',
	'bluestreakCleanerWrasse',
	'clownTriggerfish',
	'coralBeautyAngelfish',
	'coral',
	'crab',
	'snail',
	'dogFacedPufferfish',
	'dominoDamsel',
	'eel',
	'fireGoby',
	'flameAngelfish',
	'fourStripeDamselfish',
	'humbugDamselfish',
	'jewelledBlenny',
	'lionfish',
	'mandarinfish',
	'nigerTrigger',
	'ocellarisClownfish',
	'pajamalCarinalfish',
	'seaHorse',
	'sixlineWrasse',
	'watchmanGoby',
	'yellowtailDamselfish'
];
console.log(fishList);
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
function checkFishCompatibility(inputFish) {
	let returnString = '';
	if (inputFish = 'blueGreenChromis') {
		for (i = 0; i < fishArray.length; i++) {
			switch (fishArray[i]) {
				case 'dogFacedPufferfish':
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'lionfish':
				case 'seaHorse':
				case 'eel':
				case 'nigerTrigger':
				case 'clownTriggerfish':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
					break;
				case 'yellowtailDamselfish':
				case 'blueDamselfish':
				case 'dominoDamsel':
				case 'humbugDamselfish':
				case 'fourStripeDamselfish':
				case 'azureDamselfish':
					returnString = returnString+`\nDamselfish typically do not like other species of damselfish`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'eel':
				case 'lionfish':
				case 'nigerTrigger':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
					break;
				case 'azureDamselfish':
				case 'blueDamselfish':
				case 'blueGreenChromis':
				case 'dominoDamsel':
				case 'fourStripeDamselfish':
				case 'humbugDamselfish':
					returnString = returnString+`\nDamselfish typically do not like other species of damselfish`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'eel':
				case 'lionfish':
				case 'nigerTrigger':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
					break;
				case 'azureDamselfish':
				case 'blueDamselfish':
				case 'blueGreenChromis':
				case 'dominoDamsel':
				case 'fourStripeDamselfish':
				case 'humbugDamselfish':
				case 'yellowtailDamselfish':
					returnString = returnString+`\nDamselfish typically do not like other species of damselfish`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'eel':
				case 'lionfish':
				case 'nigerTrigger':
				case 'seaHorse':
				case 'mandarinfish':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
					break;
				case 'azureDamselfish':
				case 'blueDamselfish':
				case 'blueGreenChromis':
				case 'fourStripeDamselfish':
				case 'humbugDamselfish':
				case 'yellowtailDamselfish':
					returnString = returnString+`\nDamselfish typically do not like other species of damselfish`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'eel':
				case 'lionfish':
				case 'mandarinfish':
				case 'nigerTrigger':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
					break;
				case 'azureDamselfish':
				case 'blueDamselfish':
				case 'blueGreenChromis':
				case 'dominoDamsel':
				case 'fourStripeDamselfish':
				case 'yellowtailDamselfish':
					returnString = returnString+`\nDamselfish typically do not like other species of damselfish`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'fireGoby':
					returnString = returnString+`\nFire gobies need to be in mated pairs`;
					break;
				case 'clownTriggerfish':
				case 'crab':
				case 'shrimp':
				case 'snail':
				case 'eel':
				case 'lionfish':
				case 'mandarinfish':
				case 'nigerTrigger':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'eel':
				case 'lionfish':
				case 'nigerTrigger':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'eel':
				case 'lionfish':
				case 'nigerTrigger':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'coralBeautyAngelfish':
				case 'flameAngelfish':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'bluestreakCleanerWrasse':
				case 'clownTriggerfish':
				case 'lionfish':
				case 'nigerTrigger':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'eel':
				case 'lionfish':
				case 'mandarinfish':
				case 'nigerTrigger':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
					break;
				case 'azureDamselfish':
				case 'blueDamselfish':
				case 'blueGreenChromis':
				case 'dominoDamsel':
				case 'humbugDamselfish':
				case 'yellowtailDamselfish':
					returnString = returnString+`\nDamselfish typically do not like other species of damselfish`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'eel':
				case 'lionfish':
				case 'nigerTrigger':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'eel':
				case 'lionfish':
				case 'mandarinfish':
				case 'nigerTrigger':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
					break;
				case 'blueDamselfish':
				case 'blueGreenChromis':
				case 'dominoDamsel':
				case 'fourStripeDamselfish':
				case 'humbugDamselfish':
				case 'yellowtailDamselfish':
					returnString = returnString+`\nDamselfish typically do not like other species of damselfish`;
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
					returnString = returnString+`\nMandarinfish need to be in mated pairs`;
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
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'eel':
				case 'lionfish':
				case 'nigerTrigger':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'mandarinfish':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'jewelledBlenny':
					returnString = returnString+`Jewelled Blenny needs to be in a mated pair`;
				case 'clownTriggerfish':
				case 'eel':
				case 'lionfish':
				case 'nigerTrigger':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'coralBeautyAngelfish':
				case 'flameAngelfish':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'bluestreakCleanerWrasse':
				case 'clownTriggerfish':
				case 'lionfish':
				case 'seaHorse':
				case 'sixlineWrasse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'eel':
				case 'lionfish':
				case 'nigerTrigger':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
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
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				default:
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'blueTang':
					break;
				default:
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
					break;
				default:
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
			}
		}
	}
	else if (inputFish === 'clownTriggerfish') {
		returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'dogFacedPufferFish':
				case 'eel':
				case 'fourStripeDamselfish':
				case 'nigerTrigger':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
					break;
				default:
					break;
			}
		}
	}
	else if (inputFish === 'amenome') {
		for (i = 0; i < fishArray.length; i++) {
			switch (fishArray[i]) {
				case 'anemone':
				case 'coral':
				case 'shrimp':
				case 'snail':
				case 'dogFacedPufferfish':
				case 'eel':
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
				case 'clownTriggerfish':
				case 'fourStripeDamselfish':
				case 'mandarinfish':
				case 'seaHorse':
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
					break;
				case 'azureDamselfish':
				case 'blueDamselfish':
				case 'blueGreenChromis':
				case 'fourStripeDamselfish':
				case 'humbugDamselfish':
				case 'yellowtailDamselfish':
					returnString = returnString+`\nDamselfish typically do not like other species of damselfish`;
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
					returnString = returnString+`\n${inputFish} cannot coexist with ${fishArray[i]}`;
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
					returnString = returnString+`\nCAUTION: ${inputFish} 
					can coexist with ${fishArray[i]} only under certain conditions`;
					break;
			}
		}
	} 
	else {
		alert('Unrecognized checkFish input: ' + inputFish);
		return undefined;
	}
	return returnString;
}