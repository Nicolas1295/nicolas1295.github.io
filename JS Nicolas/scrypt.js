function saludar() {
    //titulo.textContent = "nuevo titulo modificado con JavaScript";
    //parrafo.innerHTML = "parrafo modificado con <strong>JavaScript</strong>";
    //enlace.setAttribute('href', 'https://www.facebook.com/');
    //enlace.textContent = "Facebook";
    //caja.style.backgroundColor = 'blue';
    //nuevoDiv.textContent = 'Soy un nuevo DIV'; // Agrego lo que se mostrará  dentro del div
    //document.body.appendChild(nuevoDiv); // Agregas el nuevo <div> al final del <body>, por eso aparecerá visible en la página. Solo creara uno ya que la const no esta dentro de la función
    //miclase.appendChild(nuevoDiv); // Agregas el nuevo <div> dentro del elemento con clase 'miClase'
    // Capturar el valor de un input
    const input_nombre = document.getElementById('nombre');
    let nombre = input_nombre.value;
    //miclase.textContent = nombre; // Muestra el valor capturado del input dentro del elemento con clase 'miClase';
    //document.body.textContent = nombre; // Muestra el valor capturado del input en todo el body, eliminando todo lo que había antes

}  

function eliminar() {
    // Eliminar un elemento
    const elementoParaEliminar = document.querySelector('p');
    elementoParaEliminar.remove();
}

// Selección por ID
const titulo = document.getElementById('miTitulo');
console.log(titulo);

// Selección por clase
const elementos = document.getElementsByClassName('miClase');
console.log(elementos);

// Selección por selector CSS
const parrafo = document.querySelector('p');
console.log(parrafo);
const todosLosParrafos = document.querySelectorAll('p');
console.log(todosLosParrafos);


// Cambiar un atributo
const enlace = document.querySelector('a');

// Cambiar estilos
const caja = document.querySelector('.miClase');

// Crear un nuevo elemento en comillas simples
const nuevoDiv = document.createElement('div');

const miclase = document.querySelector('.miClase');


// Capturar el valor de un input




