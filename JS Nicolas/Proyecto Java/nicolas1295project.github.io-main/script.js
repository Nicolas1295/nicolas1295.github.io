// Cada vez que se haga scroll
document.addEventListener("scroll", () => {

    // 1. Definimos la función personalizada
    //function animarElementosAlHacerScroll() {
    // Seleccionamos todos los párrafos y subtítulos
    //const elements = document.querySelectorAll(".parrafo, .subtitulo, .subtitulo2");

    // Seleccionamos todos los parrafors, subtitulos y subtitulos2
    // querySelectorAll para escoger todas las clases con .parrafo, .subitutilo y .subtitulo2
    // Y se guarda dentro de la variqable elements como una node list 
    const elements = document.querySelectorAll(".parrafo, .subtitulo, .subtitulo2, .subtitulo3, .subtitulo4");

    // Para cada elemento de la constante elements lo almacenamos en la variable "el" 
    // que representa cada elemento de la node list (parrafo, subitutilo, ect)
    // Se recorre cada uno de los elementos usando forEach
    //  ForEach itera los elementos en cada grilla
    elements.forEach(el => {

      // Obtiene la distancia desde la parte superior del elemento hasta la parte superior de la ventana (viewport).
      const position = el.getBoundingClientRect().top;
      // Window.innerHeight es la altura visible de la ventana 
      // Se evalúa si la posición del elemento es menor al alto total de la ventana del navegador (window.innerHeight) menos 100 píxeles.
      if (position < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  });

// Seleccionamos todos los elementos con la clase "boton-compra"
const botones = document.querySelectorAll(".boton-compra");

// Recorremos cada uno de los botones encontrados
botones.forEach(boton => {
  
  // Agregamos un evento al hacer clic sobre cada botón
  boton.addEventListener("click", (e) => {
    
    // Previene que el enlace se abra automáticamente al hacer clic
    e.preventDefault();

    // Mostramos un cuadro de confirmación al usuario
    const respuesta = confirm("Vas a salir de esta página. ¿Quieres continuar?");

    // Si el usuario hace clic en "Aceptar"
    if (respuesta) {
      // Se abre el enlace en una nueva pestaña del navegador
      window.open(boton.href, '_blank');
    } else {
      // Si el usuario hace clic en "Cancelar", no se hace nada
      // El usuario permanece en la página actual
    }
  });

});
