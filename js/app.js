/*Variable donde se ingresa el texto del usuario*/

var textUser = document.getElementById("ingresoTexto");
textUser.addEventListener("keyup", showPreview);

/*Variable donde se refleja lo que el usuario ingreso*/

var textPreview = document.getElementById("preview");


//Función para reflejar texto en textarea
function showPreview() {
    textPreview.textContent = textUser.value;
}

/*Función botón large*/

var buttonLarge = document.getElementById("large").addEventListener("click", functionLarge);

function functionLarge() {
    textPreview.style.fontSize = 18 + "pt";
}

/*Función botón medium*/

var buttonmedium = document.getElementById("medium").addEventListener("click", functionMedium);

function functionMedium() {
    textPreview.style.fontSize = 12 + "pt";
}

/*Función botón large*/

var buttonsmall = document.getElementById("small").addEventListener("click", functionSmall);

function functionSmall() {
    textPreview.style.fontSize = 8 + "pt";
}

/*Función botón color letra*/

var textColor = document.getElementById("colorText").addEventListener("click", functionColor);

function functionColor() {
	var colorText = prompt("Escribe de qué color quieres tu texto");
    textPreview.style.color = colorText;
}

/*Función botón Backgroun color*/

var backgroundColor = document.getElementById("fondo").addEventListener("click", functionBackgroun);

function functionBackgroun() {
	var colorBackground = prompt("Escribe de que color quiere tu fondo");
    textPreview.style.backgroundColor = colorBackground;
}

/*Función botón left*/

var buttonleft = document.getElementById("left")
buttonleft.addEventListener("click", functionLeft);

function functionLeft() {
    textPreview.style.textAlign = "left";
}

/*Función botón center*/

var buttoncenter = document.getElementById("center")
buttoncenter.addEventListener("click", functionCenter);

function functionCenter() {
    textPreview.style.textAlign = "center";
}

/*Función botón right*/

var buttonright = document.getElementById("right")
buttonright.addEventListener("click", functionRight);

function functionRight() {
    textPreview.style.textAlign = "right";
}

// Para añadir el comentario del usuario a la lista

var sendpreview = document.getElementById("send").addEventListener("click", send);

function send(){
// Crear nodo de tipo Element
var comment = document.createElement('p');

// Crear nodo de tipo Text
var content = document.createTextNode(textPreview);

// Añadir el nodo Text como hijo del nodo Element
paragraph.appendChild(content);

// Añadir el nodo Element como hijo de la pagina
document.body.appendChild(comment);
}












// guardar_datos();

function guardar_datos(){

	var addText = document.getElementById("ingresoTexto").value;
  
  localStorage.setItem("nombre", nombre);

}

obtener_localsotrage();

function obtener_localsotrage(){
  
  var nombre = localStorage.getItem("nombre");

console.log ( nombre );
console.log ( apellido );

}