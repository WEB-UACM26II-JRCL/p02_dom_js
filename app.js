// Practica 02: Manipulacion del DOM.
// Completa las funciones siguiendo la guia.

let tarjeta = document.getElementById("juego1");
console.log(tarjeta);

console.log("parte01");

console.log("parte02");
console.log(tarjeta.id);
console.log(tarjeta.textContent);
tarjeta.style.backgroundColor = "#fff3cd";

console.log("parte03");
console.log(tarjeta.children);
console.log(tarjeta.children.length);
console.log(tarjeta.children[0]);
console.log(tarjeta.children[1]);
console.log(tarjeta.children[2]);

console.log("parte04");
let tituloJuego = tarjeta.children[1];
console.log(tituloJuego);
tituloJuego.textContent = "Mundo Pixel 2";
tituloJuego.style.color = "blue";

console.log("parte05");
let descripcionJuego = tituloJuego.nextElementSibling;
console.log(descripcionJuego);
descripcionJuego.textContent = "Nueva aventura disponible";

console.log("parte06");
let padre = tituloJuego.parentElement;
console.log(padre);
console.log(padre.id);

console.log("parte07");
console.log(tituloJuego.previousElementSibling);
console.log(tarjeta.firstElementChild);
console.log(tarjeta.lastElementChild);
console.log(tarjeta.nextElementSibling);

console.log("parte08");
function saludar() {
    let campo = document.getElementById("nombre");
    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Hola, " + campo.value;
}

console.log("parte09");
let tarjetas = document.getElementsByClassName("tarjeta");
console.log(tarjetas);
console.log(tarjetas.length);
console.log(tarjetas[0]);
console.log(tarjetas[1]);

console.log("parte10");
tarjetas[1].style.backgroundColor = "#dbeafe";

console.log("parte11");
for (let i = 0; i < tarjetas.length; i++) {
    tarjetas[i].style.borderColor = "#1f5fa8"
}    
