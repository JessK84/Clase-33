// Crear un programa que muestre la temperatura actual de la habitación y pregunte si tiene desea subir la temperatura. Si responde que sí, que pregunte en cuánto desea subirla, y mostrar luego la temperatura actualizada. Si responde que no, que pregunte si desea bajar la temperatura. Si responde que sí desea hacerlo, que pregunte en cuánto desea bajarla, y mostrar luego la temperatura actualizada.

const temperatura = confirm("La tempera actual de la sala es 24°C, ¿desea subir la temperatura?") === true &&
Number(prompt("¿A cuanto desea subirla?")) || confirm("¿Desea bajarla?") && Number(prompt("¿A cuanto desea bajarla?"));
alert(`La temperatura actual es: ${temperatura}°C`);


