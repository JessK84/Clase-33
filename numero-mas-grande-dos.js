// Hacer un programa que pida ingresar 2 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.

const numero1 = Number(prompt("Ingrese un número"));
const numero2 = Number(prompt("Ingrese otro número"));



const resultado = alert(`El número más grande es: ${numero1 && numero2}`) || numero1 === numero2 && alert(`Ambos número son iguales`);








