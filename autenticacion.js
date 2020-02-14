

// Crear un programa que pida ingresar el usuario y la contraseña y los compare con el usuario y contraseña guardados en variables, y muestre en un mensaje si tiene el acceso autorizado

const user = "Jess";
const password = 1604;

const usuario = prompt("Ingrese su usuario");
const contrasenia = Number(prompt("Ingrese su clave"));


const validacion = usuario === "Jess" && contrasenia === 1604;

alert(`¿Puede ingresar al sistema: ` + validacion);
