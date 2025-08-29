function verificar(){
    edad = document.getElementById("edad").value;

    if(edad >=18 && edad < 60){
        console.log("Eres un mayor de edad")
    }else if(edad >=60){
        console.log("Eres un adulto mayor")
        } else
        console.log("Eres menor de edad")
    }

let numero = 18;
let mensaje = (numero >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);
            
let dia = 5;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Día no válido");
}