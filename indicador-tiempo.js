// Crear un programa que pida ingresar la temperatura del día e indique qué tiempo hace dependiendo de la misma (p. ej.: "Hace frío", "Está templado", etc.). Hacerlo para 3 posibles casos mínimo

const dia = Number(prompt("Ingrese que temperatura hace afuera"));

dia >= 0 && dia < 11 && alert("Muy frío, está para guantes y gorro de lana") || dia >= 12 && dia <= 21 && alert("Está fresco, lleve abrigo") || dia >= 22 && dia <= 27 && alert("Está calido, no lleve mucho abrigo")|| dia >= 28 && alert("Se hacerca el verano")