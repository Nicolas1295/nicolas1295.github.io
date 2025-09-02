// Ejemplo de JavaScript Sincrónico
console.log("Tarea 1");
console.log("Tarea 2");
console.log("Tarea 3");


// Ejemplo de JavaScript Asincrónico con setTimeout
console.log("Inicio");
setTimeout(() => {
    console.log("Tarea Asincrónica");
}, 2000);
console.log("Fin");

async function fetchData() {
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await respuesta.json();
    for(let post of data){
        const tabla = document.querySelector("table")
        const fila = document.createElement("tr")
        const col1 = document.createElement("td")
        const col2 = document.createElement("td")
        const col3 = document.createElement("td")
        const col4 = document.createElement("td")
        col1.textContent = post.id
        col2.textContent = post.userId
        col3.textContent = post.title
        col4.textContent = post.body
        fila.appendChild(col1)
        fila.appendChild(col2)
        fila.appendChild(col3)
        fila.appendChild(col4)
        tabla.appendChild(fila)

        console.log (post.id);
        console.log (post.userId);
        console.log (post.title);
        console.log (post.body);
    }
    console.log(data);
}


fetchData();



