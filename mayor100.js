const numero1 = Number(prompt("Elija un numero"));
const numero2 = Number(prompt("Elija otro numero"));
const numero3 = Number(prompt("Elija un último numero"));

const respuesta = numero1 > 100 || numero2 > 100 || numero3 > 100;

alert("¿Algun numero es mayor que 100? = " + respuesta);
