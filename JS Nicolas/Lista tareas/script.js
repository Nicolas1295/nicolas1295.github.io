function guardartarea() {
    const inp_titulo = document.getElementById('titulo').value;
    const inp_descripcion = document.getElementById('descripcion').value;
    const inp_fecha = document.getElementById('fecha').value;

    const tarea = document.createElement('li');
    tarea.innerHTML = inp_titulo + ' - ' + inp_descripcion + ' - ' + inp_fecha;
    tareas.appendChild(tarea);
    
}


function limpiar() {
const elementoParaEliminar = document.getElementById('tareas');
elementoParaEliminar.innerHTML= '';

}