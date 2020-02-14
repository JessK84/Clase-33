// Hacer un programa que pida ingresar los valores de los tres parciales de la cátedra mostrar un mensaje indicando si promociona o no la cátedra. La misma se promociona si al menos dos de ellos fueron aprobados con una nota de 8 o más.

const nota1 = Number(prompt("Ingrese el resultado del 1° parcial"));
const nota2 = Number(prompt("Ingrese el resultado del 2° parcial"));
const nota3 = Number(prompt("Ingrese el resultado del 3° parcial"));

const promocion = nota1 >= 8 && nota2 >= 8 || nota2 >= 8 && nota3 >= 8 || nota1 >= 8  && nota3 >= 8 ;

alert(`¿Ud. promocionó?` + promocion);



