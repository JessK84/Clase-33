// Crear un programa que muestre el mensaje: "Está por comprar la Notebook HP 3000 a $40000". Luego debe preguntar, por separado, si desea agregarle más memoria, más espacio en disco, y una placa de vídeo mejor. Por cada respuesta afirmativa, debe agregarle $10000 al precio base. Mostrar al final un mensaje con un detalle de la compra, las mejoras elegidas y el precio final.



let notebook = confirm("Está por comprar la Notebook HP 3000 a $40.000.- ¿Desea agregar más memoria?");

let montoTotal = notebook === true && 40000 + 10000 || notebook === false && 40000 + 0;
let mensaje = notebook === true && "está agregando memoria a su compra" || notebook === false && "";

let espacio = montoTotal === true && (montoTotal +=) || montoTotal === false && 

confirm("¿Desea agregar más espacio?") === true && alert(`El costo del espacio es $10000. En total lleva gastado: $${total1 }`) || confirm === false && alert(`Hasta el momento lleva gastado: $${total}`);

confirm(`El costo de la memoria es $10000. En total lleva gastado: $${montoTotal}`) || alert(`Hasta el momento lleva gastado: $${notebook}`);




// const espacio = 10000;
// const total1 = total + espacio;

// confirm("¿Desea agregar más espacio?") === true && alert(`El costo del espacio es $10000. En total lleva gastado: $${total1 }`) || confirm === false && alert(`Hasta el momento lleva gastado: $${total}`);


// const placa = 10000;
// const total2 = total1 + placa;
// confirm("¿Desea agregar una placa de video mejor?") === true && alert(`El costo de la placa de video es $10000. En total lleva gastado: $${total1 }`) || confirm === false && alert(`Hasta el momento lleva gastado: $${total}`);

// alert(`El monto total de su compra es: $${total2}`);



// let computadora = confirm("Está por comprar la Notebook HP 3000 a $40000, desea agregarle mas memoria?");


// let precioFinal = computadora === true && 40000 + 10000 || computadora === false && 40000;
// let mensaje = computadora === true && "mas memoria" || computadora === false && ""; 


// computadora = confirm(`El monto de su compra hasta el momento es de $${precioFinal}, desea agregarle mas espacio en dispo por $ 10000?`);

// preciofinal = computadora === true && (precioFinal+= 10000) ||computadora === false && precioFinal;
// mensaje = computadora === true && mensaje + ", mas espacio en disco" || computadora === false && "";

// computadora = confirm(`El monto de su compra hasta el momento es de $${precioFinal}, desea agregarle una placa de video mejor por $ 10000`);

// precioFinal = computadora === true && (precioFinal+=10000) || computadora === false && precioFinal;
// mensaje = computadora === true && mensaje + " y placa de video" || computadora === false && ""; 


// alert(`Ud esta comprando la Notebook HP 3000 a $40000 ${mensaje} y el precio final es de $${precioFinal}`);