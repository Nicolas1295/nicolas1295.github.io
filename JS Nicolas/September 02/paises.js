async function paises() {
    let paises_datos = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags');
    let datos_array = await paises_datos.json();
    console.log(datos_array); // ✅ Aquí sí ves los países reales
}
paises();