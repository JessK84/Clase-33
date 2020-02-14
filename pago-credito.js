// Crear un programa que pida el monto a pagar, y si quiere pagarlo pagarlo con tarjeta o no. Si responde que no, debe mostrar un mensaje que diga "Gracias por su compra". Si responde que sí, debe preguntar en cuántas cuotas desea pagarlo: 3, 6, o 12. Luego, debe mostrar la cantidad de cuotas a pagar elegidas con su valor teniendo en cuenta el interés. El interés debe ser del 5% para 3 cuotas, 10% para 6 y 15% para 12, sobre el total. Guardar los porcentajes de intereses en variables.

const monto = Number(prompt("Ingrese el monto a pagar"));
let formaPago = true && confirm("¿Desea pagar con tarjeta? ") 




const cuotaTres = (monto / 3) * 1.05;
const cuotaSeies = (monto / 6) * 1.10;
const cuotaDoce = (monto / 12) * 1.15;

const elijaCuota = Number(prompt(`El valor de las cuotas es: 
-3 cuotas de: $${cuotaTres}
-6 cuotas de $${cuotaSeies}
-12 cuotas de $${cuotaDoce}
-¿En cuántas cuotas quiere pagar?"`));

elijaCuota === 3 && alert(`Va a pagar $${cuotaTres}`);
elijaCuota === 6 && alert(`Va a pagar $${cuotaSeies}`);
elijaCuota === 12 && alert(`Va a pagar $${cuotaDoce}`);

formaPago === false && alert("Gracias por su compra");




