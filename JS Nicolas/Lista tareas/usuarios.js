function guardarUsuario(){
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const ciudad = document.getElementById('ciudad').value;
    const pais = document.getElementById('pais').value;

    const tabla = document.querySelector('table tbody');
    const fila = document.createElement('tr');
    const columnaNombre = document.createElement('td');
    const columnaEmail = document.createElement('td');
    const columnaApellido = document.createElement('td');
    const columnaTelefono = document.createElement('td');
    const columnaDireccion = document.createElement('td');
    const columnaCiudad = document.createElement('td');
    const columnaPais = document.createElement('td');

    columnaNombre.textContent = nombre;
    columnaEmail.textContent = email;
    columnaApellido.textContent = apellido;
    columnaTelefono.textContent = telefono;
    columnaDireccion.textContent = direccion;
    columnaCiudad.textContent = ciudad;
    columnaPais.textContent = pais;
    fila.appendChild(columnaNombre);
    fila.appendChild(columnaEmail); 
    fila.appendChild(columnaApellido);
    fila.appendChild(columnaTelefono);
    fila.appendChild(columnaDireccion);
    fila.appendChild(columnaCiudad);
    fila.appendChild(columnaPais);
    tabla.appendChild(fila);

    limpiarFormulario(); // 👈 esto al final

}

function limpiarFormulario(){
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('ciudad').value = '';
    document.getElementById('pais').value = '';

}

function borrarTabla() {
  const cuerpoTabla = document.querySelector('table tbody');
  cuerpoTabla.innerHTML = ''; // Elimina todas las filas (datos)
}