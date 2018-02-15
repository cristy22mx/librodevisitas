

document.getElementById("large").addEventListener("click", functionLarge);

function functionLarge() {
	var addText = document.getElementById("ingresoTexto").value;
	document.getElementById("result").innerHTML = addText;
    document.getElementById("result").style.fontSize = 18 + "pt";
}

document.getElementById("medium").addEventListener("click", functionmedium);

function functionmedium() {
	var addText = document.getElementById("ingresoTexto").value;
	document.getElementById("result").innerHTML = addText;
    document.getElementById("result").style.fontSize = 12 + "pt";
}

document.getElementById("small").addEventListener("click", functionsmall);

function functionsmall() {
	var addText = document.getElementById("ingresoTexto").value;
	document.getElementById("result").innerHTML = addText;
    document.getElementById("result").style.fontSize = 8 + "pt";
}

