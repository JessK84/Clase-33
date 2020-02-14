// Crear un programa que pida al usuario evaluar del 1 al 10 cuánto le gusta X cosa (a elección). Dependiendo de la respuesta, debe mostrar un mensaje en consonancia. Hacer mínimo 4 casos posibles. Si se ingresa algo que no sea un número del 1 al 10, mostrar un mensaje de advertencia.


const rango = alert(`Tiene que evaluar del 1 al 10 cuánto le gusta cada actividad:`) ;

const gusto = Number(prompt("¿Cuanto le gusta ver Netfix?")) <= 10 === true || alert("Estas fuera viejo y no podremos evaluarte") ;
const gusto1 = Number(prompt("¿Cuanto le gusta ver deportes?"))<= 10 === true || alert("Estas fuera viejo y no podremos evaluarte") ;;
const gusto2 = Number(prompt("¿Cuanto le gusta ir al teatro?"))<= 10 === true || alert("Estas fuera viejo y no podremos evaluarte") ;;
const gusto3 = Number(prompt("¿Cuanto le gusta salir a pasear?")) <= 10 === true || alert("Estas fuera viejo y no podremos evaluarte") ;;
const gusto4 = Number(prompt("¿Cuanto le gusta compartir con amigos"))<= 10 === true || alert("Estas fuera viejo y no podremos evaluarte") ;;
const gusto5 = Number(prompt("¿Cuanto le gusta ver cocinar y agazajar a otras personas?"))<= 10 === true || alert("Estas fuera viejo y no podremos evaluarte") ;

const respuesta = gusto + gusto1 + gusto2 + gusto3 + gusto4 + gusto5;


respuesta >= 0 && respuesta < 10 && alert("Ud. es hermitáneo, pruebe con salilr un poco más") || respuesta >11 && respuesta < 16 && alert("Se nota que se esfuerza por socializar") || respuesta >16 && respuesta < 23 && alert("Es una persona sociable") || respuesta >23 && respuesta < 45 && alert("Es una persona sociable, a la que muchos estiman");
