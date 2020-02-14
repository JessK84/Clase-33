// Crear un programa que pregunte si acepta los términos y condiciones de uso. Si el usuario responde que sí, debe mostrar un mensaje que diga "Continuando con el proceso...". Si responde que no, debe mostrar un mensaje que diga "No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso".

let acepta = confirm("¿Acepata los términos y condiciones de uso?");

acepta === true && alert("Continuamos con el proceso") || acepta !== true &&alert("No podemos continuar con el proceso si no acepta los términos y condiciones") 
