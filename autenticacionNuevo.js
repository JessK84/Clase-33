// Crear un programa que pida ingresar el usuario y la contraseña y los compare con el usuario y contraseña guardados en variables. Si coinciden debe mostrar un mensaje que diga "Autenticación exitoso" y si no, debe mostrar "Usuario o contraseña equivocados".

const ingreso = prompt("Ingrese el usuario") === "Jess" && Number(prompt("Ingrese la contraseña")) === 1984 && alert("Puede ingresar");
ingreso === !"Jess" && ingreso === !1984 && alert("Usuario o contraseña equivocados");

