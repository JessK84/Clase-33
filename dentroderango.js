// const rangoInferior = Number(prompt("Elija el límite inferior del rango"));
// const rangoMayor = Number(prompt("Elija el límite mayor del rango"));
// const numero = Number(prompt("Elija un número aleatorio"));

// const dentroRango = numero > rangoInferior && numero < rangoMayor;

// alert("¿El nùmero està dentro del rango? = " + dentroRango);

// Crear un programa que pida al usuario ingresar un número que represente el límite inferior del rango, uno que represente el límite mayor, y luego otro cualquiera y mostrar en un mensaje si el último número se encuentra dentro del rango ingresado.

const limitInferior = Number(prompt("Ingrese el límite inferior del rango" ));
const limiteSuperior = Number(prompt("Ingrese el límite superior del rango" ));
const numero =  Number(prompt("Ingrese un número al azar" ));

const rango = numero <= limiteSuperior && numero >= limitInferior;

alert(`¿Su número se encuentra dentro del rango?`+ rango);

