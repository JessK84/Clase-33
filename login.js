// Crear un programa que pida ingresar la edad y muestre un mensaje de bienvenida al sitio si la edad es mayor o igual a 18, o de que no puede ingresar si es menor.

const edad = Number(prompt("Ingrese su edad"));
edad >= 18 && alert("Puede ingresar al sitio") || edad < 18 && alert("Lo siento, es menor y no puede ingresar");
