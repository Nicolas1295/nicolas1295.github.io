// Los arrays empiezan con el indice 0
let numeros = [1,2,3,4,5,6,7,8,9,0]
console.log(numeros)
// Push agrega el elemento al final de la lista
numeros.push(6)
console.log(numeros)
console.log(numeros[0])


// Pop elimina el ultimo elemento de la lista
numeros.pop()
console.log(numeros)


let frutas = ['manzana', 'banana', 'naranja'];
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Encontrar elementos
let indice = numeros.indexOf(3); // devuelve 2
    console.log(indice)

// Combinar arrays
let otrosNumeros = [6, 7];
let combinado = numeros.concat(otrosNumeros); // [1, 2, 3, 4, 5, 6, 7]
console.log(combinado)

