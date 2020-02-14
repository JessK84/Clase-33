// ear un programa que sea un cuestionario con 3 preguntas de sí o no. Al finalizar, mostrar un mensaje de felicitaciones si se respondió bien a todas, o uno de que ha perdido el juego si respondió mal al menos una.

let pregunta1 = confirm("¿Rosario es la capital de Santa Fe?") === false;
let pregunta2 = confirm("Buenos Aires es la capital de Buenos Aires?") === false;
let pregunta3 = confirm("Posadas es la capital de Misiones?") === true;
const respuesta = pregunta1 && pregunta2 && pregunta3 === true && alert("Iupi! Ha ganado!!!");
respuesta === false && alert("Lo siento, ha perdido");




