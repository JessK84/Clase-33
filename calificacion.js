// Crear un programa que permita ingresar el resultado de una evaluación con un puntaje del 1 al 10, y muestre un mensaje que diga:

// ¡Excelente!, si la nota es 10

// ¡Muy bien!, si la nota es 8 o 9

// Aprobado, si la nota es 6 o 7

// Reprobado, si la nota es menor a 6

const nota = Number(prompt("Ingrese la nota de su examen"));
nota > 0 && nota <= 5 && alert("Reprobado") || nota > 6 && nota <= 7 && alert("Aprobado") || nota >= 8 && nota <= 9 && alert("Muy Bien!") || nota >=10 && alert("Excelente") ;

 