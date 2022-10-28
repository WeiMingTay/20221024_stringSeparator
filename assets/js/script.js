// Variablen bestimmen

let inputText = document.getElementById("inputText"),
	inputString = document.getElementById("inputString"),
	radioDavor = document.getElementById("trennenDavor"),
	radioDanach = document.getElementById("trennenDanach"),
	outputVorne = document.getElementById("outputVorne"),
	outputHinten = document.getElementById("outputHinten");
outputRest = document.getElementById("outputRest");

// Funktion

function trennen() {
	let inputArray = inputText.value.split(inputString.value);
	if (radioDavor.checked) {
		outputVorne.innerHTML = inputArray[0];
		outputHinten.innerHTML = inputString.value + inputArray[1];

		outputRest.innerHTML =
			inputString.value +
			inputArray.slice(2, inputArray.length).join(inputString.value);
	} else if (radioDanach.checked) {
		outputVorne.innerHTML = inputArray[0] + inputString.value;
		outputHinten.innerHTML = inputArray[1];

		outputRest.innerHTML =
			inputString.value +
			inputArray.slice(2, inputArray.length).join(inputString.value);
	}
}
