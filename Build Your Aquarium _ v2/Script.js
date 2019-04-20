// declare variables

let fishArray = [];
let fishValue;
	
function addFish(fishValue) {
	/* 
	This function adds fish to an array 
	It should be run when the user pushes the add button
	Fish value is the corresponding user input
	*/
fishArray.push(fishValue); // This adds the user input to the array
	document.getElementById('fishnames').innerHTML = fishArray;
	// Not sure what this does ^
	// I think it displays the array for debugging purposes
fishTally(); // After adding fish, we update the tally.
	// Is the tally necessary or is it just for debugging?
}
// Tally the Fish
function fishTally() {
	//
	let cf = 0; // Clownfish
	let af = 0; // Angelfish
 	let bt = 0; // Blue Tang
	let cthulu = 0; // Cthulu
	let error = 0; // If 
	for (i = 0; i<fishArray.length; i++){
		if (fishArray[i] == 'clownfish') {
		cf++;
		} else if (fishArray[i] == 'angelfish') {
		af++;
		} else if (fishArray[i] == 'blueTang') {
		bt++;
		} else {
			error++;
		}
	}
document.getElementById('fishcount').innerHTML = "Count"+"<br>"+
	"clownfish: "+cf+"<br>"+
	"angelfish: "+af+"<br>"+
	"Blue Tang: " + bt + "<br>" +
	"Error: "+error+"<br>"+
	"TOTAL: "+fishArray.length;
	// The above function pushes that text to a div id called fishcount
	// Probably just for debugging
}
/* This function is disabled currently
function happyFish() {
	var warnings =[];
	/* fish needs
	clownfish <3 anemone
	*/
	/* Problems
	// Cthulu, the Great Old One can't be with any other fish
	// Clownfish and anemone
	if (cf > 0 && an == 0) {
		warnings.push("Clownfish needs an anemone!");
	}
	if (cthulu > 1) {
		warnings.push("Cthulu, the Great Old One can't be with any other fish");
	}

} */
// show fish
function placeFish() {
	let fishHomes = [];
	// I think fishHomes are div ids where fish are
	for (i=0; i < fishArray.length; i++){
		var fishhome = "<div id = 'fishFrame"+i+"'></div>"; 
		// what is fishframe
		fishHomes.push(fishhome);
	}
	document.getElementById('fishes').innerHTML = fishHomes;
	for (i=0; i<fishArray.length; i++){
		var posy = Math.random()*400+165;
		var posx = Math.random()*100+165;
		// var fishHome = "<div id = 'fish"+i+"'></div>";
		var currFish = ("<p id='"+fishArray[i]+"' style='top: "+posy+"px; left: "+posx+"px';></p>");
		
		// document.getElementById('fishes').innerHTML = fishHome;
		document.getElementById('fishFrame'+i).innerHTML = currFish;
		alert(currFish.toString());
		alert(fishArray[i].toString());
	}
	alert(fishHomes.toString());
}
function clearTank() {
	// This empties the arrays and then refreshes the div ids
fishArray = [];
fishHomes = [];
document.getElementById('fishnames').innerHTML = fishArray;
document.getElementById('fishcount').innerHTML = "Fish Count: " + fishArray.length ;
placeFish();
}