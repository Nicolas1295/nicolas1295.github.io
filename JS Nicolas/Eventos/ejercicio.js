const contenedor = document.getElementById("contenedor");
const btnToggle = document.getElementById("toggle");

btnToggle.addEventListener("click", function() {
    contenedor.classList.toggle("grid");
});
