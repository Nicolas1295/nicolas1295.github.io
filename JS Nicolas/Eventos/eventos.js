// BOTÓN: "Click aqui"
let boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
    alert("¡Botón clickeado!");
});

// TECLADO: detectar tecla presionada
document.addEventListener("keydown", function(evento) {
    console.log("Tecla presionada: " + evento.key);
});

// CAJA: cambiar color con mouseover y mouseout
let caja = document.getElementById("micaja");

caja.addEventListener("mouseover", function() {
    caja.style.backgroundColor = "blue";
});

caja.addEventListener("mouseout", function() {
    caja.style.backgroundColor = "white";
});

// FORMULARIO: evitar recarga y mostrar alerta
let formulario = document.getElementById("miformulario");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // No se recarga la página
    alert("Formulario enviado");
});

// BOTÓN EXTRA: cambiar clase "highlight"
let botonClase = document.getElementById("cambiar");

botonClase.addEventListener("click", function() {
    caja.classList.toggle("highlight");
    console.log("Clases actuales de micaja:", caja.className);
    console.log("Botón presionado. Clases actuales:", caja.className);

});
